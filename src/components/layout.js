import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

const navItems = [
    {name: "Research", link: "/research"},
    {name: "People", link: "/people"},
    {name: "News", link: "/news"},
    {name: "Partners", link: "/partners"},
    {name: "Get Involved", link: "/get-involved"},
]

const socialMediaItems = [
  {
    iconName: "fa-twitter",
    link: "https://twitter.com/c4dm",
  },
];


const Layout = (props) => {

    const data = useStaticQuery(graphql`
    {
    c4dmlogo: file(absolutePath: {regex: "/images/.*c4dm.*/"}, extension: {eq: "png"}) {
      id
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 30)
        }
      }
    qmullogo: file(absolutePath: {regex: "/images/.*QMUL_black.*/"}, extension: {eq: "png"}) {
      id
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 50)
        }
      }
    }
    `);

    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const navBar = (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <GatsbyImage
              alt="C4DM logo"
              className="logo"
              image={data.c4dmlogo.childImageSharp.gatsbyImageData}
            />
          </Link>
          <a
            role="button"
            className={`navbar-burger ${
              showMobileMenu ? "is-active" : undefined
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={`navbar-end ${
            !showMobileMenu ? "is-hidden-touch" : undefined
          }`}
        >
          {navItems.map((item) => (
            <>
              <Link className="navbar-item" to={item.link} key={item.name}>
                {item.name}
              </Link>
              <span className="navitem-divider"></span>
            </>
          ))}
        </div>
      </nav>
    );

    const footer = (
      <footer class="footer">
        <div class="columns">
          <div class="column is-one-third">
            <p className="has-text-centered">
              TODO: address <br/>
              {socialMediaItems.map((item) => (
                <a
                  key={item.iconName}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon is-large">
                    <i className={`fab ${item.iconName}`}></i>
                  </span>
                </a>
              ))}
            </p>
          </div>
          <div class="column is-one-third">
            <p className="has-text-centered">TODO: site search</p>
          </div>
          <div class="column is-one-third">
            <div className="container is-flex is-justify-content-center">
              <GatsbyImage
                alt="QMUL logo"
                image={data.qmullogo.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </footer>
    );

    return (
      <>
        {navBar}
        <main className="container">{props.children}</main>
        {footer}
      </>
    );
}

export default Layout