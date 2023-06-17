const express = require('express')
const router = express.Router
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


router.post("/createuser",
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })


router.post("/loginuser",
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),


    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }



        try {
            await User.findOne({

                email: req.body.email,
                password: req.body.password,

            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;