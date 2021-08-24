import React, {useState, useEffect} from 'react'

const Add = (props) => {
    let emptyDog = {name: '', breed: '', age: '', gender: '', color: '', image: '', weight: ''}
    const [dog, setDog] = useState(emptyDog)

    // Creating handlers
    const handleChange = (event) => {
        setDog({...dog, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleCreate(dog)
    }
    return(
      <>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="breed">Breed:</label>
            <input type="text" name="breed" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="gender">Gender:</label>
            <input type="text" name="gender" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="weight">Weight: </label>
            <input type="number" name="weight"
            onChange={handleChange} />
            <br />
            <br />
            <input type="submit"/>

        </form>
    </>
    )
}

export default Add