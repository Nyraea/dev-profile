import { CardBody } from 'react-bootstrap';
import './Intro.css'
import Card from 'react-bootstrap/Card'

function Intro(){
    return (
<>
  <Card.Body className='px-2'>
    <Card.Title className='text-center text-light'><b>MARK JEARALD S. AGRAVIADOR</b></Card.Title>
    <Card.Text className='text-center text-light'>
    <i><b><u>Front-end web developer</u></b> and a <b><u>student</u></b> at the University of Santo Tomas. Currently expanding my knowledge of front-end frameworks using React and Vue and Angular. </i>
    </Card.Text>
    <Card className='w-50 h-5 mx-auto my-1 border-0'>
        <Card.Body className='bg-primary rounded text-light'>⚛️ <b>React</b></Card.Body>
    </Card>
    <Card className='w-50 h-5 mx-auto my-1 border-0'>
        <Card.Body className='bg-success rounded text-light'>🔰 <b>Vue</b></Card.Body>
    </Card>
    <Card className='w-50 h-5 mx-auto my-1 border-0'>
        <Card.Body className='bg-danger rounded text-light'>🅰️ <b>Angular</b></Card.Body>
    </Card>
  </Card.Body>
  
</>
    )
}

export default Intro;