import React from "react";

const CallToAction = () => {
  return (
    <>
      <aside className="p-12 bg-green-900 sm:p-16 lg:p-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-medium text-black">
            Get Ready For The Future
          </p>

          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            We Are Expanding Our Network, One City At A Time.
          </p>

          <form className="mt-8 sm:flex">
            <div className="sm:flex-1">
              <label for="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 text-green-700 bg-white border-2 border-green-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-green-700 rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-green-600"
            >
              Stay Up-to Date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-4 h-4 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

export default CallToAction;
