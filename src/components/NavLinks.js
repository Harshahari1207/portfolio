import {Link} from 'react-scroll'

export const NavLinks = () =>{
    return(
        <div className="navLinks">
        <ul>
          <li className="navAbout">
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className="navProjects">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>Projects</Link>
          </li>
          <li className="navSkills">
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
          </li>
          <li className="navContact">
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    )
}