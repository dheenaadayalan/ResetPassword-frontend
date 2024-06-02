import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword({ setEmail }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().required("Email is requried"),
  });

  const formik = useFormik({
    initialValues: {
      userEmail: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await axios
        .post(`https://day-41-backend-xc88.onrender.com/api/password/reset`, values)
        .then((res) => {
          if (res.data.mailSent == true) {
            console.log("its sent");
            setEmail(values.userEmail);
            navigate("/verfication");
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
        <h1>Enter your mail id</h1>
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
                    />
                  </div>
                  <div className="text-danger">
                    <p>{formik.errors.userEmail}</p>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Send
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

export default ForgetPassword;
