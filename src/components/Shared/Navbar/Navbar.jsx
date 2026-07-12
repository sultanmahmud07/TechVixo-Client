"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import logo from "@@/logo/logo.png";
import { usePathname } from 'next/navigation'
import SubMenuBar from "./SubMenuBar";
import { IoIosArrowDown } from "react-icons/io";
import servicesData from "@/lib/servicesDB.json";
import SubMenuForMobile from "./SubMenuForMobile";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  // const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    setIsRoot(pathname === '/');
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleSubMenu = () => {
    setOpenSubMenus(!openSubMenus);
  };
  const navData = [
    {
      path: "/",
      title: "Home",
      subManu: []
    },
    {
      path: "/services",
      title: "Services",
      subManu: [
        {
          path: "/products",
          title: "All Products",
        },
        {
          path: "/products/passenger-elevator",
          title: "Passenger Elevator",
        },
        {
          path: "/products/home-elevator",
          title: "Home Elevator",
        },
        {
          path: "/products/panramic-elevator",
          title: "Panoramic Elevator",
        },
        {
          path: "/products/bed-elevator",
          title: "Bed Elevator",
        },
        {
          path: "/products/freight-elevator",
          title: "Freight Elevator",
        },
        {
          path: "/products/car-elevator",
          title: "Car Elevator",
        },
        {
          path: "/products/dumbwaiter-elevator",
          title: "Dumbwaiter Elevator",
        },
        {
          path: "/products/capsule-elevator",
          title: "Capsule Elevator",
        },
        {
          path: "/products/escalator",
          title: "Escalator",
        },
        {
          path: "/products/moving-walway",
          title: "Moving Walkway",
        },
      ]
    },
    {
      path: "/works",
      title: "Works",
      subManu: []
    },
    {
      path: "/process",
      title: "Process",
      subManu: []
    },
    {
      path: "/about",
      title: "About",
      subManu: []
    },
    {
      path: "/blog",
      title: "Blog",
      subManu: []
    },
    {
      path: "/case-studies",
      title: "Case Studies",
      subManu: []
    },
    {
      path: "/testimonial",
      title: "Testimonial",
      subManu: []
    },
    // {
    //   path: "/career",
    //   title: "Career",
    //   subManu: []
    // },
    {
      path: "/contact",
      title: "Contact",
      subManu: []
    },
  ];

  return (
    <nav className={`z-50  w-full fixed top-0 left-0 right-0  bg-secondary py-3 lg:py-0 pt-5 ${isSticky ? " md:bg-secondary nav_shadow" : "navber_border md:bg-[#00000000] "}`}>
      <div className={`main_container flex justify-between items-center  ${isSticky ? "" : ""}`}>
        {/* Logo side here >>>>>>>>>>>>>>>> */}
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={400}
              className="w-52"
            />
          </Link>
        </div>
        {/* NAv menu side here >>>>>>>>>>>>>>>> */}
        <div className={`absolute ${navToggle ? "left-0" : "left-[-120%]  "
          } top-[4.5rem] flex w-full flex-col pb-3 pt-2 transition-all duration-300  lg:static lg:w-[unset] lg:flex-row bg-[#000000c0] lg:bg-transparent lg:pb-0 lg:pt-0 `}
        >
          <div className="hidden md:block">
            <ul className="nav_manu w-full flex pl-10 md:pl-0 flex-col lg:flex-row items-start md:items-center justify-center py-1 gap-0 px-1 text-white">
              {navData.map(({ path, title, }) => (
                <li
                  key={path}
                  onMouseEnter={() => path === "/services" && setServicesDropdownOpen(true)}
                  onMouseLeave={() => path === "/services" && setServicesDropdownOpen(false)}
                >
                  <NavLink
                    onClick={() => {
                      setNavToggle(false);
                      if (path === "/services") {
                        setServicesDropdownOpen(false);
                      }
                    }}
                    href={path}
                    activeClassName="text-primary bg-[#262626]"
                    exact={path === "/"}
                    className="flex items-center text-sm font-semibold gap-2 p-3 py-5"
                  >
                    {title}
                    {
                      path === "/services" &&
                      <span className="arrow"></span>
                    }
                  </NavLink>
                  {
                    path === "/services" &&
                    <SubMenuBar
                      navData={servicesData}
                      isOpen={servicesDropdownOpen}
                      setNavToggle={(val) => {
                        setNavToggle(val);
                        setServicesDropdownOpen(val);
                      }}
                    />
                  }
                </li>
              ))}
            </ul>
          </div>
          {/* Only for mobile device ========================= */}
          <ul
            className={`mobile_nav_menu md:hidden bg-secondary pt-2 font-semibold pb-10 text-[14px] uppercase flex  flex-col items-start justify-center gap-2 px-1 text-[#010749]`}
          >
            {navData?.map((key, index) => (
              <li key={index} className="py-4 px-10 w-full bg-[#43434376] text-white p-2">
                {key.path == "/services" ? (
                  <div
                    onClick={() => toggleSubMenu()}
                    className="flex items-center justify-between gap-2 cursor-pointer"
                  >
                    {key?.title}
                   
                    {openSubMenus ?
                      (
                        <span className="text-lg">
                          <IoIosArrowUp />
                        </span>
                      )
                      :
                      (
                        <span className="text-lg ">
                          <IoIosArrowDown />
                        </span>
                      )}
                  </div>
                ) : (
                  <NavLink
                    onClick={() => setNavToggle(false)}
                    href={key.path}
                    activeClassName="text-primary font-semibold"
                    exact={key.path === "/"}
                  >
                    {key.title}
                  </NavLink>
                )}
                {/* Mobile sub menu code start from here..... */}
                {
                  key.path == "/services" &&
                  openSubMenus &&
                  <SubMenuForMobile
                    subMenu={servicesData}
                    setNavToggle={setNavToggle}
                    openSubMenus={openSubMenus}
                  ></SubMenuForMobile>
                }
              </li>
            ))}
          </ul>
        </div>
        {/* Right side here >>>>>>>>>>>>>>>> */}
        <div className="right_side hidden lg:block">
          <div className="flex justify-end items-center mt-2">
            <Link href="/contact"><button className="btn-active btn-primary btn-sm text-xs px-5 text-white  hover:bg-secondary transition rounded">Get Started</button></Link>
          </div>
        </div>
        {/* Right toggle bar for mobile  */}
        <label className="swap-rotate swap   bg-white rounded-full h-9 w-9  lg:hidden">
          <input
            checked={navToggle}
            onChange={() => setNavToggle((pre) => !pre)}
            type="checkbox"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
