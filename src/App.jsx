 import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import Nav from "./components/navbar"
import ExerciseList from "./components/ExerciseList"
import CreateUser from "./components/CreateUser"
import CreateExercise from "./components/CreateExercise"
import EditExercise from "./components/EditExercise"




function App() {
  return  (

    
  
    <Router>
         <div className='container'>
       <Nav/>
       <br/>
      <Routes> 
       <Route path="/"  element={<ExerciseList/>} />
       <Route path="/user"   element={<CreateUser/>} />
       <Route path="/create"   element={<CreateExercise/>} />
       <Route path="/edit/:id"   element={<EditExercise/>} />
     </Routes> 
     </div>
     
    </Router>
   

 )
   
 
}

export default App;
    





       



    
    

     
