const express = require('express')
const router = express.Router()
const Workout = require('../models/WorkoutModel')
// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
    
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
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