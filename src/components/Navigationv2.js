import React, { useState } from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import Logo from "./Logov2"
import { Buttonv2 } from "./Typography"

import mq from "../mediaQuery"
import LanguageSwitcher from "./LanguageSwitcherv2"

const Nav = styled("nav")`
  ${p =>
  p.menuOpen &&
  `
    background: #121d46;
  `};
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  padding: 30px 40px 20px 40px;
  position: sticky;
  z-index: 100000;
  top: 0;
  background: #f6f7fa;

  ${mq.medium`
      padding: 60px 60px 10px 60px;
    `};

  .mobile-nav {
    ${mq.medium`
      display: none;
    `};
  }

  .hamburger {
    padding: 10px 0 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:is-active {
      padding-top: 15px;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    background: #717171;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::after {
    content: "";
    display: none;
  }

  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse-r .hamburger-inner::before {
    transition: all 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: all 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--collapse-r.is-active .hamburger-inner,
  .hamburger--collapse-r.is-active .hamburger-inner::after,
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    background: #717171;
  }
`

const Links = styled("div")`
  display: none;
  align-items: center;
  a {
    font-family: JakartaSans;
    text-decoration: none;
    margin-right: 20px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #717171;

    opacity: 0.6;
  }
  
  a:last-child {
    margin-right: 0px;
  }

  ${mq.medium`
    display: flex;
  `};
`

const MobileLinks = styled("ul")`
  background: #f6f7fa;
  font-family: JakartaSans;
  font-size: 22px;
  color: #717171;
  text-align: center;
  padding: 0;
  margin: 0;
  transform: translateX(-100%);
  transition: 0.3s;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  opacity: 0;
  ${p =>
  p.menuOpen &&
  `
    opacity: 1;
    transform: translateX(0);
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
  }

  a {
    color: #717171;
    text-decoration: none;
  }
`

const Launch = styled(Buttonv2)`
  color: white !important;
`

const Separator = styled("div")`
  width: 1px;
  height: 25px;
  background: #717171;
  margin-right: 20px;
`

export default function Navigation() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Nav menuOpen={menuOpen}>
      <Link to="/">
        <Logo />
      </Link>

      <div className="mobile-nav">
        <button
          className={`hamburger hamburger--collapse-r ${
            menuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <Links menuOpen={menuOpen}>
        <a href="/governance">Governance</a>
        <a href="https://discord.gg/ens">Community</a>
        <Link to="/about">Team</Link>
        <a href="https://docs.ens.domains/">Docs</a>

        <Separator />
        <LanguageSwitcher />
        <Launch style={{opacity: 1}} href="https://app.ens.domains">{t("nav.launch")}</Launch>
      </Links>

      <MobileLinks menuOpen={menuOpen}>
        <li>
          <a href="/governance">Governance</a>
        </li>
        <li>
          <a href="https://discord.gg/ens">Community</a>
        </li>
        <li>
          <Link to="/about">Team</Link>
        </li>
        <li>
          <a href="https://docs.ens.domains/">Docs</a>
        </li>
        <li>
          <Launch href="https://app.ens.domains">{t("nav.launch")}</Launch>
        </li>
      </MobileLinks>
    </Nav>
  )
}
