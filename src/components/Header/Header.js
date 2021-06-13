import Link from "next/link";
import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { DiAtom } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  NavBrand,
  ContactDropDown,
  NavProductsIcon,
} from "./HeaderStyles";

const Header = () => (
  <Container style={{ marginBottom: "20px" }}>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiAtom size="4rem" color="#666" />
          <NavBrand>Portfolio</NavBrand>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/3hedBurglar">
        <FiGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <FiInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/faisal-rahman-b90182137/">
        <FiLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
