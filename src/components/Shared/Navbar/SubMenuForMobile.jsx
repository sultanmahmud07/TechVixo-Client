import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import NavLink from "./NavLink";
import generateSlug from "../generateSlug";
import ServiceNav from "./ServiceNav";

const SubMenuForMobile = ({ setNavToggle, openSubMenus, subMenu }) => {
  const filteredSubMenu = subMenu?.filter(
    (category) => generateSlug(category?.category_name) !== "test"
  );

  return (
    <ul
      className={`mobile_sub_nav_men flex flex-col text-[13px] font-normal w-full 
         ${openSubMenus ? "open pt-3" : ""}
      `}
    >
      <li className="flex items-center gap-2 py-3">
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
      {filteredSubMenu?.map((category, i) => {
        const categorySlag = generateSlug(category?.category_name);
        return (
          <li key={i} className="flex items-center gap-2 py-3">
            <span className="text-primary">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
            <NavLink
              onClick={() => setNavToggle(false)}
              href={`/${categorySlag}`}
              activeClassName="text-primary font-semibold"
              className="hover:text-primary"
              exact={categorySlag === "/"}
            >
              {category?.category_name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenuForMobile;