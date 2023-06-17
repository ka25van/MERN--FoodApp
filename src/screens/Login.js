import React from 'react'
import { Link } from 'react-router-dom';

                    

export default function Login() {
 
                      
                    
  return (
    <div>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{color: "gold"}}>
                <div className="card-body p-5" >
                  <h2 className="text-uppercase text-center mb-5">Login to account</h2>

                  <form /*onSubmit={handleSubmit}*/>

                    <div className="form-outline mb-4">
                      <input type="text" placeholder='Enter Your Name' id="form3Example1cg" className="form-control form-control-lg" name="name" /*value={credentials.name} */ />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" placeholder='Eg:abc@gamil.com' id="form3Example3cg" className="form-control form-control-lg" name="email" /*value={credentials.email}*/ />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" placeholder='Eg:1aA!.' id="form3Example4cg" className="form-control form-control-lg" name="password" /*value={credentials.password}*/ />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                   

                   
                    <div className="d-flex justify-content-center">
                      <button type="submit" onClick="action()"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                        
                    
                    </div>
                   

                    <p className="text-center text-muted mt-5 mb-0"><Link to="home"
                      className="fw-bold text-body"><u>Back Home</u></Link></p>
                    
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
  
}
