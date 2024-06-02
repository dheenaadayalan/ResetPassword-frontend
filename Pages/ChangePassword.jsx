import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword({userEmail}) {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string().required("Password is requried"),
        confirmPassword: Yup.string().required("Password is requried"),
    });
  
    const formik = useFormik({
      initialValues: {
        userEmail: userEmail,
        newPassword:'',
        confirmPassword:''
      },
      validationSchema,
      onSubmit: async (values) => {
        if(values.confirmPassword != values.newPassword){
            return
        }
        await axios
          .post(`https://day-41-backend-xc88.onrender.com/api/change/password`, values)
          .then((res) => {
            if (res.data.changed == true) {
              navigate("/home");
            }
          })
          .catch(console.log(error.data.message));
      },
    });

    return (
        <>
        <div>
          <nav className="navbar bg-dark border-bottom border-body">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1" style={{ color: "white" }}>
                Forget Password
              </span>
            </div>
          </nav>
        </div>
        <div className="text-center">
          <h1>Enter your new password</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="userEmail"
                        onChange={formik.handleChange}
                        value={formik.values.userEmail}
                        disabled
                        placeholder={formik.values.userEmail}
                      />
                    </div>
                    <div className="text-danger">
                      <p>{formik.errors.userEmail}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.newPassword}
                        name="newPassword"
                      />
                    </div>
                    <div className="text-danger"><p>{formik.errors.newPassword}</p></div>
                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        name="confirmPassword"
                      />
                    </div>
                    <div className="text-danger"><p>{formik.errors.confirmPassword}</p></div>
                    <button type="submit" className="btn btn-dark">
                      Change
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChangePassword;








