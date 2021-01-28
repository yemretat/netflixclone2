import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {" "}
      {/*Kardeşim ne güzel kullanımdır bu ya !! */}
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav__avatar"
        src=" https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
        alt="Avatar Logo"
      ></img>
    </div>
  );
};
export default Nav;
