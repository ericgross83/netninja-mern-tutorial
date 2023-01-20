const express = require('express')
const router = express.Router()
const Workout = require('../models/WorkoutModel')
const {createWorkout, getWorkout, getWorkouts} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a single workout'})
})

// UPDATE a single workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATED a single workout'})
})



module.exports = router