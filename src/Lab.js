import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Lab() {
  const navigate = useNavigate();
  
  const [timestamps, setTimestamps] = useState(Array(5).fill('')); // Change 10 to the number of questions

  const handleUpload = (index) => {
    // Get the current date and time
    const now = new Date();
    const formattedTimestamp = now.toLocaleString();

    // Update the timestamp state
    setTimestamps(prevTimestamps => {
      const newTimestamps = [...prevTimestamps];
      newTimestamps[index] = formattedTimestamp;
      return newTimestamps;
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
          <div className="media d-flex align-items-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="mr-3" src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png"  style={{ width: '40px', height: '40px' }} />
             <h5>&nbsp;&nbsp;&nbsp;&nbsp; 210xxx comp prog 2566/2 sec1</h5>
          </div>
        <br></br>
          <div class="container-lg p-3 mb-2 bg-light">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card border-primary mb-3 " style={{ padding: '10px' , marginLeft: 5+ 'em'}}>
                    <div class="card-body">
                      <h5 class="card-title">Labnum:LabName</h5>
                      <p class="card-text">Due Date: DD/MM/YY 20:00</p>
                      <p> <a class="link-opacity-100" href="https://icons.getbootstrap.com/">Link to questions</a> </p>
                      <p> <a class="link-opacity-100" href="https://icons.getbootstrap.com/">Link to questions</a> </p>
                    </div>
                  </div>
                  <br></br>
                  <button class="btn btn-primary" style={{ marginLeft: 5+ 'em'}} onClick={()=>navigate("/")}>Back</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col">
                {timestamps.map((timestamp, index) => (
                <div className="row">
                <div key={index} class="col-sm-10">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Question {index + 1}</h5>
                      <div class="input-group mb-3">
                        <input type="file" class="form-control" id={`inputGroupFile02_${index}`}/>
                          <button class="btn btn-outline-primary" type="button"
                                  htmlFor={`inputGroupFile02_${index}`}
                                  onClick={() => handleUpload(index)}>Upload
                          </button>
                      </div>
                      <p class="card-text">Last Submitted: <span>{timestamp}</span></p>
                      <p class="card-text">Score: </p>
                    </div>
                  </div> <br></br>
                </div> </div>  ))}
              </div>
            </div>
          </div>
      </div>
  )
}

export default Lab