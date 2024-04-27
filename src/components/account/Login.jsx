import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Logo from "../../../src/assets/images/logo.png";
import supabase from "../Superbase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (data) {
        setLoggedIn(true);
      }

      navigate("/");

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" container mx-auto w-[90%] max-w-[100%] lg:max-w-[32.5rem] lg:w-[32.5rem] lg:max-h-[24.5rem] bg-slate-200 border shadow-md mt-[3rem] lg:mt-[10rem] p-6">
      <div className=" flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="w-[7rem]" />
        <h1 className="text-[24px] font-bold mt-3">Create Account</h1>
      </div>
      <form className="p-5" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 py-2 px-3 outline-none rounded-md"
        />
        <br />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 py-2 px-3 outline-none rounded-md"
          />
          <div
            className=" absolute top-2 right-[1rem]"
            onClick={togglePassword}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <input type="checkbox" />
            <label className="text-[12px] lg:text-normal">Remember me</label>
          </div>
          <p>
            <Link className="text-[12px] lg:text-normal">Forget Password</Link>
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#198057] w-full rounded-full py-2 px-3 mt-5 text-white font-semibold lg:text-[18px]"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-center font-medium">
        Dont have an account?{" "}
        <Link to="/signup" className="font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
