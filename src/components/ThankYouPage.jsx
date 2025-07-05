import successIcon from "../assets/images/icon-success.svg";
import ReactDOM from "react-dom";

export function ThankYouPage({ mailId, closeButton }) {
  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 md:bg-Blue-700 right-0 w-full h-full bg-white">
      <div
        className="flex md:max-w-md md:bg-white md:mx-auto md:my-28 md:h-fit md:rounded-3xl flex-col justify-center gap-y-10 w-full
      h-full p-6"
      >
        <img src={successIcon} className="size-20" alt="" />
        <h3 className="text-5xl font-extrabold text-Blue-800">
          Thanks for subscribing!
        </h3>
        <p className="text-Blue-800 font-semibold text-lg">
          A confirmation email has been sent to{" "}
          <span className="font-black text-xl">{mailId}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button
          onClick={closeButton}
          className="bg-Blue-800 active:bg-Red rounded-xl font-bold text-xl text-white tracking-wider p-4"
        >
          Dismiss message
        </button>
      </div>
    </div>,
    document.getElementById("hereID")
  );
}
