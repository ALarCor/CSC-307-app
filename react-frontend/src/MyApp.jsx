import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  // Use state for characters
  const [characters, setCharacters] = useState([
    {
      name: "Charlie",
      job: "Clean the Bathrooms",
    },
    {
      name: "Mac",
      job: "Clean the Truck",
    },
    {
      name: "Abigail",
      job: "Study SQL",
    },
    {
      name: "Dennis",
      job: "Chill",
    },
  ]);

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => i !== index);
    setCharacters(updated);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
