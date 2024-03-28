import React from 'react'
import Navbarprof from './Navbarprof'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function AssignEdit() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
            setShowModal(true);
        };

  const handleCloseModal = () => {
            setShowModal(false);
        };
  
const [showAlert, setShowAlert] = useState(false);
  const [labNum, setLabNum] = useState('');
  const [labName, setLabName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [totalQNum, setTotalQNum] = useState('');
  const [sections, setSections] = useState([1, 2, 3, 4, 5]); // ตามหมายเลข section
  const [scores, setScores] = useState([]);
  const [submittedData, setSubmittedData] = useState(null); // เพิ่ม state สำหรับเก็บข้อมูลที่ถูกส่งไป
  const [checkedSections, setCheckedSections] = useState([]);
  const currentDate = new Date().toISOString().slice(0, 16);

  const handlePublishDateChange = (e) => {
    const selectedPublishDate = new Date(e.target.value);
    const currentDate = new Date();
    const selectedDueDate = new Date(dueDate);
    
    if (selectedPublishDate < currentDate) {
      alert('Publish Date cannot be in the past.');
      e.target.value = ''; // Clear the input value
    } else if (selectedPublishDate > selectedDueDate) {
      alert('Publish Date cannot be after Due Date.');
      e.target.value = ''; // Clear the input value
    } else {
      setPublishDate(e.target.value);
    }
  };

  const handleDueDateChange = (e) => {
    const selectedDueDate = new Date(e.target.value);
    const selectedPublishDate = new Date(publishDate);
    const currentDate = new Date();
  
    if (selectedDueDate < selectedPublishDate || selectedDueDate < currentDate) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setDueDate(e.target.value);
    }
  };
  

  const handleCheckboxChange = (section) => {
    if (checkedSections.includes(section)) {
        setCheckedSections(checkedSections.filter((item) => item !== section));
    } else {
        setCheckedSections([...checkedSections, section]);
    }
    };
  const handleTotalQNumChange = (e) => {
    const numQuestions = parseInt(e.target.value, 10);
    setTotalQNum(numQuestions);

    // Generate an array of scores based on the total number of questions
    const newScores = Array.from({ length: numQuestions }, (_, index) => ({
      id: index + 1,
      score: 1, // You can set the default score here
    }));
    setScores(newScores);
  };

  const handleScoreChange = (id, score) => {
    const updatedScores = scores.map((item) =>
      item.id === id ? { ...item, score } : item
    );
    setScores(updatedScores);
  };
  
  const isFormValid = () => {
    return labNum !== '' && labName !== '' && publishDate !== '' && dueDate !== '' && totalQNum !== '' && checkedSections !== null &&
    checkedSections !== undefined && checkedSections.length > 0;
  };

  const handleButtonClick = () => {
  
  if (isFormValid()) {
    // Set submitted data
    const data = {
      labNum,
      labName,
      publishDate,
      dueDate,
      totalQNum,
      sections,
      scores
    };
    setSubmittedData(data);

    // Reset the form fields
    setLabNum('');
    setLabName('');
    setPublishDate('');
    setDueDate('');
    setTotalQNum('');
    setScores([]);
    
    setShowAlert(true);
    console.log('Form submitted!');
  } else {
    // Show an error message or handle invalid form
    console.log('Please fill in all fields.');
  }
};


  const handleAlertClose = () => {
    // Hide the alert
    setShowAlert(false);
  };

  const now = new Date();
  //const currentDate = now.toISOString().split('T')[0];

  return (
    <div>
      <Navbarprof></Navbarprof> 
      <br></br>
        <div className="media d-flex align-items-center">
          <img className="mr-3" src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" style={{ width: '40px', height: '40px' }} />
          &nbsp;&nbsp;&nbsp; 
          <div className="card" style={{ width: '30rem', padding: '10px' }}>
              <h5>210xxx comp prog 2566/2 sec1</h5>
              <h6>Instructor: Name Surname</h6>
          </div>
        </div>
        <br></br>
        <div className="card text-left" style={{ marginLeft: 10 +'em', marginRight: 10 + 'em' }}>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Edit</a>
                    </li>
                    <li className="nav-item">
                     <Link to="/Sentin">
                        <button className="nav-link link" >Sent in</button>
                      </Link>
                    </li>
                </ul>
            </div>
            <div class="card-body">
        <form class="row g-3">
            <div class="col-md-6">
              <label for="LabNum" class="form-label">Lab Number*</label>
              <input type="number" min="1"  class="form-control" id="LabNum" onChange={(e) => setLabNum(e.target.value)}/>
            </div>
            <div class="col-md-6">
              <label for="LabName" class="form-label">Lab Name*</label>
              <input type="name" class="form-control" id="LabName" onChange={(e) => setLabName(e.target.value)}/>
            </div>
            
            <div class="col-12">
              <label for="inputlink" class="form-label">Attach Link</label>
              <input type="text" class="form-control" id="inputlink" placeholder="link1, link2 or -" />
            </div>
            <div className="col-md-6">
            <label htmlFor="PublishDate" className="form-label">Publish Date*</label>
            <input
              type="datetime-local"
              className="form-control"
              id="publishdate"
              onChange={handlePublishDateChange}
              min={currentDate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="DueDate" className="form-label">Due Date*</label>
            <input
              type="datetime-local"
              className="form-control"
              id="duedate"
              onChange={handleDueDateChange}
              min={publishDate || currentDate} // ใช้วันที่ Publish Date หากมีค่าแล้ว
            />
          </div>
            <div class="col-md-6">
              <label for="inputQnum" class="form-label">Total Question Number*</label>
              <input type="number" min="1" class="form-control" id="inputQnum"  onChange={handleTotalQNumChange}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">Section*</label>
                <br></br>
                {sections.map((section, index) => (
                <div key={index} className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`inlineCheckbox${index}`}
                        value={section}
                        checked={checkedSections.includes(section)}
                        onChange={() => handleCheckboxChange(section)}
                    />
                    <label className="form-check-label" htmlFor={`inlineCheckbox${index}`}>
                        {section}
                    </label>
                </div>
            ))}


            </div>
                {scores.map((scoreItem) => (
                  <div key={scoreItem.id} class="col-md-2">
                    <label for={`inputScore${scoreItem.id}`} class="form-label">
                      Score Q.{scoreItem.id}
                    </label>
                    <input
                      type="number"
                      min="1"
                      class="form-control"
                      id={`inputScore${scoreItem.id}`}
                      value={scoreItem.score}
                      onChange={(e) => handleScoreChange(scoreItem.id, e.target.value)}
                    />
                  </div>
                ))}
            
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/AssignList">
              <button type="button" class="btn btn-primary">Back</button> 
              </Link>
             
              <button type="button" class="btn btn-primary" onClick={handleButtonClick} disabled={!isFormValid()}>Save</button>
              
              <button type="button" class="btn btn-danger" onClick={handleShowModal}>Delete</button>
          </div>

          {showAlert && (
                  <div class="alert alert-success  d-flex align-items-center" role="alert">
                  Assignment updated successfully
                  </div>
              )}  
        </form>
          </div>
        </div>

        {/* Modal */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Remove Assignment</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to delete this assignment?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                 Delete
                             </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AssignEdit