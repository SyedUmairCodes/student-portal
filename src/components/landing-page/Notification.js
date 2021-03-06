import React from "react";
import { Link } from "gatsby";
const Notification = () => {
  return (
    <>
      <aside class="p-3 text-center bg-gradient-to-r from-green-200 via-green-500 to-green-700">
        <p class="text-sm font-medium text-white">
          Admissions Are Open {""}
          <Link to="" class="inline-flex items-center underline">
            Apply now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 ml-1.5 flex-shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </p>
      </aside>
    </>
  );
};

export default Notification;
