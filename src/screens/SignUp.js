import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';

export default function SignUp() {

  // const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })
  //  const handleSubmit = async () => {
  //    e.preventDefault();
  //   const response =  fetch("http://localhost:5000/api/createuser", {
  //     if(Register){
  //       Alert("validated")
  //     }
  //    method: "POST",
  //    headers: {
  //      "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     name: credentials.name,
  //     email: credentials.email,
  //     password: credentials.password

  //   }),
  //      const json = await response.json(),
  //         console.log(json);

  //     if(!json.success){
  //       alert("Enter Valid Credentials")
  // }else {
  //   alert("Valid")
  //     }
  // )
  //   }
  return (
    <div >

      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ color: "gold" }}>
                <div className="card-body p-5" >
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

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

                    <div className="form-outline mb-4">
                      <input type="password" placeholder='Repeat Password' id="form3Example4cdg" className="form-control form-control-lg" />

                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" id="form2Example3cg" />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="login"
                      className="fw-bold text-body"><u>Login here</u></Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}
