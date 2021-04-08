import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { LinkContainer } from "react-router-bootstrap";

interface NavLinkType {
  id: number;
  label: string;
  route: string;
}

const linkItems: NavLinkType[] = [
  { id: 1, label: "Home", route: "/" },
  { id: 2, label: "Watchlist", route: "/watchlist" },
  { id: 3, label: "About", route: "/about" },
];

const MyNavbar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">MovieDB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {linkItems.map((item) => (
            <LinkContainer to={item.route} key={item.id}>
              <Nav.Link>{item.label}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
