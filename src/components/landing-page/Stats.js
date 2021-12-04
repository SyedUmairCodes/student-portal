import React from "react";

const Stats = () => {
  return (
    <>
      <section class="text-white body-font border-t-2 bg-green-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                100K+
              </h2>
              <p class="leading-relaxed">Students Enrolled</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                50K+
              </h2>
              <p class="leading-relaxed">Graduated Alumni</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                8+
              </h2>
              <p class="leading-relaxed">Next-Gen Courses</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                40+
              </h2>
              <p class="leading-relaxed">Highly Trained Faculty</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
