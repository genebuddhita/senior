/* <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */


    import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  const handleButtonClick = () => {
    console.log('Button clicked. Preparing to navigate to page...');
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    
      <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between ">
          <a className="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NameID</a>
          <form className="form-inline">
          <BrowserRouter>
            <Link to="Home">
              <button onClick={handleButtonClick} className="btn btn-outline-light" type="button">Home</button> &nbsp;&nbsp;&nbsp;
            </Link>
            <Routes>
            <Route path="/Home" element={<Home />} />
            </Routes>
          </BrowserRouter>
           
     
      <button type="button" className="btn btn-outline-light" onClick={handleOpenModal}>
        Log out
      </button> &nbsp;&nbsp;&nbsp;
      </form>
        </nav>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Exit</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Do you want to leave this site?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    
         

        <div className="card bg-light mb-3">
          <div className="media">
            <img className="mr-3" src="..." />
             <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 210xxx comp prog 2566/2 sec1</h5>
          </div>

          <br />

          <div className="card text-left" style={{ marginLeft: 10 +'em', marginRight: 10 + 'em' }}>
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
                <span class="badge bg-primary rounded-pill">3/3</span> &nbsp;&nbsp;&nbsp;
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label class="form-check-label" for="flexCheckChecked">
                  </label>
                </div>
              </button>
              <button href="#" class="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Lab2</div>
                  Due date
                </div>
                <span class="badge bg-primary rounded-pill">0/2</span> &nbsp;&nbsp;&nbsp;
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                  </div>
              </button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Lab3</div>
                  Due date
                </div>
                <span class="badge bg-primary rounded-pill">0/3</span> &nbsp;&nbsp;&nbsp;
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                  </div>
              </button>
              </ol>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

<div>
              {assignmentsData.map((assignment, assignmentIndex) => (
                <div key={assignmentIndex}>
                  {Object.keys(assignment.Assignment).map((labName, labIndex) => (
                    <div key={labIndex} className="card-body">
                      <ol className="list-group">
                        <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">{labName}</div>
                            Due date: {assignment.Assignment[labName].Due}
                          </div>
                          <span className="badge bg-primary rounded-pill">3/3</span>&nbsp;&nbsp;&nbsp;
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={`flexCheckChecked_${assignmentIndex}_${labIndex}`} checked />
                            <label className="form-check-label" htmlFor={`flexCheckChecked_${assignmentIndex}_${labIndex}`}>
                            </label>
                          </div>
                        </button>
                      </ol>
                    </div>
                  ))}
                </div>
              ))}
            </div>




 