//react bootstrap components
import { Container, Row, Col } from "react-bootstrap";
//project components
import Header from "./components/Header/Header";
import TableScore from "./components/TableScore/TableScore";
import Type from "./components/Type/Type";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const styles = {background: theme ? '#5c5959' : '#ffffff', color: theme ? '#ffffff' : 'black' }
  return (
    <div className="body vh-100 vw-100" style={styles}>
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
    </div>
  );
}

export default App;
