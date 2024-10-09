// src/Table.jsx
import React from "react";

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Assigned</th>
          <th>To Do</th>
        </tr>
      </thead>
    );
  }
  
  
    
  
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}>
      Done
    </button>
    </td>
        </tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={props.characterData}
          removeCharacter={props.removeCharacter}
        />
      </table>
    );
  }
  export default Table;