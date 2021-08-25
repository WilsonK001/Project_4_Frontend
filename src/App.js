import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add.js'
import Edit from './components/Edit.js'
import Nav from './components/Nav'
import './App.css'
const App = () => {
  let [dog, setDog] = useState([])
   const getDog = () => {
     axios
        .get('https://lit-headland-65632.herokuapp.com/api/dogs')
        .then(
          (response) => setDog(response.data),
          (error) => console.error(error)
        )
        .catch((error) => console.error(error))
     
   }
   const handleCreate = (addDog) => {
     axios
        .post('https://lit-headland-65632.herokuapp.com/api/dogs', addDog)
        .then((response) => {
          console.log(response)
          getDog()
        })
   }

   const handleDelete = (event) => {
    //  console.log(event.target.value);
     axios
        .delete('https://lit-headland-65632.herokuapp.com/api/dogs/' + event.target.value)
        .then((response)=> {
          getDog()
        })
   }
   const handleUpdate = (editDog) => {
     axios
        .put('https://lit-headland-65632.herokuapp.com/api/dogs/' + editDog.id, editDog)
        .then((response) => {
          getDog()
        })
   }

   useEffect(() =>{
     getDog()
   }, [])
   
  return (
    <>
    <Nav />
      <Add handleCreate={handleCreate}/>
      <div className="dog">{dog.map((dog) => {
        return ( 
     
        <div className="dog__list" key={dog.id}>
          <img src={dog.image} />
          <h5>Name: {dog.name}</h5>
          <h5>Breed: {dog.breed}</h5>
          <h5>Age: {dog.age}</h5>
          <h5>Gender: {dog.gender}</h5>
          <h5>Color: {dog.color}</h5>
          <h5>Weight: {dog.weight}</h5>
          <button onClick={handleDelete} value={dog.id}>
            Delete
          </button>
          <button onClick={handleUpdate} value={dog.id}>
          Edit
          </button>
        </div>
      )
        })}
        </div>
    </>
  )
}

export default App

