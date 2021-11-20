const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    const user = await User.create(req.body);


    res.status(201).json({
        status: 'success',
        user
    })
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    await User.findOne({email}, (err, user) => {
        if (user){
            bcrypt.compare(password, user.password, (err, success) => {
                if (success){
                    req.session.userID = user._id;
                    res.redirect('/')
                }
            });
        }
    })
}

exports.logout = async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}


