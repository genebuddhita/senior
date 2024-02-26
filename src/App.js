import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar.js';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [showAssignments, setShowAssignments] = useState(true); // เพิ่มสถานะ showAssignments

  const handleAssignmentsClick = () => {
    setShowAssignments(true); // เมื่อคลิกที่ปุ่ม Assignments ให้แสดงผล Assignments
  };

  const handlePortfolioClick = () => {
    setShowAssignments(false); // เมื่อคลิกที่ปุ่ม Portfolio ให้แสดงผล Portfolio
  };

  const assignmentsData = [
    {
      Assignment: {
        Lab1: {
          Name: "helloworld",
          Publish: "12 Dec 2012",
          Due: "18 Dec 2012",
          LabNumber:"1",
        },
        Lab2: {
          Name: "datastructures",
          Publish: "15 Jan 2013",
          Due: "21 Jan 2013",
          LabNumber:"2",
        },
        Lab3: {
          Name: "algorithmanalysis",
          Publish: "03 Feb 2013",
          Due: "09 Feb 2013",
          LabNumber:"3",
        },
        Lab4: {
          Name: "webdevelopment",
          Publish: "20 Mar 2013",
          Due: "26 Mar 2013",
          LabNumber:"4",
        },
        Lab5: {
          Name: "machinelearning",
          Publish: "05 Apr 2013",
          Due: "11 Apr 2013",
          LabNumber:"5",
        },
      },
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar> 
      <br></br>
      <div className="media d-flex align-items-center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="mr-3" src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png"  style={{ width: '40px', height: '40px' }} />
        <h5>&nbsp;&nbsp;&nbsp;&nbsp; 210xxx comp prog 2566/2 sec1</h5>
      </div>
      <br />
      <div className="card text-left" style={{ marginLeft: '10em', marginRight: '10em' }}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button className={`nav-link ${showAssignments ? 'active' : ''}`} onClick={handleAssignmentsClick}>Assignments</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${!showAssignments ? 'active' : ''}`} onClick={handlePortfolioClick}>Portfolio</button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {showAssignments ? (
            <div>
              {assignmentsData.map((assignment, assignmentIndex) => (
                <div key={assignmentIndex}>
                  {Object.keys(assignment.Assignment).map((labName, labIndex) => {
                    const labInfo = assignment.Assignment[labName];
                    return (
                      <div key={labIndex} className="card-body">
                        <ol className="list-group">
                          <button onClick={()=>navigate("/Lab")} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">
                                Lab{labInfo.LabNumber}: {labInfo.Name}
                              </div>
                              Due date: {labInfo.Due}
                            </div>
                            <h5><span className="badge bg-success">Success</span></h5>&nbsp;&nbsp;&nbsp;
                          </button>
                        </ol>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h5 className="card-title p-3 mb-2 bg-secondary text-white">Current Total Score: x/Total</h5>
              <br></br>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">LabNumber</th>
                    <th scope="col">LabName</th>
                    <th scope="col">Score</th>
                    <th scope="col">Average</th>
                  </tr>
                </thead>
                <tbody>
                  {assignmentsData[0].Assignment && Object.keys(assignmentsData[0].Assignment).map((labName, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{assignmentsData[0].Assignment[labName].Name}</td>
                      <td>{assignmentsData[0].Assignment[labName].Score || '-'}</td>
                      <td>{assignmentsData[0].Assignment[labName].Average || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
