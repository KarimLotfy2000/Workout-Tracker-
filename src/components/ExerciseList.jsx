import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';



function ExerciseList() {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/exercises/")
            .then(res => setExercises(res.data))
            .catch(err => console.log(err))
    })

    function deleteExercise(id) {
        axios.delete(`http://localhost:9000/exercises/${id}`)
            .then(res => console.log(res.data))
        setExercises(exercises.filter(exercise => exercise._id !== id))

    }


    return (

    <div>
            <h3>Saved Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
        <tbody>
            {exercises.map(exercise => {
                return (

                    <tr>
                        <td>{exercise.username}</td>
                        <td>{exercise.description}</td>
                        <td>{exercise.duration}</td>
                        <td>{exercise.date.substring(0, 20)}</td>
                        <td>
                            <Link to={`/edit/${exercise._id}`}><button>Edit</button></Link>
                            <button onClick={() => {deleteExercise(exercise._id) }}>Delete</button>
                        </td>
                    </tr>
                )
                    })}

        </tbody>
     </table>
</div>

    )

}









export default ExerciseList;