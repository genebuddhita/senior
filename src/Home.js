import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Popover } from 'bootstrap';


function Home()  {
  const navigate = useNavigate();
  


  return (
  <main>
    <div>
      <Navbar></Navbar>
        <br></br>
        <div class="container" style={{ padding: '10px' }}>
          <div class="row row-cols-md-5 g-4">
              <div class="col mb-10">
                <div class="card" style={{width: '13rem'}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">ClassName ID</h5>
                    <p class="card-text">Semester year and section No</p>
                    <button onClick={()=>navigate("/")} class="btn btn-primary">View course</button>
                  </div>
                </div>
              </div>
              <div class="col mb-10">
                <div class="card" style={{width: '13rem'}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2103/2103473.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">ClassName ID</h5>
                    <p class="card-text">Semester year and section No</p>
                    <a href="#" class="btn btn-primary">View course</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    </main>
  )
};

export default Home

