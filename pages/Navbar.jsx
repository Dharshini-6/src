import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="./pages/hom">Home</Link>
    </li>
    <li>
      <Link to="./pages/expertise">Expertise</Link>
    </li>
    <li>
      <Link to="./pages/knowme">Know Me</Link>
    </li>
    <li>
      <Link to="./pages/cv">CV</Link>
    </li>
  </div>
  );
}
export default Navbar;