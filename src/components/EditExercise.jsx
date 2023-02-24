import React, { useState ,useEffect} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




function EditExercise(props) {


    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    const { id } = useParams();

  
  
  useEffect(()=>{
       document.title="Edit Exercise"
     axios.get(`http://localhost:9000/exercises/${id}]`)
      .then(res => {
        setUsername(res.data.username)
        setDescription(res.data.description)
        setDate(res.data.date)
        setDuration(new Date(res.data.duration))
       
         
   
      })
      
      .catch((error) => {
        console.log(error);
      })

          axios.get('http://localhost:9000/users/')
      .then(res => {
       
          setUsers(
            res.data.map(user => user.username),
          
          )
        
      })
      
      .catch((error) => {
        console.log(error);
      })
})



    function OnChangeUsername(e) {
        setUsername(e.target.value)
    
    }
    function OnChangeDesctiption(e) {
        setDescription(e.target.value);
    }
    function OnChangeDuration(e) {
        setDuration(e.target.value);
    }
    function OnChangeDate(date) {
        setDate(date);
    }
    function OnSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date

        }

        axios.post(`http://localhost:9000/exercises/update/${id}`,exercise)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

        window.location="/"


    }



    return (

<div>
    <h3>Edit Exercise Here</h3>
    <p>You have to re-enter all fields , sorry =/</p>
    <br></br>
    <form onSubmit={OnSubmit}>
        <div className="form-group">
          
            <label>Username :</label>
           
            <select 
                // required
                className="form-control"
                value={username}
                onChange={OnChangeUsername}>
                {
                    users.map(user => {
                        return <option key={user} value={user}>{user}
                        </option>;
                    })
                }
            </select>
        </div>
        

        <div className="form-group">
            <label>Description: </label>
            <input type="text"
                required
                className="form-control"
                placeholder={description}
                value={description}
                onChange={OnChangeDesctiption}
            />
        </div>
        <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
                type="text"
                className="form-control"
                placeholder={duration}
                value={duration}
                onChange={OnChangeDuration}
            />
        </div>

        <div className="form-group">
            <label>Date: </label>
            <div>
                <DatePicker
                    selected={date}
                    onChange={OnChangeDate}
                />
            </div>
        </div>
         <br></br>
        <div className="form-group">
            <input type="submit" value="Edit Exercise" className="btn btn-primary" />
        </div>







    </form>

</div>

    )

}

export default EditExercise;