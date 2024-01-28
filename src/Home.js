import React from 'react';
import App from './App';

function Home()  {
  return (
    <div>
      <nav className="navbar navbar-light bg-black justify-content-between">
        <a className="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NameID</a>
        <form className="form-inline">
          <button  className="btn btn-outline-light" type="button" disabled>Home</button>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-outline-light" type="button">Log out</button>&nbsp;&nbsp;&nbsp;
        </form>
        <br></br>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </nav>
    </div>
  )
};

export default Home;

