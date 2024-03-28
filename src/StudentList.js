import React, { useState } from 'react';
import Navbarprof from './Navbarprof';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([
    [6554467225, 'Thayada Jongjamras'],
    [6334412323, 'Kanok Rungrassameesab'],
    [6334421232, 'Pasit Pongpattana'],
    [6334421223, 'Surapong Jarassopon']
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);

  const handleShowModal = (index) => {
    setSelectedStudentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteStudent = () => {
    if (selectedStudentIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents.splice(selectedStudentIndex, 1);
      setStudents(updatedStudents);
      setShowModal(false);
    }
  };

  return (
    <div>
      <Navbarprof />
      <br />
      <div className="media d-flex align-items-center">
        <img className="mr-3" src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" style={{ width: '40px', height: '40px' }} />
        &nbsp;&nbsp;&nbsp;
        <div className="card" style={{ width: '30rem', padding: '10px', }}>
          <h5>210xxx comp prog 2566/2 sec1</h5>
          <h6>Instructor: Name Surname</h6>
        </div>
        <button type="button" class="btn btn-secondary" style={{ marginLeft: 40 + 'em' }}>Export</button>
      </div>
      <br />
      <div class="card" style={{ marginLeft: 10 + 'em', marginRight: 10 + 'em' }}>
        <div class="card-header">
          <h5> Student Name List </h5>
        </div>
        <div class="card-body">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="id or name" aria-label="Search" />
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <br />
          <ol className="list-group list-group-numbered">
            {students.map((student, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <div> {student[0]} {student[1]} </div>
                <button type="button" class="btn-close ms-auto" onClick={() => handleShowModal(index)} aria-label="Close"></button>
              </li>
            ))}
          </ol>
          <br />
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/AssignList">
              <button type="button" class="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Remove Student</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Do you want to delete this name?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleDeleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
