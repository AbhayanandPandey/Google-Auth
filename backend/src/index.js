require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const AuthRouter = require('./routes/auth.js');

const passport  = require('passport')
const session = require('express-session');
const gogleStrategy = require('passport-google-oauth20').Strategy

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}
))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new gogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt:"select_account",
}))

app.get('/auth/google/callback', 
    passport.authenticate('google', {
      failureRedirect: process.env.CLIENT_URL,
    }),
    (req, res) => {
      res.redirect(process.env.CLIENT_SUCCESS_URL);
    }
  );
  
    
app.get('/auth/user/info', (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.status(200).json({
            name: req.user.displayName,
            email: req.user.emails[0].value,
            picture: req.user.photos[0].value,
            message:"saccess",
            status: true
        })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
})


app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on port ${process.env.PORT}`)
})