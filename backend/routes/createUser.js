const express = require('express')   
const router = express.Router()
const User = require('../models/User.js')
const {body, validationResult} = require('express-validator')

router.post('/createuser',
    [
        body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
       
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() })
        }
    try {

        await User.create({
            name:req.body.name,
            password: req.body.password,
            email:req.body.email,
            location: req.body.location,
        })
        res.json({ success: true, message: 'User created successfully' })
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
})
module.exports = router; 
