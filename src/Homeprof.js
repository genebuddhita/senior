import React from 'react'
import Navbarprof from './Navbarprof'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Homeprof() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbarprof></Navbarprof>
      <br></br>
        <div className="d-flex align-items-center">
          <h5 className="me-2">Course</h5>
          <Link to="/ClassCreate">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">+ New</button>
          </Link>
        </div>

      <br></br>
        <div class="container-lg mb-3 bg-light" style={{ padding: '10px' }}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100" style={{width: '13rem'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Class Name ID</h5>
                <p class="card-text">Semester Year</p>
                <Link to="/AssignList" class="btn btn-primary">View Course</Link>
              </div>
              <div class="card-footer">
              <Link to="/ClassEdit" className="card-link text-muted">Edit</Link>
              </div>
            </div>
         </div>
         </div>
  
          </div>
    </div>
  )
}

export default Homeprof