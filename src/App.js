import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Carousel from "./Component/Carasouel";
import image1 from './Component/image1.avif'

function App() {
  // carasouel image
  const images = [
    {image1},
    {image1},
    {image1},
    // Add more image URLs as needed
  ];
  console.log(images);

  // to stte varible for Subject and hour take from input-----------------
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState(0);

  // arr for add subject and hour----------
  const [planner, setPlanner] = useState([]);

  //function call when we click on add button---------
  const addPlanner = () => {
    if(subject!= "" && hour>0){
      setSubject("");
    setHour("");
    setPlanner([...planner, { subjectInput: subject, hourInput: hour }]);
    }else{
      alert("Please Add Subjects or Hour 😈 ")
    } 
  };

  const onChangeEventHandler = (e, fun) => {
    fun(e.target.value);
  };

  // onIncrement button-
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

  // decrement button----------------
  let onDecrement = (Index) => {
    setPlanner((prePlanner) => {
      const updatedPlanner = [...prePlanner];
      if (parseInt(updatedPlanner[Index].hourInput) > 0) {
        updatedPlanner[Index] = {
          ...updatedPlanner[Index],
          hourInput: parseInt(updatedPlanner[Index].hourInput) - 1,
        };
      }

      return updatedPlanner;
    });
  };

  return (
    <div className="App_container">
      {/* header component */}
      <Header></Header>
      {/* carasouel */}
      <Carousel images={images} />
      {/* main content */}
      <div className="App_container_content">
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
        <button onClick={addPlanner} className="App_add_data_btn">
          Add
        </button>
        </div>

        {planner.map((ele, idx) => {
          return (
            <div className="App_conatiner_subject_show">
              {ele.subjectInput} {ele.hourInput}
              <button
                onClick={() => onIncrement(idx)}
                className="App_increment_btn"
              >
                +
              </button>
              <button
                onClick={() => onDecrement(idx)}
                className="App_decrement_btn"
              >
                -
              </button>
            </div>
          );
        })}
      
    </div>
  );
}

export default App;
