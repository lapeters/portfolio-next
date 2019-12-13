import React from 'react'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faGithub, faLinkedin, faInstagram)

const links = [
  { href: 'https://github.com/lapeters', icon: faGithub },
  { href: 'https://www.linkedin.com/in/lapeters-dev/', icon: faLinkedin },
  { href: 'https://www.instagram.com/lapeters322/', icon: faInstagram },
].map(link => {
  link.key = `nav-link-${link.icon}-${link.href}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, icon }) => (
        <li key={key}>
          <a href={href} target="_blank">
            <FontAwesomeIcon icon={icon} size="lg" />
          </a>
        </li>
      ))}
      <li>
        <Link href="/about">
          <button>About</button>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      nav ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      nav > ul {
        margin: 0;
        padding: 1rem 1.8rem 0.9rem;
      }
      nav ul li {
        display: flex;
        padding-top: 0rem;
        padding-bottom: 0rem;
      }
      nav ul li + li {
        padding-left: 0.7rem;
        padding-right: 0.75rem;
      }
      nav ul li:first-of-type {
        padding-left:0;
        position: absolute;
        left: 1.8rem;
      }
      nav ul li + li:last-of-type {
        padding-right:0;
      }
      nav a, nav button {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1rem;
      }
      nav a {
        color: #fff;
      }
      nav a:hover {
        color: #E3C6BF;
      }
    `}</style>
  </nav>
)

export default Nav
