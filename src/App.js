import React, { useState } from "react";
import "./App.css";

function App() {
  // to stte varible for Subject and hour take from input
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState(0);
  // arr for add subject and hour
  const [planner, setPlanner] = useState([]);

  //function call when we click on add button
  const addPlanner = () => {
    setSubject("");
    setHour("");
    setPlanner([...planner, { subjectInput: subject, hourInput: hour }]);
  };

  const onChangeEventHandler = (e, fun) => {
    fun(e.target.value);
  };

  // onIncrement button
  let onIncrement = (Index) => {
    setPlanner((prePlanner) => {
      const updatedPlanner = [...prePlanner];
      updatedPlanner[Index] = {
        ...updatedPlanner[Index],
        hourInput: parseInt(updatedPlanner[Index].hourInput) + 1,
      };
      return updatedPlanner;
    });
  };

  // decrement button
  let onDecrement = (Index) => {
    setPlanner((prePlanner) => {
      const updatedPlanner = [...prePlanner];
      if(parseInt(updatedPlanner[Index].hourInput) > 0){
        updatedPlanner[Index] = {
          ...updatedPlanner[Index],
          hourInput: parseInt(updatedPlanner[Index].hourInput) - 1,
        };
      }
      
      return updatedPlanner;
    });
  };

  return (
    <div>
      <h1>Geekster Education Planner</h1>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => {
          onChangeEventHandler(e, setSubject);
        }}
        onChangeEventHandler
      ></input>
      <input
        type="number"
        placeholder="Hour"
        value={hour}
        onChange={(e) => {
          onChangeEventHandler(e, setHour);
        }}
        onChangeEventHandler
      ></input>
      <button onClick={addPlanner}>Add</button>

      {planner.map((ele, idx) => {
        return (
          <div>
            {ele.subjectInput} {ele.hourInput}
            <button onClick={()=>onIncrement(idx)}>+</button>
            <button onClick={()=>onDecrement(idx)}>-</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
