"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { subMenus } from "@/helper/programSubmenu";
import SubMenu from "./Header/SubMenu";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const closeTimeout = useRef(null);
  const closeTimeout2 = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const [eliteOpen, setEliteOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [eliteSubMenu, setEliteSubMenu] = useState(false);
  const [programSubmenu, setProgramSubmenu] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const handleCategoryClick = (submenu) => {
    setSelectedSubmenu(submenu);
    // setProgramSubmenu(false);
  };

  const handleMouseEnter = (div) => {
    if (div === "elite") {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
      setEliteOpen(true);
    } else {
      if (closeTimeout2.current) {
        clearTimeout(closeTimeout2.current);
        closeTimeout2.current = null;
      }
      setProgramOpen(true);
    }
  };

  const handleMouseLeave = (div) => {
    if (div === "elite") {
      closeTimeout.current = setTimeout(() => {
        setEliteOpen(false);
      }, 100);
    } else {
      closeTimeout2.current = setTimeout(() => {
        setProgramOpen(false);
      }, 100);
    }
  };

  const handleNavbarToggle = () => {
    setNavbarToggle(!navbarToggle);
  };

  return (
    <>
      <header className="header-desktop gap-4 h-fit p-[40px_140px_0px_140px] bg-transparent flex justify-between items-center fixed w-full z-[999]">
        <div
          className="header-left-side h-fit flex items-center justify-between w-[831px] bg-[rgba(233,233,233,0.7)] border border-[rgba(211,211,211,1)] 
                rounded-[90px] p-[4px_8px_4px_21px] text-lg font-normal backdrop-blur-[80px] transition ease duration-1000 delay-0 relative z-[4] "
        >
          <Link href={"/"}>
            <Image
              src={require("../../public/image/IT-removebg-preview.png")}
              loading="lazy"
              className="rinex-header-logo transition ease duration-1000 delay-0 w-[80px] h-[57px] "
              alt=""
            />
          </Link>

          <div
            id="headerHome"
            className={`nav-link no-underline cursor-pointer text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0 
                    ${
                      pathname == "/" &&
                      "border-[1.5px] border-[#d4d4d4] bg-[#f6f6f6] shadow-[inset_0_-5px_1px_rgb(233,233,233)] text-black"
                    }`}
            // onClick={() => { pathname !== '/' && router.push('/') }}
            onMouseEnter={() => handleMouseEnter("elite")}
            onMouseLeave={() => handleMouseLeave("elite")}
          >
            Elite
            <Image
              src={require("../../public/image/down_arrow.svg")}
              className="ml-[10px]"
              alt=""
            />
            <div
              id="elite-menu-container"
              className={`menu-container absolute w-[310px] h-fit top-[75px] left-[140px] bg-[rgba(255,255,255,1)] 
                        p-[0px_30px_20px] border border-[rgb(215,215,215)] rounded-[20px] z-[1000] shadow-custom bottom-[-395px] ${
                          eliteOpen ? "block" : "hidden"
                        } `}
              onMouseEnter={() => handleMouseEnter("elite")}
              onMouseLeave={() => handleMouseLeave("elite")}
            >
              <div className="elite-link-menu flex flex-col">
                <div className="flex items-center cursor-pointer mt-5">
                  <Image
                    src={require("../../public/image/programm_icon.svg")}
                    className="ml-[10px]"
                    alt=""
                  />

                  <div className="ml-[10px]">
                    <p className="elite-menu-para text-sm font-bold uppercase"></p>

                    <h6 className="elite-menu-heading text-lg font-bold text-left flex-grow">
                      Elite Programs
                    </h6>
                  </div>
                </div>

                <Link
                  className="nav-sub-link-elite mt-[25px] flex items-center no-underline"
                  href="/ep/DSAPython"
                >
                  <Image
                    src={require("../../public/image/pythonElite.png")}
                    className="ml-[10px]"
                    width={40}
                    alt=""
                  />

                  <div>
                    <p className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-semibold ml-5 text-[gray]">
                      Data Structures and Algorithms with Python
                    </p>
                  </div>
                </Link>

                <Link
                  className="nav-sub-link-elite mt-[25px] flex items-center no-underline"
                  href="/ep/DSAJava"
                >
                  <Image
                    src={require("../../public/image/javaElite.png")}
                    className="ml-[10px]"
                    width={40}
                    alt=""
                  />

                  <div>
                    <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-semibold ml-5 text-[gray]">
                      Data Structures and Algorithms with Java
                    </h6>
                  </div>
                </Link>

                <Link
                  className="nav-sub-link-elite mt-[25px] flex items-center no-underline"
                  href="/ep/DSACPP"
                >
                  <Image
                    src={require("../../public/image/c++Elite.png")}
                    className="ml-[10px]"
                    width={40}
                    alt=""
                  />

                  <div>
                    <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-semibold ml-5 text-[gray]">
                      Data Structures and Algorithms with C++
                    </h6>
                  </div>
                </Link>

                <Link
                  className="nav-sub-link-elite mt-[25px] flex items-center no-underline"
                  href="/ep/uiux"
                >
                  <Image
                    src={require("../../public/image/uiuxElite.png")}
                    className="ml-[10px]"
                    width={40}
                    alt=""
                  />

                  <div>
                    <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-semibold ml-5 text-[gray]">
                      UI/UX
                    </h6>
                  </div>
                </Link>

                <Link
                  className="nav-sub-link-elite mt-[25px] flex items-center no-underline"
                  href="/ep/digitalmarketing"
                >
                  <Image
                    src={require("../../public/image/digitalmarketingElite.png")}
                    className="ml-[10px]"
                    width={40}
                    alt=""
                  />

                  <div>
                    <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-semibold ml-5 text-[gray]">
                      Digital Marketing
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            className={`nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0
                    ${
                      pathname == "/about" &&
                      "border-[1.5px] border-[#d4d4d4] bg-[#f6f6f6] shadow-[inset_0_-5px_1px_rgb(233,233,233)] text-black"
                    }`}
            id="headerAbout"
            href="/about"
          >
            About
          </Link>

          <div
            id="btnHeadProgram"
            className={`nav-link no-underline cursor-pointer text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0
                    ${
                      pathname == "/program" || pathname.startsWith("/program")
                        ? "border-[1.5px] border-[#d4d4d4] bg-[#f6f6f6] shadow-[inset_0_-5px_1px_rgb(233,233,233)] text-black"
                        : ""
                    }`}
            // onClick={() => { pathname !== '/' && router.push('/') }}
            onMouseEnter={() => handleMouseEnter("program")}
            onMouseLeave={() => handleMouseLeave("program")}
          >
            Programs
            <Image
              src={require("../../public/image/down_arrow.svg")}
              className="ml-[10px]"
              alt=""
            />
            <div
              id="program-menu-container"
              className={`menu-container absolute w-[337px] h-fit top-[75px] left-[42%] bg-[rgba(255,255,255,1)] 
                        p-[0px_30px_20px] border border-[rgb(215,215,215)] rounded-[20px] z-[1000] shadow-custom bottom-[-395px] py-[30px] ${
                          programOpen ? "block" : "hidden"
                        }`}
              onMouseEnter={() => handleMouseEnter("program")}
              onMouseLeave={() => handleMouseLeave("program")}
            >
              <div className="program-link-menu flex flex-col">
                <div className="flex items-center cursor-pointer relative pb-[25px]">
                  <Image
                    src={require("../../public/image/programm_icon.svg")}
                    className="ml-[10px]"
                    alt=""
                  />

                  <div className="ml-[10px]">
                    <p className="elite-menu-para text-[10px] font-bold text-black tracking-[3px] uppercase">
                      PROGRAMS
                    </p>
                    <h6 className="elite-menu-heading text-2xl -mt-[8px] tracking-[-1px] font-bold text-black">
                      See all programs
                    </h6>
                  </div>
                </div>
                {subMenus.map((menu, index) => (
                  <SubMenu
                    key={index}
                    title={menu.title}
                    bottomPosition={menu.bottomPosition}
                    links={menu.links}
                    iconSrc={menu.iconSrc}
                  />
                ))}
              </div>
            </div>
          </div>

          <Link
            id="headerCareer"
            className={`nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0
                    ${
                      pathname == "/career" &&
                      "border-[1.5px] border-[#d4d4d4] bg-[#f6f6f6] shadow-[inset_0_-5px_1px_rgb(233,233,233)] text-black"
                    }`}
            href="/career"
          >
            Career
            <p className="hiring-chip text-[7px] xl:text-[10px] font-medium text-[rgba(135,135,135,1)] bg-black rounded ml-[9px] transition ease duration-1000 delay-0 h-5 flex items-center justify-center p-1">
              <span>WE ARE HIRING</span>
            </p>
          </Link>

          {/* <Link href="/blogNav" id="headerBlogs" className={`nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0
                    ${pathname == '/blogNav' && 'border-[1.5px] border-[#d4d4d4] bg-[#f6f6f6] shadow-[inset_0_-5px_1px_rgb(233,233,233)] text-black'}`}
                    >
                        Blogs
                    </Link> */}
        </div>

        <div className="header-right-side flex gap-4 items-center">
          {/* <button id="btnToggle" className='flex items-center fixed justify-between right-[10px] top-[50px] border-0 p-[5px] rounded-[130px] w-[82px] bg-black rotate-90 transition ease duration-1000 delay-0 '>

                        <div id="lightDiv" style={{ backgroundColor: "rgb(129, 129, 129)" }}>

                            <img src="/images/sun_light.svg" alt="" />
                        </div>
                        <img id="sunImg" src="/images/vertical.svg" alt="" />
                        <div id="darkDiv">
                            <img src="/images/moon.svg" alt="" />
                        </div>
                    </button> */}

          <button className="btn-signUp flex justify-center items-center text-lg font-normal text-black rounded-[130px] p-[19px_20px_19px_22px] mr-[10px] transition ease duration-1000 delay-0 bg-[rgba(233,233,233,0.7)] backdrop-blur-[80px] border-none whitespace-nowrap">
            <Image
              src={require("../../public/image/person_icon.b6fd4cef071015312a7e.svg")}
              className="person-icon mr-[7px] "
              alt=""
            />
            Sign Up
          </button>

          <Link
            href="https://superprofile.bio/vp/677919fba2d7d300131d8b0f"
            target="_blank"
            className=" flex items-center justify-center gap-1 btn-logIn text-lg bg-black shadow-[0px_4px_14px_rgba(0,0,0,0.25)] rounded-[130px] 
                    p-[19px_20px_19px_22px] transition ease duration-1000 delay-0 no-underline text-[rgba(255,255,2551)]"
          >
            <Image src={require("../../public/image/login_icon.svg")} alt="" />
            Login
          </Link>
        </div>
      </header>

      <header
        className={`opacity-100 fixed lg:opacity-0  header-mobile`}
        style={{ display: navbarToggle ? "none" : "block" }}
        id="headerMobile"
      >
        <div div className="header-container-mobile relative" id="headerContainerMobile">
          <Link href="/">
            <Image
              src={require("../../public/image/IT-removebg-preview.png")}
              loading="lazy"
              className="rinex-header-logo transition ease duration-1000 delay-0 w-[80px] h-[57px] "
              alt=""
            />
          </Link>
          <button className="btn-header-menu" onClick={handleNavbarToggle}>
            <FaBars size={30} className="mr-1" />
          </button>
        </div>
      </header>

      <div
        id="headerMainMenu"
        className="flex lg:hidden"
        style={{ marginTop: navbarToggle ? "0" : "-300vh", zIndex: 15 }}
      >
        <div>
          <div>
            <div id="headerContainerMobile" style={{ padding: "35px" }}>
              <Link href="/">
                <Image
                  src={require("../../public/image/IT-removebg-preview.png")}
                  loading="lazy"
                  className="rinex-header-logo transition ease duration-1000 delay-0 w-[80px] h-[57px] "
                  alt=""
                />
              </Link>
              <button
                className="btn-header-menu-close"
                onClick={handleNavbarToggle}
              >
                <RxCross2 size={35} />
              </button>
            </div>
            <div className="menu-category-contianer">
              <ul>
                <li onClick={() => setEliteSubMenu(true)}>
                  <div className="nav-link elite-mobile-header cursor-pointer">
                    Elite
                  </div>
                </li>
                <li onClick={handleNavbarToggle}>
                  <Link className="menuLink" href="/about">
                    About
                  </Link>
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setProgramSubmenu(true)}
                >
                  Program
                  <Image
                    src={require("../../public/image/right_arrow_grey.svg")}
                    alt=""
                  />
                </li>
                <li onClick={handleNavbarToggle}>
                  <Link className="menuLink" href="/career">
                    Career
                    <span className="hiring-chip">WE ARE HIRING</span>
                  </Link>
                </li>
                {/* <li onClick={handleNavbarToggle}>
                                    <Link href="/#blogNav" className="menuLink">blog</Link>
                                </li> */}
              </ul>
            </div>
          </div>
          {/* <button id="btnToggle">
                        <div id="lightDiv">
                            <img src="/images/sun_light.svg" alt="" />
                        </div>
                        <img id="sunImg" src="/images/vertical.svg" alt="" />
                        <div id="darkDiv">
                            <img src="/images/moon.svg" alt="" />
                        </div>
                    </button> */}
          <div className="header-right-side flex gap-4 items-center">
            <button className="btn-signUp flex justify-center items-center text-lg font-normal text-black rounded-[130px] p-[19px_20px_19px_22px] mr-[10px] transition ease duration-1000 delay-0 bg-[rgba(233,233,233,0.7)] backdrop-blur-[80px] border-none whitespace-nowrap">
              <Image
                src={require("../../public/image/person_icon.b6fd4cef071015312a7e.svg")}
                className="person-icon mr-[7px] "
                alt=""
              />
              Sign Up
            </button>

            <Link
              href="https://superprofile.bio/vp/677919fba2d7d300131d8b0f"
              target="_blank"
              className=" flex items-center justify-center gap-1 btn-logIn text-lg bg-black shadow-[0px_4px_14px_rgba(0,0,0,0.25)] rounded-[130px] 
                            p-[19px_20px_19px_22px] transition ease duration-1000 delay-0 no-underline text-[rgba(255,255,2551)]"
            >
              <Image
                src={require("../../public/image/login_icon.svg")}
                alt=""
              />
              Login
            </Link>
          </div>

          <div
            id="program-categories-modal-section"
            style={{ display: programSubmenu ? "block" : "none" }}
          >
            <div
              id="program-categories-modal"
              style={{ display: !selectedSubmenu ? "flex" : "none" }}
            >
              <div className="program-modal-head">
                <div>
                  <p className="program-menu-para">PROGRAMS</p>
                  <h6 className="program-menu-heading">See all programs</h6>
                </div>
                <Image
                  onClick={() => setProgramSubmenu(false)}
                  className="closeMnu"
                  src={require("../../public/image/menu_close_button.svg")}
                  alt="close"
                />
              </div>
              <Image
                src={require("../../public/image/hor_devider.svg")}
                alt=""
              />
              {subMenus.map((submenu, index) => (
                <div
                  key={index}
                  className="program-categories"
                  onClick={() => handleCategoryClick(submenu)}
                >
                  <Image src={submenu.iconSrc} alt={submenu.title} />
                  <div>
                    <h6 className="program-menu-option">{submenu.title}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div
              id="program-subcategories-modal"
              style={{ display: selectedSubmenu ? "block" : "none" }}
            >
              {selectedSubmenu && (
                <>
                  <div className="program-modal-head">
                    <Image
                      src={require("../../public/image/left_arrow.1dbad7d15c18ca50e713.svg")}
                      className="subCatArrow"
                      alt="back"
                      onClick={() => setSelectedSubmenu(null)}
                    />
                    <p className="program-menu-para">{selectedSubmenu.title}</p>
                  </div>
                  <Image
                    src={require("../../public/image/hor_devider.svg")}
                    alt=""
                  />
                  {selectedSubmenu.links.map((link, index) => (
                    <Link
                      onClick={() => {
                        handleNavbarToggle();
                        setSelectedSubmenu(null);
                        setProgramSubmenu(false);
                      }}
                      key={index}
                      className="program-categories"
                      href={link.href}
                    >
                      <Image src={link.icon} alt={link.label} />
                      <div>
                        <h6 className="program-menu-option">{link.label}</h6>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>

          <div
            id="elite-modal-section"
            style={{ display: eliteSubMenu ? "block" : "none" }}
          >
            <div id="elite-modal">
              <div className="elite-modal-head">
                <div className="elite-modal-head-left">
                  <p className="elite-menu-para">ELITE</p>
                  <h6 className="elite-menu-heading">See all Elite options</h6>
                </div>
                <Image
                  onClick={() => setEliteSubMenu(false)}
                  className="closeicon"
                  src={require("../../public/image/menu_close_button.svg")}
                  alt="close"
                />
              </div>
              <hr />
              <div className="elite-program-details">
                <Link
                  onClick={() => {
                    handleNavbarToggle();
                    setEliteSubMenu(false);
                  }}
                  href="/ep/DSAPython"
                  className="elite-option"
                >
                  <Image
                    src={require("../../public/image/pythonElite.png")}
                    alt="Elite Icon"
                  />
                  <h6>Data Structures and Algorithms in Python</h6>
                </Link>
                <Link
                  onClick={() => {
                    handleNavbarToggle();
                    setEliteSubMenu(false);
                  }}
                  href={"/ep/DSAJava"}
                  className="elite-option"
                >
                  <Image
                    src={require("../../public/image/javaElite.png")}
                    alt="Elite Icon"
                  />
                  <h6>Data Structures and Algorithms in Java</h6>
                </Link>
                <Link
                  onClick={() => {
                    handleNavbarToggle();
                    setEliteSubMenu(false);
                  }}
                  href={"/ep/DSACPP"}
                  className="elite-option"
                >
                  <Image
                    src={require("../../public/image/c++Elite.png")}
                    alt="Elite Icon"
                  />
                  <h6>Data Structures and Algorithms in C++</h6>
                </Link>
                <Link
                  onClick={() => {
                    handleNavbarToggle();
                    setEliteSubMenu(false);
                  }}
                  href={"/ep/uiux"}
                  className="elite-option"
                >
                  <Image
                    src={require("../../public/image/uiuxElite.png")}
                    alt="Elite Icon"
                  />
                  <h6>UI/UX</h6>
                </Link>
                <Link
                  onClick={() => {
                    handleNavbarToggle();
                    setEliteSubMenu(false);
                  }}
                  href={"/ep/digitalmarketing"}
                  className="elite-option"
                >
                  <Image
                    src={require("../../public/image/digitalmarketingElite.png")}
                    alt="Elite Icon"
                  />
                  <h6>Digital Marketing</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
