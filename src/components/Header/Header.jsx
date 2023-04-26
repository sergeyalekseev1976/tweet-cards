import { Header, Nav, Link } from "./Header.styled";

const header = () => {
  return (
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </Header>
  );
};

export default header;
