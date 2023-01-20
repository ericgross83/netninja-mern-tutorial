const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// get all workouts
async function getWorkouts(req, res) {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get a single workout
async function getWorkout(req,res) {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)
    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// create new workout
async function createWorkout (req, res) {
    const {title, load, reps} = req.body

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// delete a workout
async function deleteWorkout(req, res) {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)

}

//update a workout
async function updateWorkout(req, res) {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout}