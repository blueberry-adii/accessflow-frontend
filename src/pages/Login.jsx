import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("LogIn");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (state == "LogIn") {
      navigate("/dashboard");
    } else {
      navigate("/");
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
            onClick={() =>
              setState(`${state != "SignUp" ? "SignUp" : "LogIn"}`)
            }
            child={`${state != "SignUp" ? "New here?" : "Already Registered?"}`}
            style={`px-10 py-3 rounded-xl border-1 border-black/10 bg-white text-black hover:text-white max-[850px]:px-4 max-[850px]:py-1.5`}
          ></Button>
        </div>
        <div
          className={`w-1/2 h-full flex flex-col gap-24 items-center justify-center transition-transform ease-in-out duration-250 max-[580px]:w-full max-[580px]:h-1/2 max-[580px]:gap-12 ${
            state != "LogIn"
              ? "min-[580px]:rounded-r-4xl max-[580px]:rounded-b-4xl min-[580px]:translate-x-full max-[580px]:translate-y-full"
              : "min-[580px]:rounded-l-4xl max-[580px]:rounded-t-4xl"
          }`}
        >
          <div className="text-4xl text-zinc-800 text-shadow-lg text-shadow-black/20 text-center font-bold max-[580px]:text-3xl">
            {state == "LogIn" ? "Log In" : "Sign Up"}
          </div>
          <form
            method="POST"
            className="flex flex-col w-1/2 items-center justify-center gap-4"
          >
            <Input
              type={"text"}
              placeholder={"Email"}
              style={
                "rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
              }
            ></Input>
            <Input
              type={"password"}
              placeholder={"Password"}
              style={
                "rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
              }
            ></Input>
            {state == "LogIn" ? (
              ""
            ) : (
              <Input
                type={"password"}
                placeholder={"Confirm Password"}
                style={
                  "rounded-lg ml-4 w-72 max-[850px]:px-4 max-[850px]:py-2 max-[850px]:w-48"
                }
              ></Input>
            )}
            <Button
              onClick={handleSubmit}
              child={`${state == "LogIn" ? "Log In" : "Sign Up"}`}
              style="px-10 py-3 bg rounded-lg max-w-34 max-[850px]:px-4 max-[850px]:py-1.5"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
