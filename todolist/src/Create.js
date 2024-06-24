import React, { useState} from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState();
  const todoAdd = () => {
    axios
      .post("http://localhost:3004/add", { task: task })
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={todoAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
