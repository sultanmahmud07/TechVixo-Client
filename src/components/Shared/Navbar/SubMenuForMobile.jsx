import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import NavLink from "./NavLink";
import generateSlug from "../generateSlug";
import ServiceNav from "./ServiceNav";

const SubMenuForMobile = ({ setNavToggle, openSubMenus, subMenu }) => {
  // const subMenu = [
  //   {
  //     serviceName: "CNC Machining Services",
  //     path: "/cnc-machining",
  //     subServiceName: [
  //       {
  //         path: "/cnc-turing",
  //         title: "CNC Turning",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "CNC Milling",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "Complex Mill-Turning",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "5-Axis Machining",
  //       },
  //     ]
  //   },
  //   {
  //     serviceName: "Materials Machined",
  //     path: "/cnc-machining",
  //     subServiceName: [
  //       {
  //         path: "/cnc-turing",
  //         title: "Metals",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "Plastics",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "Complex Mill",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: " Machining",
  //       },
  //     ]
  //   },
  //   {
  //     serviceName: "Surface Finishing Services",
  //     path: "/cnc-machining",
  //     subServiceName: [
  //       {
  //         path: "/cnc-turing",
  //         title: "CNC Turning",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "CNC Milling",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "Complex Mill-Turning",
  //       },
  //       {
  //         path: "/cnc-turing",
  //         title: "5-Axis Machining",
  //       },
  //     ]
  //   },
  // ]
  return (
    <ul
      className={`mobile_sub_nav_men flex flex-col text-[13px] font-normal  w-full 
         ${openSubMenus
          ? "open pt-3" : ""
        }
      `}
    >
        <li
            className="flex items-center gap-2  py-3"
          >
            <span className="text-primary">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
            <ServiceNav
              onClick={() => setNavToggle(false)}
              href={`/services`}
              activeClassName="text-primary font-semibold"
              className="hover:text-primary"
              exact={"services" === "/"}
            >
              All Services
            </ServiceNav>
          </li>
      {subMenu?.map((category, i) => {
          const categorySlag = generateSlug(category?.category_name)
        return (
          <li
            key={i}
            className="flex items-center gap-2  py-3"
          >
            <span className="text-primary">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
            <NavLink
              onClick={() => setNavToggle(false)}
              href={`/services/${categorySlag}`}
              activeClassName="text-primary font-semibold"
              className="hover:text-primary"
              exact={categorySlag === "/"}
            >
              {category?.category_name}
            </NavLink>
          </li>
        )
      })
      }
    </ul>
  )
}

export default SubMenuForMobile