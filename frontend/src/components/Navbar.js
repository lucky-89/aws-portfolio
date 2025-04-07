import React, { useState ,useEffect} from 'react';
import { FaHome } from "react-icons/fa";
import { RiAedElectrodesFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { SiHyperskill } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";

import { Link } from 'react-scroll';

function Navbar() {
   
  return (
    <div className='nav'>


      <Link to="home" smooth={true} duration={500}><FaHome /></Link>
      <Link to="about" smooth={true} duration={500}><RiAedElectrodesFill/></Link>
      <Link to="skills" smooth={true} duration={500}><SiHyperskill /></Link>
      <Link to="certs" smooth={true} duration={500}><GrCertificate /></Link>
      <Link to="contact" smooth={true} duration={500}><IoIosContacts /></Link>
    </div>
  );
}

export default Navbar;
