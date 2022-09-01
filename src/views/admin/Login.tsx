import "../../assets/css/sb-admin-2.min.css";
import { Formik } from "formik";
import AuthService from "../../services/auth.service";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MySwal = withReactContent(Swal);

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Object | null>({});

  useEffect(() => {
    const data = localStorage.getItem("user") ?? "";
    console.log("data", data);
    if (data) {
      const user = JSON.parse(data);
      if (user && user.token) {
        setUser(user);
        navigate("/admin");
      }
    }
  }, []);
  const initialValues = {
    username: "mor_2314",
    password: "83r5^_",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const result = await AuthService.login(values);
            console.log("result", result.data);
            if (result.status === 200) {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  name: "safoora",
                  family: "aghabazaz",
                  token: result.data.token,
                })
              );
              navigate("/admin");
            }
          } catch (error) {
            return error;
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Welcome Back!
                            </h1>
                          </div>
                          <form className="user" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                              <input
                                type="username"
                                className="form-control form-control-user"
                                id="exampleInputUsername"
                                aria-describedby="username"
                                placeholder="Enter Username Address..."
                                {...formik.getFieldProps("username")}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                                {...formik.getFieldProps("password")}
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-user btn-block"
                              disabled={formik.isSubmitting}
                            >
                              Login
                            </button>
                            <hr />
                            <a
                              href="index.html"
                              className="btn btn-google btn-user btn-block"
                            >
                              <i className="fab fa-google fa-fw"></i> Login with
                              Google
                            </a>
                            <a
                              href="index.html"
                              className="btn btn-facebook btn-user btn-block"
                            >
                              <i className="fab fa-facebook-f fa-fw"></i> Login
                              with Facebook
                            </a>
                          </form>
                          <hr />
                          <div className="text-center">
                            <a className="small" href="forgot-password.html">
                              Forgot Password?
                            </a>
                          </div>
                          <div className="text-center">
                            <a className="small" href="register.html">
                              Create an Account!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Login;
