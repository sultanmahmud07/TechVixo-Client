import { useState } from "react";
import NavLink from "./NavLink";
import generateSlug from "../generateSlug";

const SubMenuBar = ({ setNavToggle, navData }) => {
  return (
    <div className="sub_nav_manu bg-secondary py-8 pb-16 z-10 shadow-lg absolute top-16 left-0 right-0 w-full h-auto p-1 text-white ">
      <div className="main_container">
        <div className="grid grid-cols-4 gap-3 md:gap-y-6">
          {navData?.map((category, i) => {
            const categorySlag = generateSlug(category?.category_name);
            const hrefPath = categorySlag === "design"
              ? "/design"
              : categorySlag === "search-engine-optimization-seo"
                ? "/search-engine-optimization-seo"
                : `/services/${categorySlag}`;
            return (
              <div key={i} className="">
                <NavLink
                  onClick={() => setNavToggle(false)}
                  href={hrefPath}
                  activeClassName=" border-b border-white"
                  className="text-primary text-base font-bold"
                  exact={categorySlag === "/"}
                >
                  {category?.category_name}
                </NavLink>
                <ServiceList
                  services={category?.services}
                  categorySlug={categorySlag}
                  setNavToggle={setNavToggle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ServiceList = ({ services, categorySlug, setNavToggle }) => {
  const [showAll, setShowAll] = useState(false);
  const MAX_VISIBLE = 4;
  const TEXT_LIMIT = 30; // Set character limit for service names.

  const truncateText = (text, limit) =>
    text.length > limit ? `${text.slice(0, limit)}..` : text;

  const visibleServices = showAll ? services : services?.slice(0, MAX_VISIBLE);

  return (
    <ul className="flex flex-col gap-1 pt-2">
      {visibleServices?.map((service, i) => {
        const serviceSlag = generateSlug(service?.service_name);
        const hrefPath = (categorySlug === "design" && serviceSlag === "ui-ux-design")
          ? "/design/ui-ux-design"
          : (categorySlug === "design" && serviceSlag === "branding-and-identity")
            ? "/design/branding-and-identity"
            : `/services/${categorySlug}/${serviceSlag}`;
        return (
          <li key={i}>
            <NavLink
              onClick={() => setNavToggle(false)}
              href={hrefPath}
              activeClassName="border-b border-primary"
              exact={serviceSlag === "/"}
              className="text-sm capitalize font-normal hover:border-b hover:border-primary py-1"
            >
              {truncateText(service?.service_name, TEXT_LIMIT)}
            </NavLink>
          </li>
        );
      })}
      {services?.length > MAX_VISIBLE && (
        <li>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm capitalize font-normal text-primary hover:underline mt-2"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </li>
      )}
    </ul>
  );
};

export default SubMenuBar;
