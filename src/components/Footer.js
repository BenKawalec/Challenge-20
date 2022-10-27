import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 absolute bottom-0 inset-x-0 ">
            <div className="flex justify-evenly items-center h-10">
                <a className="text-white flex" href="#">Github</a>
                <a className="text-white flex" href="#">Linkedin</a>
                <a className="text-white flex" href="#">Stack Overflow</a>
            </div>

        </footer>
    );
};

export default Footer;