const express = require('express')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
    
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'Workout posted'})
})

// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a single workout'})
})

// UPDATE a single workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATED a single workout'})
})



module.exports = router