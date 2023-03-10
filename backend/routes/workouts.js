const express = require('express')
const router = express.Router()
const Workout = require('../models/WorkoutModel')
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a single workout
router.delete('/:id', deleteWorkout)

// UPDATE a single workout
router.patch('/:id', updateWorkout)



module.exports = router