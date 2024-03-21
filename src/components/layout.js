import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import {startCase, camelCase} from 'lodash';

const navItems = [
    {name: "Research", link: "/research"},
    {name: "People", link: "/people"},
    {name: "News & Events", link: "/news"},
    {name: "Partners", link: "/partners"},
    {name: "Get Involved", link: "/get-involved"},
]

const socialMediaItems = [
  {
    iconName: "fa-twitter",
    link: "https://twitter.com/c4dm",
  },
  {
    iconName: "fa-youtube",
    link: "https://www.youtube.com/@C4DM",
  },
];


const Layout = ({children, crumbs, name, hero}) => {
    const data = useStaticQuery(graphql`
    {
    c4dmlogo: file(absolutePath: {regex: "/images/.*c4dmwhite.*/"}, extension: {eq: "png"}) {
      id
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 30)
        }
      }
    qmullogo: file(absolutePath: {regex: "/images/.*QMUL_logo_old_blue.*/"}, extension: {eq: "png"}) {
      id
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 50)
        }
      }
    }
    `);

    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const navBar = (
      <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
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
            <React.Fragment key={`navbar-unit-${item.name}`}>
              <Link className="navbar-item" to={item.link}>
                {item.name}
              </Link>
              <span className="navitem-divider"></span>
            </React.Fragment>
          ))}
        </div>
      </nav>
    );

    const footer = (
      <footer className="footer">
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <p className="has-text-left is-size-7">
              School of Electronic Engineering and Computer Science <br/> 
              Queen Mary University of London <br/>
              Mile End Road <br/>
              London <br/>
              E1 4NS <br/>
              United Kingdom <br/>
              <br/>

              <a
                  href="https://github.com/c4dm/c4dm-website"
                  target="_blank"
                  rel="Internal Site Link"
                >Internal Site</a>
              {/* Tel: +44 (0)20 7882 3400 <br/>
              Undergraduate Enquiries:  Tel: +44 (0)20 7882 7332 <br/>
              Postgraduate Enquiries:  Tel: +44 (0)20 7882 7333  */}

            </p>
          </div>
          <div className="column is-one-third">
            <p className="has-text-centered is-size-3">
              {socialMediaItems.map((item) => (
                <a
                  key={item.iconName}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon is-large">
                    <i className={`fab ${item.iconName} is-`}></i>
                  </span>
                </a>
              ))}</p>
          </div>
          <div className="column is-one-third">
            <div className="container is-flex is-justify-content-right">
              <GatsbyImage
                alt="QMUL logo"
                image={data.qmullogo.childImageSharp.gatsbyImageData}
              />
            </div>
            <p className="has-text-right is-size-7">
              <br/>
              © Queen Mary University of London.
              </p>
          </div>
        </div>
      </footer>
    );

    return (
      <>
          {navBar}
          {hero}
          {/* Breadcrumbs and children*/}
          <main className="container is-fullhd">
            {/* <div classname="container">
              {crumbs ? (
                <nav
                  className="is-subtitle breadcrumb is-7 is-left"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    {crumbs.map((crumb, index) =>
                      crumb.crumbLabel == "tags" ? (
                        //if we have a tag filter on, ignore that link
                        <li className="is-active">
                          {" "}
                          <a href={crumb.pathname} aria-current="page">
                            {" "}
                            {" " + startCase(camelCase(crumb.crumbLabel)) + " "}
                          </a>
                        </li>
                      ) : crumb.crumbLabel == "role" ? (
                        //if we have a role filter on, ignore that link
                        <li className="is-active">
                          <a href={crumb.pathname} aria-current="page">
                            {" " + startCase(camelCase(crumb.crumbLabel)) + " "}
                          </a>
                        </li>
                      ) : index == crumbs.length - 1 ? (
                        // similarly ignore the link to our current page
                        // comment out the below line to remove current page from breadcrumb
                        <li className="is-active">
                          <a href={crumb.pathname} aria-current="page">
                            {startCase(camelCase(crumb.crumbLabel))}
                          </a>
                        </li>
                      ) : (
                        <li>
                          <a href={crumb.pathname}>
                            {startCase(camelCase(crumb.crumbLabel))}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              ) : (
                console.log("Page has no breadcrumbs *gasp*")
              )}
            </div> */}
            {children}
          </main>
          {footer}
      </>
    );
}

export default Layout