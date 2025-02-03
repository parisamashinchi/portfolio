import Nav from "react-bootstrap/Nav";

export const NavLink = (props) => {
    return (
      <Nav.Link
        href={props.href}
        target={props.target}
        rel={props.rel}
      >
        <span className={`nav-item lead ${props.className}`}>
          {props.children}
        </span>
      </Nav.Link>
    );
  }
  