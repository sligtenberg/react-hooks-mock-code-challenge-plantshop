import React from "react";

function NewPlantForm({ addNewPlant }) {
  const handleNewPlant = (event) => {
    event.preventDefault()
    const newPlant = {
      name: event.target[0].value,
      image: event.target[1].value,
      price: event.target[2].value
    }
    addNewPlant(newPlant)
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
