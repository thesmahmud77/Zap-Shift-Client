import React from "react";
import Container from "../Comtainer/Container";
import { Link, NavLink } from "react-router";
import navlogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Container>
      <div className="bg-red-600 grid grid-cols-12 items-center bg-white">
        <div className="NavIcon col-span-2">
          <Link className="flex items-center justify-center gap-0">
            <img src={navlogo} alt="" />
            <h1 className="text-black font-bold text-2xl mt-2">ZapShift</h1>
          </Link>
        </div>
        <div className="NavContent col-span-6 flex item-center justify-center gap-[36px] text-[#606060]">
          <NavLink>Services</NavLink>
          <NavLink>Coverage</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Be a Rider</NavLink>
        </div>
        <div className="NavButtons col-span-4">
          <Link className="btn btn-primary">Sign In</Link>
          <Link className="btn btn-primary">Be A Rider</Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
