import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp({ setEmail }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().required("Email is requried"),
    password: Yup.string().required("Password is requried"),
    userName:Yup.string().required("Username is requried"),
  });

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      password: "",
      userName:"",
    },
    validationSchema,
    onSubmit: async (values) => {
        
      await axios
        .post(`https://day-41-backend-xc88.onrender.com/api/create/user`, values)
        .then((res) => {
          if (res.data.validedUser == true) {
            setEmail(values.userEmail);
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log(error.data.message);
          toast.error(error.data.message);
        });
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
        <h1>Welcome User</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.userName}
                      name="userName"
                    />
                  </div>
                  <div className="text-danger">
                    <p>{formik.errors.userEmail}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.userEmail}
                      name="userEmail"
                    />
                  </div>
                  <div className="text-danger">
                    <p>{formik.errors.userEmail}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name="password"
                    />
                  </div>
                  <div className="text-danger">
                    <p>{formik.errors.password}</p>
                  </div>
                  <div className="container text-end">
                    <div className="row justify-content-end">
                      <div className="col-sm-6">
                        <Link to="/forget/password">Forget Password?</Link>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Loge-in
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

export default SignUp;
