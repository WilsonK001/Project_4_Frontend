import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add.js'
import Edit from './components/Edit.js'
import Nav from './components/Nav'
import './App.css'
const App = () => {
  let [dog, setDog] = useState([])
  let [page, setPage] = useState('index')
   const getDog = () => {
     setPage('index')
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
      if (confirm("Are you sure you want to delete this record?")) {
        axios
            .delete('https://lit-headland-65632.herokuapp.com/api/dogs/' + event.target.value)
            .then((response)=> {
              getDog()
            })
      }
   }
   const handleUpdate = (editDog) => {
     setPage('edit')
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
      { page !== 'index' ?
        <div>
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
          </div>
        :
          <Edit handleUpdate={handleUpdate} />
        }
      
    </>
  )
}

export default App

