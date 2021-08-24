import React, {useState} from 'react'

const Edit = (props) => {
    let emptyDog = {name: '', breed: '', age: '', gender: '', color: '', image: '', weight: ''}
    const [dog, setDog] = useState(emptyDog)

    const handleChange = (event) => {
        setDog({...dog, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleCreate(dog)
    }

return (
    <>
        <details>
            <summary>Edit Dog</summary>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                value={dog.name}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="breed">Breed: </label>
            <input
                type="text"
                name="name"
                value={dog.breed}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input
                type="number"
                name="age"
                value={dog.age}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="gender">Gender: </label>
            <input
                type="text"
                name="gender"
                value={dog.gender}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="color">Color: </label>
            <input
                type="text"
                name="color"
                value={dog.color}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="image">Image: </label>
            <input
                type="text"
                name="image"
                value={dog.image}
                onChange={handleChange}
                />
            <br />
            <br />
            <label htmlFor="weight">Weight: </label>
            <input
                type="number"
                name="weight"
                value={dog.weight}
                onChange={handleChange}
                />
            <input type="submit" />
            


        </form>
        </details>
    </>

)
}
export default Edit