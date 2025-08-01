import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AccessFlow from "../assets/AccessFlow.png";
import Login from "../assets/Login.png";
import { useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  const scroll = (targetRef) => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header
        className="flex top-0 flex-row h-20 w-full items-center justify-between px-6 backdrop-blur-3xl shadow-2xl shadow-black/20 z-100 max-[500px]:px-2"
        ref={topRef}
      >
        <div className="flex flex-row items-center justify-center gap-16 max-[950px]:gap-4">
          <div className="h-8 w-8 max-[500px]:h-7 max-[500px]:w-7">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M1.858,12.99l5.267.752L4.219,17.375a1,1,0,0,0,1.055,1.587L11,17.326V21a1,1,0,0,0,2,0V17.326l5.726,1.636A1.023,1.023,0,0,0,19,19a1,1,0,0,0,.781-1.625l-2.906-3.633,5.267-.752a1,1,0,0,0,.565-1.7L21,9.586V6a1,1,0,0,0-1.555-.832L15.87,7.551l1.078-3.235A1,1,0,0,0,16,3H14.414L12.707,1.293a1,1,0,0,0-1.414,0L9.586,3H8a1,1,0,0,0-.948,1.316L8.13,7.551,4.555,5.168A1,1,0,0,0,3,6V9.586L1.293,11.293a1,1,0,0,0,.565,1.7Zm2.849-2.283A1,1,0,0,0,5,10V7.868l4.445,2.964a1,1,0,0,0,1.5-1.148L9.388,5H10a1,1,0,0,0,.707-.293L12,3.414l1.293,1.293A1,1,0,0,0,14,5h.612l-1.56,4.684a1,1,0,0,0,1.5,1.148L19,7.868V10a1,1,0,0,0,.293.707l.586.586-5.021.717a1,1,0,0,0-.639,1.615l2.043,2.553-3.988-1.14a1.007,1.007,0,0,0-.548,0l-3.988,1.14,2.043-2.553a1,1,0,0,0-.639-1.615l-5.021-.717Z"></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[26px] font-bold max-[650px]:text-[24px] max-[500px]:text-[20px] select-none">
              AccessFlow ✨
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button
            onClick={() => navigate("/dashboard")}
            child="Join Now"
            style="px-10 py-3 max-[500px]:px-6 max-[500px]:py-2 max-[500px]:text-[12px]"
          />
        </div>
      </header>
      <section className="max-w-screen-2xl mx-auto flex flex-col items-center px-8 py-6">
        <div className="p-8 flex flex-col items-start select-none max-[480px]:items-center max-[480px]:px-2 max-[480px]:py-8">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text flex gap-2 max-[640px]:text-6xl max-[480px]:text-5xl max-[380px]:text-[40px]">
            AccessFlow{" "}
            <svg
              className="max-[640px]:h-16 max-[480px]:h-10"
              height="80"
              fill="#e83f7a"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M1.858,12.99l5.267.752L4.219,17.375a1,1,0,0,0,1.055,1.587L11,17.326V21a1,1,0,0,0,2,0V17.326l5.726,1.636A1.023,1.023,0,0,0,19,19a1,1,0,0,0,.781-1.625l-2.906-3.633,5.267-.752a1,1,0,0,0,.565-1.7L21,9.586V6a1,1,0,0,0-1.555-.832L15.87,7.551l1.078-3.235A1,1,0,0,0,16,3H14.414L12.707,1.293a1,1,0,0,0-1.414,0L9.586,3H8a1,1,0,0,0-.948,1.316L8.13,7.551,4.555,5.168A1,1,0,0,0,3,6V9.586L1.293,11.293a1,1,0,0,0,.565,1.7Zm2.849-2.283A1,1,0,0,0,5,10V7.868l4.445,2.964a1,1,0,0,0,1.5-1.148L9.388,5H10a1,1,0,0,0,.707-.293L12,3.414l1.293,1.293A1,1,0,0,0,14,5h.612l-1.56,4.684a1,1,0,0,0,1.5,1.148L19,7.868V10a1,1,0,0,0,.293.707l.586.586-5.021.717a1,1,0,0,0-.639,1.615l2.043,2.553-3.988-1.14a1.007,1.007,0,0,0-.548,0l-3.988,1.14,2.043-2.553a1,1,0,0,0-.639-1.615l-5.021-.717Z"></path>
              </g>
            </svg>
          </h1>
          <h2 className="text-3xl bg-slate-800/20 shadow-xl shadow-black/15 border-[1px] border-black/25 rounded-lg backdrop-blur-3xl max-[640px]:text-2xl max-[480px]:text-[16px]">
            your go to for User Management!
          </h2>
        </div>
        <div className="flex items-center gap-16 py-4 select-none max-[950px]:flex-col max-[950px]:gap-8">
          <div>
            <img
              src={AccessFlow}
              alt="AccessFlow"
              className="shadow-xl shadow-black/15 rounded-2xl"
              draggable={false}
            />
          </div>
          <div className="w-[2px] h-[250px] rounded-xl bg-black/25 max-[950px]:h-[2px] max-[950px]:w-full max-[950px]:mt-4">
            &nbsp;
          </div>
          <div>
            <img src={Login} alt="AccessFlow" className="" draggable={false} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 py-4">
          <div className="text-xl text-center max-[480px]:text-[16px]">
            Learn more about AccessFlow below!!
          </div>

          <svg
            height="24"
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.293,16.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-6,6a1,1,0,0,1-1.414,0Z"></path>
            </g>
          </svg>
          <Button
            onClick={() => scroll(aboutRef)}
            child={"About"}
            style={"px-8 py-3 rounded-xl"}
          ></Button>
        </div>
      </section>
      <section
        className="max-w-screen-2xl mx-auto bg-gray-900 text-white flex flex-col items-center px-8 max-[950px]:p-2"
        ref={aboutRef}
      >
        <div className="p-8 flex flex-col items-start max-w-[1200px] mt-12 max-[480px]:p-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ff2273] to-[#ed22ff] text-transparent bg-clip-text flex gap-2 select-none before:content-[''] before:bg-blue-400/50 before:w-2 before:h-12 max-[480px]:text-3xl">
            About AccessFlow
          </h1>
          <p className="text-xl pt-8 max-[480px]:text-[16px]">
            <b>AccessFlow</b> is a full-stack authentication and user management
            project built using{" "}
            <b>MERN stack (MongoDB, Express.js, React and Node.js).</b> This
            project is designed as a secure, scalable, and modular
            authentication system - a solid foundation for building
            user-authenticated apps with role-based access control, session
            management, and token based security.
          </p>
          <div className="w-[2px] bg-white/20 h-8 self-center"></div>
          <p className="text-xl max-[480px]:text-[16px]">
            The UI is crafted with <b>React</b> and <b>Tailwind CSS</b> for a
            sleek, responsive design, while the backend ensures robust
            protection with <b>JWTs, refresh tokens,</b> and proper session
            handling.
          </p>
          <div className="w-[2px] bg-white/20 h-8 self-center"></div>
          <p className="text-xl max-[480px]:text-[16px]">
            While <b>AccessFlow is not a real-world product,</b> it's a
            demonstration of how to implement{" "}
            <b>secure authentication systems -</b>
            from login, signup, protected routes to admin dashboards.
          </p>
          <div className="text-4xl font-bold mt-12 max-[480px]:text-xl">
            Tech Stack
          </div>
          <div className="flex flex-row items-center mt-6 gap-8 justify-between w-full">
            <div className="text-2xl font-semibold max-[480px]:text-[16px]">
              ReactJS
            </div>
            <div className="bg-white text-white border-2 border-black/10 relative overflow-hidden rounded-full w-1/2 h-8 before:content-['80%'] before:pl-4 before:bg-gradient-to-r before:from-cyan-500 before:to-indigo-700 before:rounded-full before:absolute before:left-0 before:w-[80%] before:h-full"></div>
          </div>
          <div className="flex flex-row items-center mt-6 justify-between w-full">
            <div className="text-2xl font-semibold max-[480px]:text-[16px]">
              TailwindCSS
            </div>
            <div className="bg-white text-white border-2 border-black/10 relative overflow-hidden rounded-full w-1/2 h-8 before:content-['95%'] before:pl-4 before:bg-gradient-to-r before:from-rose-500 before:to-pink-700 before:rounded-full before:absolute before:left-0 before:w-[95%] before:h-full"></div>
          </div>
          <div className="flex flex-row items-center mt-6 justify-between w-full">
            <div className="text-2xl font-semibold max-[480px]:text-[16px]">
              ExpressJS
            </div>
            <div className="bg-white text-white border-2 border-black/10 relative overflow-hidden rounded-full w-1/2 h-8 before:content-['75%'] before:pl-4 before:bg-gradient-to-r before:from-yellow-500 before:to-amber-700 before:rounded-full before:absolute before:left-0 before:w-[75%] before:h-full"></div>
          </div>
          <div className="flex flex-row items-center mt-6 justify-between w-full">
            <div className="text-2xl font-semibold max-[480px]:text-[16px]">
              MongoDB
            </div>
            <div className="bg-white text-white border-2 border-black/10 relative overflow-hidden rounded-full w-1/2 h-8 before:content-['95%'] before:pl-4 before:bg-gradient-to-r before:from-green-500 before:to-emerald-700 before:rounded-full before:absolute before:left-0 before:w-[95%] before:h-full"></div>
          </div>
          <div className="flex items-center gap-16 py-4 mt-8 select-none max-[950px]:flex-col max-[950px]:gap-8">
            <div>
              <img
                src={AccessFlow}
                alt="AccessFlow"
                className="shadow-xl shadow-white/15 rounded-2xl"
                draggable={false}
              />
            </div>
            <div className="w-[2px] h-[250px] rounded-xl bg-white/25 max-[950px]:h-[2px] max-[950px]:w-full max-[950px]:mt-4">
              &nbsp;
            </div>
            <div>
              <img
                src={AccessFlow}
                alt="AccessFlow"
                className="shadow-xl shadow-white/15 rounded-2xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col items-start max-w-[1200px] mt-2 max-[480px]:p-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ff2273] to-[#ed22ff] text-transparent bg-clip-text flex gap-2 select-none before:content-[''] before:bg-blue-400/50 before:w-2 before:h-12 max-[480px]:text-3xl">
            Why AccessFlow?
          </h1>
          <p className="text-xl pt-8 pb-2 max-[480px]:text-[16px]">
            In modern web applications, secure user access is{" "}
            <i>non-negotiable.</i> <b>AccessFlow</b> was built to explore how
            authentication works behind the scenes, going beyond Firebase or
            third-party auth - into the fundamentals of{" "}
            <b>custom JWT-based authentication, role segregation,</b> and{" "}
            <b>frontend-backend integration.</b>
          </p>
          <ul className="text-xl py-4 max-[480px]:text-[16px]">
            <li className="before:content-['✅']">
              Learn to build an auth system from scratch
            </li>
            <li className="before:content-['✅']">
              Practice REST APIs with Express.js
            </li>
            <li className="before:content-['✅']">
              Integrate React frontend with backend using Axios + routing
            </li>
            <li className="before:content-['✅']">
              Use MongoDB for flexible user data storage
            </li>
            <li className="before:content-['✅']">
              Refresh tokens and session security
            </li>
            <li className="before:content-['✅']">
              Admin-only and user-only route protection
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 py-4">
          <svg
            className="rotate-180"
            height="24"
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.293,16.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-6,6a1,1,0,0,1-1.414,0Z"></path>
            </g>
          </svg>
          <Button
            onClick={() => scroll(topRef)}
            child={"Go to Top"}
            style={
              "px-8 py-3 rounded-xl bg-white text-black hover:bg-orange-100"
            }
          ></Button>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto bg-gray-800 text-white flex flex-col px-16 py-4 max-[500px]:px-4">
        <div className="text-lg pt-4 max-[500px]:text-[12px]">
          © 2025 Made by Aditya Prasad
        </div>
        <div className="text-white/50 pb-4 max-[500px]:text-[12px] max-[500px]:pb-1">
          All rights reserved
        </div>
        <div className="flex items-center max-[500px]:text-[12px]">
          <a
            className="text-rose-400"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            href=""
          >
            Home
          </a>
          &nbsp;|&nbsp;
          <a
            className="text-rose-400"
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
            href=""
          >
            Dashboard
          </a>
          &nbsp;|&nbsp;
          <a
            className="text-rose-400"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            href=""
          >
            Log In
          </a>
        </div>
        <div className="mt-4 flex items-center gap-2 max-[500px]:gap-1 max-[500px]:mt-2">
          <a
            href="https://linkedin.com/in/aditya-prasad-095ab9329"
            className="hover:opacity-60 transition-opacity ease-in-out duration-200"
            target="_blank"
          >
            <svg
              className="max-[500px]:h-7"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                  fill="#009dff"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="mailto:adithyap455@gmail.com?subject=Heyyy!&body=Message%20here"
            className="hover:opacity-60 transition-opacity ease-in-out duration-200"
            target="_blank"
          >
            <svg
              className="max-[500px]:h-6"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Gmail"
              role="img"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%" fill="none"></rect>
                <path
                  d="M158 391v-142l-82-63V361q0 30 30 30"
                  fill="#4285f4"
                ></path>
                <path
                  d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
                  fill="#ea4335"
                ></path>
                <path
                  d="M354 391v-142l82-63V361q0 30-30 30"
                  fill="#34a853"
                ></path>
                <path
                  d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
                  fill="#c5221f"
                ></path>
                <path
                  d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
                  fill="#fbbc04"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/blueberry-adii"
            className="hover:opacity-60 transition-opacity ease-in-out duration-200"
            target="_blank"
          >
            <svg
              className="max-[500px]:h-5"
              height="30"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
