import Link from "next/link";
import React, { Component } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { BsEnvelopeHeart } from "react-icons/bs";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffff",
            marginBottom: "20;",
          }}
        >
          <DiCssdeck size={"2rem"} /> <span> My Love</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#moments">
          <NavLink>Moments</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#dates">
          <NavLink>Dates</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#ily">
          <NavLink>ILY</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
