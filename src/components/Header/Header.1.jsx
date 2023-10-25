"use client";
import { FaChevronDown, FaHamburger } from "react-icons/fa";
import { GiCrossedAirFlows } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import webDevelopmentIcon from "../../assets/menu-icon/web-development.png";
import cloudServiceIcon from "../../assets/menu-icon/cloud-service.png";
import uiuxIcon from "../../assets/menu-icon/ui.png";
import devopsIcon from "../../assets/menu-icon/devops.png";
import digitalMarketIcon from "../../assets/menu-icon/digital-market.png";
import itSupportIcon from "../../assets/menu-icon/it-support.png";
import consultanceIcon from "../../assets/menu-icon/consultant.png";
import aboutIcon from "../../assets/menu-icon/about.png";
import teamIcon from "../../assets/menu-icon/team.png";
import career from "../../assets/menu-icon/career.png";
import Image from "next/image";

export const Header = () => {
    const [submenuOpen, setSubmenuOpen] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const menuItem = [
        {
            name: "Company",
            path: "/company",
            submenu: [
                {
                    name: "About",
                    path: "/about-us",
                    image: aboutIcon,
                },
                {
                    name: "Team",
                    path: "/team",
                    image: teamIcon,
                },
                {
                    name: "Career",
                    path: "/career",
                    image: career,
                },
            ]
        },
        {
            name: "Services",
            path: "/services",
            submenu: [
                {
                    name: "Web Development",
                    path: "/services/web-development",
                    image: webDevelopmentIcon,
                },
                {
                    name: "Cloud Services",
                    path: "/services/cloud-services",
                    image: cloudServiceIcon,
                },
                {
                    name: "DevOps",
                    path: "/services/devops",
                    image: devopsIcon,
                },
                {
                    name: "UI/UX Design",
                    path: "/services/ui-ux-design",
                    image: uiuxIcon,
                },
                {
                    name: "Digital Marketing",
                    path: "/services/digital-marketing",
                    image: digitalMarketIcon,
                },
                {
                    name: "IT Consulting",
                    path: "/services/it-consulting",
                    image: consultanceIcon,
                },
                {
                    name: "IT Support",
                    path: "/services/it-support",
                    image: itSupportIcon,
                },
            ]
        },
        {
            name: "Clients",
            path: "/clients",
        },
        {
            name: "Products",
            path: "/products",
        },
        {
            name: "Contact Us",
            path: "/contact",
        },
    ];

    const handleSubmenuToggle = (index) => {
        setSubmenuOpen(submenuOpen === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setSubmenuOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <nav className=" my-container flex justify-center items-center py-2 bg-bg-color sticky right-0 top-0 z-10">
            <div className="navbar-start text-black">
                <Link href="/" className="btn btn-ghost normal-case text-sm md:text-xl lg:text-2xl text-white font-bold">
                    QuikFrontend
                </Link>
            </div>
            <div ref={menuRef} className="navbar-center lg:flex text-white hidden">
                <ul className="flex items-center justify-between gap-8 lg:text-2xl">
                    {menuItem.map((item, index) => (
                        <li className="hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer" key={index} onClick={() => handleSubmenuToggle(index)}>

                            {item.submenu ? { item, : .name + <FaChevronDown />} : <Link href={item.path}><span className="hover:bg-slate-800 rounded-md px-2 py-2"> {item.name}</span></Link>}

                            {submenuOpen === index && item.submenu && (
                                <ul className=" menu menu-vertical text-xl absolute top-16 w-80 bg-[#322464] shadow-2xl rounded-2xl divide-y-2 divide-band-orange">
                                    {item.submenu.map((subitem, subIndex) => (
                                        <li className="menu-item" key={subIndex} onClick={() => handleSubmenuToggle(null)}>
                                            <Link href={subitem.path}>
                                                <Image width={25} src={subitem.image} alt={subitem.name} />
                                                <span>{subitem.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* For Mobile devices  */}

            <button className="text-white text-2xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? <FaHamburger /> : <GiCrossedAirFlows />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu lg:hidden">
                    <ul className="menu w-56 rounded-box">
                        {menuItem.map((item, index) => (
                            item.submenu ? <li key={index}>
                                <details open>
                                    <summary>{item.name}</summary>
                                    <ul className=" menu menu-vertical text-xl absolute top-16 w-26 bg-[#322464] shadow-2xl rounded-2xl divide-y-2 divide-band-orange z-10">
                                        {item.submenu.map((subitem, subIndex) => (
                                            <li className="menu-item" key={subIndex}>
                                                <Link href={subitem.path}>
                                                    <Image width={25} src={subitem.image} alt={subitem.name} />
                                                    <span>{subitem.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li> : <li key={index}>  <Link href={item.path}>
                                <Image width={25} src={item.image} alt={item.name} />
                                <span>{item.name}</span>
                            </Link></li>

                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};
