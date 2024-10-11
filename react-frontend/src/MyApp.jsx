import Table from "./Table";
import Form from "./Form";
import React, {useState, useEffect} from 'react';
import cors from "cors";

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
  
  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

  function postUser(person) {
    const promise = fetch("http://localhost:5173/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
  
    return promise;
  }
  function fetchUsers() {
    const promise = fetch("http://localhost:5173/");
    return promise;
}

function updateList(person) {
  postUser(person)
    .then((res) => {
      if (res.status === 201) {  
        return res.json();  
      } else {
        throw new Error("Failed to add user");
      }
    })
    .then((newUser) => {
     
      setCharacters([...characters, newUser]);
    })
    .catch((error) => {
      console.log(error);
    });
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
