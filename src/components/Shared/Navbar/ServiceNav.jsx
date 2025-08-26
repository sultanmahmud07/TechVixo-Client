"use client";
import Link from "next/link";
import classNames from "@/app/utils/classNames";
import { usePathname } from "next/navigation";

const ServiceNav = ({
  children,
  href,
  exact = false,
  activeClassName,
  ...props
}) => {
  const path = usePathname();
  const isActive = path === href;
  const classes = classNames(props.className, isActive && activeClassName);
  if (classes) {
    props.className = classes;
  }

  return (
    <Link className="block" href={href} {...props}>
      {children}
    </Link>
  );
};

export default ServiceNav;
