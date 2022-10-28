import React from "react";

const Resume = () => {
    return (
        <div className="grow flex flex-col justify-evenly">
            <h1 className="text-center mb-20 font-bold uppercase rounded shadow py-5">Resume</h1>
            <div className="grow">
                <h2 className="text-center font-bold mb-5">Skills:</h2>
                <ul className="text-center leading-10 flex flex-col max-w-sm mx-auto">
                    <li className=" rounded shadow">Html</li>
                    <li className="rounded shadow">CSS</li>
                    <li className="rounded shadow">Javascript</li>
                    <li className="rounded shadow">Git</li>
                    <li className="rounded shadow">MongoDB</li>
                </ul>
            </div>
            <div className="text-center">
                <button className="  text-black active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Download Resume</button>
            </div>
        </div>
        

    );
};

export default Resume;