import React from "react";
// import { s } from "../data";

const portfolio = () => {
  return (
    <section id="s" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full ">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Portfolio
        </h1>

      </div>
      
    </div>
    <div class="grid bg-slate-100">
            <div class="column1">
                <div class="img-wrapper max-h-80 rounded-md">
                    <img class="shadow-lg" src="https://picsum.photos/500?random=1"></img>
                    <button class="container shadow-lg">Project 1</button>
                </div>
                <div class="img-wrapper max-h-80 rounded-md">
                    <img src="https://picsum.photos/500?random=2"></img>
                    <button class="container">Project 3</button>
                </div>
                <div class="img-wrapper max-h-80 rounded-md">
                    <img src="https://picsum.photos/500/300?random=3"></img>
                    <button class="container">Project 5</button>
                </div>
            </div>
            <div class="column2">
                <div class="img-wrapper max-h-80 rounded-md">
                    <img src="https://picsum.photos/500?random=4"></img>
                    <button class="container">Project 2</button>
                </div>
                <div class="img-wrapper max-h-80 rounded-md">
                    <img src="https://picsum.photos/500?random=5"></img>
                    <button class="container">Project 4</button>
                </div>
                <div class="img-wrapper max-h-80 rounded-md">
                    <img src="https://picsum.photos/500?random=6"></img>
                    <button class="container">Project 6</button>
                </div>
            </div>
        </div>
  </section>
  );
}

export default portfolio;