import React from 'react'
import Navbarprof from './Navbarprof'
import { Link } from 'react-router-dom'

function Sentin() {
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
                        <Link to="/AssignEdit">
                        <button className="nav-link link" >Edit</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Sent in</a>
                    </li>
                </ul>
            </div>
            <br></br>
            <div class="card-body">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="id or name" aria-label="Search"/>
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
            </div>
                <div class="accordion" style={{ marginLeft: 2 +'em', marginRight: 2 + 'em' }} id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        6xxxxxxxxx <span style={{ margin: '0 10px' }}></span> Ant Baba
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the first item's accordion body.</strong> 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        6xxxxxxxxx <span style={{ margin: '0 10px' }}></span> Rest city
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the second item's accordion body.</strong> 
                          </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          6xxxxxxxxx <span style={{ margin: '0 10px' }}></span> Name Surname
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>Q.1 sent Q.2 sent Q.3 none</strong> 
                          </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
          </div>



    </div>
  )
}

export default Sentin