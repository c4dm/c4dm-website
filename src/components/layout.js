import React, {useState} from "react"
import {Link} from "gatsby"

const navItems = [
    {name: "About", link: "/about"},
    {name: "Blog", link: "/blog"},
    {name: "Participate", link: "/participate"},
]

const socialMediaItems = [
  {
    iconName: "fa-twitter",
    link: "https://twitter.com/c4dm",
  },
];



const Layout = (props) => {

    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const navBarTop = (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <b>Logo</b>
          </Link>
          <a
            role="button"
            className={`navbar-burger ${showMobileMenu?"is-active":undefined}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={()=>setShowMobileMenu(!showMobileMenu)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-end ${!showMobileMenu?"is-hidden-touch":undefined}`}>
          {navItems.map((item) => (
            <Link
              className="navbar-item is-hidden-desktop"
              to={item.link}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
          {socialMediaItems.map((item) => (
            <a className="navbar-item" key={item.iconName} href={item.link} target="_blank" rel="noreferrer noopener">
              <span className="icon is-large">
                <i className={`fab ${item.iconName}`}></i>
              </span>
            </a>
          ))}
        </div>
      </nav>
    );

    const navBarBottom = (
      <nav
        className="navbar is-hidden-touch"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand"></div>
        <div className="navbar-menu is-flex is-justify-content-space-around">
          <div className="is-flex">
            {navItems.map((item) => (
              <Link className={`navbar-item ${item.name===props.name ? "is-active" : undefined}`} to={item.link} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );

    return (
      <>
        <header className="hero is-medium is-primary">
          <div className="hero-head">{navBarTop}</div>
          <div className="hero-body">
            <p className="title is-size-1 has-text-centered">
              Centre for Digital Music
            </p>
          </div>
          <div className="hero-footer">{navBarBottom}</div>
        </header>
        <main className="container">{props.children}</main>
      </>
    );
}

export default Layout