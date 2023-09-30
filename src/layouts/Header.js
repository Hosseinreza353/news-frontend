import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <ul class="flex">
        <li class="mr-6">
          <span class="text-blue-500 hover:text-blue-800" href="#">
            خبرگزاری
          </span>
        </li>
      </ul>
    );
  }
}

export default Header;
