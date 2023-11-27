import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden fixed left-0 top-0 w-80 h-screen bg-primary py-10 lg:block text-white">
        <p className="text-2xl font-semibold text-center py-10">
          Mov<span className="text-secondary">Atti</span>
        </p>
        <div className="space-y-7 lg:flex lg:flex-col px-5">
          <NavLink
            to="/"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-secondary"
          >
            Discover
          </NavLink>
          <NavLink
            to="/popularpage"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-secondary"
          >
            Popular
          </NavLink>
          <NavLink
            to="/toprated"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-secondary"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/favorite"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-secondary"
          >
            Favorite
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
