import React, {useEffect, useState} from 'react';
import WorkoutDetails from "../components/WorkoutDetails";

export default function Home() {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok)
            {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    },[])

    return (
        <div className={'home'}>
            <div className="workouts">
                {workouts && workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout}/>
                )}
            </div>
        </div>
    );
};
