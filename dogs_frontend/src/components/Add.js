import React, {useState, useEffect} from 'react'

const Add = (props) => {
    let emptyDog = {id: '', name: '', breed: '', age: '', gender: '', color: '', image: '', weight: ''}
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
            <label htmlFor="id">ID:</label>
            <input type="number" id="id" 
            onChange={handleChange}/>
            
            <br />
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="breed">Breed:</label>
            <input type="text" breed="breed" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="gender">Gender:</label>
            <input type="text" gender="gender" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="color">Color:</label>
            <input type="text" color="color" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="image">Image:</label>
            <input type="text" image="image" 
            onChange={handleChange}/>
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age"
            onChange={handleChange} />
            <br />
            <br />
            <input type="submit"/>

        </form>
    </>
    )
}

export default Add