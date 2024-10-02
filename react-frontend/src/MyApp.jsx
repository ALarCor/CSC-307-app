// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./Table";
import Form from "./form";

// src/MyApp.jsx


function MyApp() {
  const characters = [
    {
      name: "Charlie",
      job: "Janitor"
    },
    {
      name: "Mac",
      job: "Bouncer"
    },
    {
      name: "Dee",
      job: "Aspring actress"
    },
    {
      name: "Dennis",
      job: "Bartender"
    }
  ];
  function updateList(person) {
    setCharacters([...characters, person]);
  }
  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form />
    </div>
  );
 
  }
  
  
export default MyApp;