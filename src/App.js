import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Home from './Home.js';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked. Preparing to navigate to page...');
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between ">
          <a className="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NameID</a>
          <form className="form-inline">
            <Link to="Home">
              <button onClick={handleButtonClick} className="btn btn-outline-light" type="button">Home</button> &nbsp;&nbsp;&nbsp;
            </Link>
            <Routes path="/Home" component={Home} />
            <button className="btn btn-outline-light" type="button">Log out</button> &nbsp;&nbsp;&nbsp;
          </form>
        </nav>

        <div className="card bg-light mb-3">
          <div className="media">
            <img className="mr-3" src="..." />
             <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 210xxx comp prog 2566/2 sec1</h5>
          </div>

          <br />

          <div className="card text-left" style={{ marginLeft: '10em', marginRight: '10em' }}>
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Assignments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link" href="#">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <ol className="list-group list-group-numbered">
              <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Linked List</div>
                  Due date
                </div>
                <span class="badge bg-primary rounded-pill">3/3</span>
              </button>
              <button href="#" class="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Lab2</div>
                  Due date
                </div>
                <span class="badge bg-primary rounded-pill">0/2</span>
              </button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Lab3</div>
                  Due date
                </div>
                <span class="badge bg-primary rounded-pill">3/3</span>
              </button>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
