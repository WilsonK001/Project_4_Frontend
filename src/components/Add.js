import React, {useState, useEffect} from 'react';
import './Add.css';

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
        <div className="form">
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="breed">Breed:</label>
                    <input type="text" name="breed" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" name="gender" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="weight">Weight: </label>
                    <input type="number" name="weight"
                    onChange={handleChange} />
                </div>
                <input type="submit" className="add__btn"/>

            </form>
        </div>
      </>
    )
}

export default Add