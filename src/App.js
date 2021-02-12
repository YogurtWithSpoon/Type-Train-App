//react bootstrap components
import { Container, Row, Col } from "react-bootstrap";
//project components
import Header from "./components/Header/Header";
import TableScore from "./components/TableScore/TableScore";
import Type from "./components/Type/Type";

function App() {
  return (
    <Container mt={5} fluid="md">
      <Header />
      <Row>
        <Col sm={12} md={8}>
          <Type />
        </Col>
        <Col sm={12} md={4}>
          <TableScore />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
