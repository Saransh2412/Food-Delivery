const express = require('express')   
const router = express.Router()
const User = require('../models/User')

router.post('/createuser', async (req, res) => {
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
