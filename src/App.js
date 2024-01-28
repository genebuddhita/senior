import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar.js';
import { useNavigate } from 'react-router-dom';
import Portfolio from './Portfolio.js';
import { Link } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  const [assignmentsData, setAssignmentsData] = useState([
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
  ]);



  return (
    
      <div className="App">
        <Navbar></Navbar> 
          <br></br>
          <div className="media d-flex align-items-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="mr-3" src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png"  style={{ width: '40px', height: '40px' }} />
             <h5>&nbsp;&nbsp;&nbsp;&nbsp; 210xxx comp prog 2566/2 sec1</h5>
          </div>

          <br />

          <div className="card text-left" style={{ marginLeft: 10 +'em', marginRight: 10 + 'em' }}>
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Assignments</a>
                </li>
                <li className="nav-item">
                <Link to="/Portfolio">
                  <button className="nav-link link" >Portfolio</button>
                  </Link>
                </li>
              </ul>
            </div>
            
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
                              <h5><span class="badge bg-success">Success</span></h5>&nbsp;&nbsp;&nbsp;
                              
                            </button>
                          </ol>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
        </div>
     
      </div>
  );
}


export default App;
