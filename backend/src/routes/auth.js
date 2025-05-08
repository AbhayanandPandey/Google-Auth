const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getUserInfo, logoutUser } = require('../controller/auth.controller');
const jwt = require('jsonwebtoken');

router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
);
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: process.env.CLIENT_URL,
    }),(req, res) => {
        const user = req.user;

        const token = jwt.sign({
            id: user.id,
            name: user.displayName,
            email: user.emails?.[0]?.value,
            picture: user.photos?.[0]?.value
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.cookie('jwt', token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 86400000 // 1 day
        });

        res.redirect(`${process.env.CLIENT_SUCCESS_URL}?name=${user.displayName}&email=${user.emails?.[0]?.value}&picture=${user.photos?.[0]?.value}`);

    }
);

router.get('/user/info', getUserInfo);
router.get('/logout', logoutUser);

module.exports = router;
