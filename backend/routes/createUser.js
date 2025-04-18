const express = require('express')   
const router = express.Router()
const User = require('../models/User.js')
const { body, validationResult } = require('express-validator')

const becrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET="thisisasecretkey"


// Create User Route
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
        const salt=await becrypt.genSalt(10);
        const secPass=await becrypt.hash(req.body.password,salt);
        req.body.password=secPass;
        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location,
            })
            res.json({ success: true, message: 'User created successfully' })
        } catch (error) {
            console.error('Error creating user:', error)
            res.status(500).json({ success: false, error: 'Internal Server Error' })
        }
    }
)

// Login User Route
router.post('/loginuser', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],
    async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() })
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ success: false, error: 'Invalid credentials' })
            }

            const passwordCompare = await becrypt.compare(req.body.password, user.password)
            if (!passwordCompare) {
                return res.status(400).json({ success: false, error: 'Invalid credentials' })
            }


            // Generate a token or perform any other login logic here
            // For example, you can use JWT to generate a token and send it back to the client
            const data={
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ success: true, message: 'User logged in successfully', authToken: authToken })
        } catch (error) {
            console.error('Error logging in user:', error)
            res.status(500).json({ success: false, error: 'Internal Server Error' })
        }
    }
)

module.exports = router;
