/* eslint-disable no-cond-assign */
import { useContext, useRef, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import { saveUser } from "../../Hooks/UserSave";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {
    loading,
    setLoading,
    login,
    signInWithGoogle,
    resetPassword,
    signInWithFacebook,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      toast.error("please set at least 6 characters ");
    }

    login(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  //google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // saveUser(result.user);
        toast.success("Successfully Google Login");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };
  // Facebook SignIn
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        // saveUser(result.user);
        toast.success("Successfully Facebook Login");
      })
      .catch((error) => {
        console.error("Error signing in with Facebook", error);
        toast.error("Error signing in with Facebook");
        setLoading(false);
      });
  };

  //handle reset password
  const handleReset = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success("Please Check Your Email For Reset Link !!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        // eslint-disable-next-line no-constant-condition
        if(err.message = "auth/missing-email"){

            toast.error("Please Provide E-mail");
        }
        setLoading(false);
      });
  };

  //   Password show hidden
  const [show, setShow] = useState("");

  const handleShowPassword = () => {
    setShow(!show)
}
  return (
    <div className="border-2 border-slate-300 md:w-2/5 mt-5 mx-auto">
      <h4 className="text-lg pl-3 font-semibold">
        Log In to Your TMS Account{" "}
      </h4>
      <hr />
      <div className="px-5 mx-auto w-96 grid grid-cols-1 gap-1 text-xl text-white py-5">
        {/* Social Login */}
        <div className="grid grid-cols-1 gap-1 mb-3">
          <div
            onClick={handleFacebookSignIn}
            disabled={loading}
            className="bg-blue-600 p-2 flex pl-4 items-center rounded-md gap-2 cursor-pointer"
          >
            <FaFacebook className="w-6 h-6"></FaFacebook>
            <p> Continue with Facebook</p>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="bg-red-400 p-2 flex pl-4 items-center  rounded-md gap-2 cursor-pointer"
          >
            <FaGoogle className="w-6 h-6"></FaGoogle>
            <p>Continue with Google</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-control py-2 text-black">
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter Your E-Mail"
              className="border-2 p-1 w-full  text-lg"
            />
          </div>
          <div className="form-control text-black relative">
            <input
              type={show? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="border-2 p-1 w-full text-lg"
            />
            <p onClick={handleShowPassword} className=" absolute right-3 top-[0.6rem] cursor-pointer" >
              {
                show? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }
            </p>
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="w-[100%] bg-red-500 p-2 rounded-md "
            >
             { loading ? "loading" : "login" }
            </button>
          </div>
        </form>

        <div>
          <p
            onClick={handleReset}
            className="text-sky-400 text-center text-xs py-3 cursor-pointer"
          >
            Forgot Password
          </p>
          <hr className="h-1" />
          <p className="text-black text-sm pt-2 text-center">
            Do not have an account?{" "}
            <Link to="/registration" className="text-sky-400">
              Registration
            </Link>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
