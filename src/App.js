import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const [userId, setUserId] = useState("");

  const getUserIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddUser id={userId} setUserId={setUserId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <UsersList getUserId={getUserIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
