import React ,{useState}  from "react"
import axios from "axios"



import 'bootstrap/dist/css/bootstrap.min.css';
 



function CreateUser(){


    const [username,setUsername]=useState("")
     
    function OnChangeUsername(e){
        setUsername(e.target.value)
    }


    
    function OnSubmit(e) {
        e.preventDefault();

        //frontend http request to the server endpoint 
        axios.post("http://localhost:9000/users/add",{Username:username})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

        
 
        setUsername("")
        

    }
    


return (
     
      <div>

        <h3>Create New User</h3>

        <form onSubmit={OnSubmit}>

          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={OnChangeUsername}
                />
          </div>

          <br></br>

          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
  
)

}

export default CreateUser;