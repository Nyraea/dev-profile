import './App.css';
import Avatar from './Avatar'
import Intro from './Intro'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
<Container>
  <Row>
    <Col xs={4}></Col>
    <Col xs={4}>
      <Card className='bg-gray rounded '>
        <Avatar/>
        <Intro />
      </Card>
    </Col>
    <Col xs = {4}></Col>
  </Row>
</Container>
  );
}

export default App;

