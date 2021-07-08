import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="bi bi-list"></i>
        </label>

        <a href="" class="logo">
          Cafe.com
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contacts">Contacts</a>
          </li>
          <li>
            <a href="#Feedback">Feedback</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
