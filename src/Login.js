import React from 'react';
import img1 from '/Users/changtobuddhita/my-app/src/Image 22-3-2567 BE at 16.38.jpg'

function Login() {
    return (
        <main className="form-signin">
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form className="p-5 shadow rounded bg-light">
                            <img className="mb-4 mx-auto d-block" src={img1} width="109" height="109"/>
                            <h1 className="h3 mb-3 fw-normal text-center">SIGN IN</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
                            <p className="mt-2 mb-3 text-center"><a href="#" className="link-primary">Forgot your password?</a></p>
                            <p className="mt-5 mb-3 text-muted text-center">© chulalongkorn university</p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
