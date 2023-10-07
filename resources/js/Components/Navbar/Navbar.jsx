import "@/public/css/style.css";
import "@/Components/Navbar/script";
import React, { useEffect, useState } from "react";
import navaIcon from "@/public/icon/nava3d.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuVisible)
        isMenuVisible == true
            ? setIsMenuVisible(!false)
            : setIsMenuVisible(true);
    };

    useEffect(() => {
        if (isMenuVisible) {
            const hamburger = document.getElementById("hamburger");
            const navMenu = document.getElementById("nav-menu");

            if (hamburger && navMenu) {
                hamburger.addEventListener("click", function () {
                    hamburger.classList.toggle("hamburger-active");
                    navMenu.classList.toggle("hidden");
                });
            }
        }
    }, [isMenuVisible]);

    return (
        <div className="container">
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        {/* <!-- Logo --> */}
                        <div className="flex px-4">
                            <img src={navaIcon} className="w-20 h-20" />
                            <a
                                href="#"
                                className="font-bold text-lg text-primary block py-6"
                            >
                                CV Nava Dhanarama Indonesia
                            </a>
                        </div>
                        {/* <!-- Menu --> */}
                        <div className="flex items-center px-4">
                            <button
                                id="hamburger"
                                onClick={toggleMenu}
                                name="hamburger"
                                type="button"
                                className={
                                    (`hamburger ${
                                        isMenuVisible ? "hamburger-active" : ""
                                    }`,
                                    "block absolute right-4 lg:hidden")
                                }
                            >
                                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                            </button>

                            {/* <!-- Menu Nav --> */}
                            <nav
                                id="nav-menu"
                                className={
                                    (`menu ${isMenuVisible ? "" : "hidden"}`,
                                    "hidden duration-1000 absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none")
                                }
                            >
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <Link
                                            to="home"
                                            smooth={true}
                                            duration={500}
                                            className="text-base text-dark py-2 px-8 flex hover:text-primary cursor-pointer"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="group">
                                        <Link
                                            to="portfolio"
                                            smooth={true}
                                            duration={500}
                                            className="text-base text-dark py-2 px-8 flex hover:text-primary cursor-pointer"
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="group">
                                        <Link
                                            to="about"
                                            smooth={true}
                                            duration={500}
                                            className="text-base text-dark py-2 px-8 flex hover:text-primary cursor-pointer"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="group">
                                        <Link
                                            to="testimonial"
                                            smooth={true}
                                            duration={500}
                                            className="text-base text-dark py-2 px-8 flex hover:text-primary cursor-pointer"
                                        >
                                            Testimonial
                                        </Link>
                                    </li>
                                    <li className="group">
                                        <Link
                                            to="contact"
                                            smooth={true}
                                            duration={500}
                                            className="text-base text-dark py-2 px-8 flex hover:text-primary cursor-pointer"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
