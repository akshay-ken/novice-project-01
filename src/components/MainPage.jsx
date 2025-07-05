import mboileImg from "../assets/images/illustration-sign-up-mobile.svg";
import markerIcon from "../assets/images/icon-list.svg";

export function MainPage() {
  return (
    <>
      <main className="w-full h-screen">
        <div className="w-full flex justify-center">
          <img src={mboileImg} className="w-full" alt="" />
        </div>
        <div className="my-6 p-6">
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
        </div>
        <form action="" className="p-6 -mt-8">
          <label
            htmlFor="emailId"
            className="text-sm font-black tracking-wider text-Blue-800"
          >
            Email address
          </label>
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full outline-2 rounded-md p-4 placeholder:text-Grey mt-2 mb-6"
            name=""
            id="emailId"
          />
          <button className="bg-Blue-800 text-white text-xl text-center p-4 w-full rounded-xl font-bold">
            Subscribe to monthly newsletter
          </button>
        </form>
      </main>
    </>
  );
}
