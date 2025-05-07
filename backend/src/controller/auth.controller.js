
exports.getUserInfo = (req, res) => {
    console.log("User object:", req.user);

    if (req.user) {
        res.status(200).json({
            name: req.user.displayName || "",
            email: req.user.emails?.[0]?.value || "",
            picture: req.user.photos?.[0]?.value || "",
            message: "success",
            status: true
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

exports.logoutUser = (req, res) => {
    req.logout(() => {
        res.clearCookie('jwt', {
            httpOnly: false,
            secure: true, // match how you set it
            sameSite: 'Lax',
          });
        res.redirect(process.env.CLIENT_URL);
    });
};
