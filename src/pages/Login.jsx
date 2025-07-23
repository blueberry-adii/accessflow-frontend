import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("LogIn");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const url =
        state == "LogIn"
          ? "http://localhost:4000/v1/api/auth/login"
          : "http://localhost:4000/v1/api/auth/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data.message);
      if (data.success) {
        setFormData({});
        navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Error submitting form");
    }
  }
  return (
    <main className="min-h-screen flex items-center justify-center py-4">
      <div className="bg-[#ffede1] relative w-[75%] max-w-[1200px] h-[600px] max-h-[700px] shadow-xl shadow-black/20 flex justify-between rounded-4xl max-[580px]:flex-col">
        <div
          className={`bg-gradient-to-tl from-[#3f2500] to-[#f7c99f] absolute flex justify-center items-center w-1/2 h-full transition-transform ease-in-out duration-250 max-[580px]:w-full max-[580px]:h-1/2 ${
            state != "SignUp"
              ? "min-[580px]:rounded-r-4xl max-[580px]:rounded-b-4xl min-[580px]:translate-x-full max-[580px]:translate-y-full"
              : "min-[580px]:rounded-l-4xl max-[580px]:rounded-t-4xl"
          }`}
        >
          <Button
            onClick={() => {
              setError("");
              if (state == "SignUp") {
                setFormData({
                  username: "",
                  password: "",
                });
                setState("LogIn");
              } else {
                setFormData({
                  name: "",
                  username: "",
                  password: "",
                  confirmPassword: "",
                });
                setState("SignUp");
              }
            }}
            child={`${state != "SignUp" ? "New here?" : "Already Registered?"}`}
            style={`px-10 py-3 rounded-xl border-1 border-black/10 bg-white text-black hover:text-white max-[850px]:px-4 max-[850px]:py-1.5`}
          ></Button>
        </div>
        <div
          className={`w-1/2 h-full flex flex-col gap-24 items-center justify-center transition-transform ease-in-out duration-250 max-[580px]:w-full max-[580px]:h-1/2 max-[580px]:gap-4 ${
            state != "LogIn"
              ? "min-[580px]:rounded-r-4xl max-[580px]:rounded-b-4xl min-[580px]:translate-x-full max-[580px]:translate-y-full"
              : "min-[580px]:rounded-l-4xl max-[580px]:rounded-t-4xl"
          }`}
        >
          <div className="text-4xl text-zinc-800 text-shadow-lg text-shadow-black/20 text-center font-bold max-[580px]:text-3xl">
            {state == "LogIn" ? "Log In" : "Sign Up"}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col relative w-full items-center justify-center gap-4 max-[580px]:mt-4"
          >
            <div className="text-[12px] text-red-500 absolute -top-6">
              {error}
            </div>
            {state == "LogIn" ? (
              ""
            ) : (
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder={"Name"}
                className="text-sm bg-white shadow-md shadow-black/10 px-6 py-3 outline-0 mr-5 max-[650px]:text-[10px] max-[500px]:mr-2 max-[400px]:py-2 max-[400px]:px-4 rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
              />
            )}

            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder={"Username"}
              className="text-sm bg-white shadow-md shadow-black/10 px-6 py-3 outline-0 mr-5 max-[650px]:text-[10px] max-[500px]:mr-2 max-[400px]:py-2 max-[400px]:px-4 rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder={"Password"}
              className="text-sm bg-white shadow-md shadow-black/10 px-6 py-3 outline-0 mr-5 max-[650px]:text-[10px] max-[500px]:mr-2 max-[400px]:py-2 max-[400px]:px-4 rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
            />
            {state == "LogIn" ? (
              ""
            ) : (
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder={"Confirm Password"}
                className="text-sm bg-white shadow-md shadow-black/10 px-6 py-3 outline-0 mr-5 max-[650px]:text-[10px] max-[500px]:mr-2 max-[400px]:py-2 max-[400px]:px-4 rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
              />
            )}
            <Button
              type="submit"
              child={`${state == "LogIn" ? "Log In" : "Sign Up"}`}
              style="px-10 py-3 bg rounded-lg max-w-34 max-[850px]:px-4 max-[850px]:py-1.5"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
