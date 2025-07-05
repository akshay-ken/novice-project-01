import mboileImg from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImg from "../assets/images/illustration-sign-up-desktop.svg";
import markerIcon from "../assets/images/icon-list.svg";
import { useState } from "react";
import clsx from "clsx";
import { ThankYouPage } from "./ThankYouPage";

export function MainPage() {
  const [email, setEmail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const baseOutlineStyle = clsx(
    "w-full outline-2 rounded-md p-4 placeholder:text-Grey mt-2 mb-6",
    { "outline-Red text-Red": mailError }
  );

  function onChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.includes("@")) {
      setMailError(true);
    } else {
      setMailError(false);
      setShowDialog(true);
    }
  }
  function closeButton() {
    setShowDialog(false);
  }

  return (
    <>
      {showDialog && <ThankYouPage closeButton={closeButton} mailId={email} />}
      <main className="w-full md:h-fit md:mx-auto md:max-w-4xl md:bg-white md:flex md:flex-row-reverse md:my-14 md:rounded-3xl">
        <div className="w-full flex md:rounded-r-3xl justify-center md:w-1/2">
          <img src={mboileImg} className="w-full md:hidden" alt="" />
          <img
            src={desktopImg}
            className="p-4 hidden object-contain md:block bg-cover"
            alt=""
          />
        </div>
        {/* container side by side */}
        <div className="my-6 p-6 md:w-1/2">
          <h1 className="text-5xl font-extrabold text-Blue-800 mb-6">
            Stay updated!
          </h1>
          <h2 className="text-xl font-medium text-Blue-800 mb-4">
            Join 60,000+ product managers receiving monthly updates on:
          </h2>
          <div className="text-xl">
            <ul className="list-image-[url('./assets/images/icon-list.svg')] list-outside ml-6 space-y-4 p-1">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
          </div>
          <form action="" className="p-6 -mt-8 md:-mt-0">
            <label
              htmlFor="emailId"
              className="text-sm font-black tracking-wider text-Blue-800"
            >
              Email address
            </label>
            {mailError ? (
              <p className="inline text-sm font-black text-Red float-right">
                Invalid Email Address
              </p>
            ) : null}

            <input
              type="email"
              placeholder="email@company.com"
              className={baseOutlineStyle}
              name=""
              id="emailId"
              onChange={onChange}
              value={email}
            />
            <button
              onClick={handleSubmit}
              className="active:bg-linear-90  active:from-red-400  text-white text-xl text-center p-4 w-full active:to-orange-600 rounded-xl font-bold bg-Blue-800"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
