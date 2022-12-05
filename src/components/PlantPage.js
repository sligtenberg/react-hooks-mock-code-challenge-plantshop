import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }, [])

  const addNewPlant = newPlant => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(() => setPlants([...plants, newPlant]))
  }

  const displayedPlants = plants.filter(plant => search === "" || plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList displayedPlants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
