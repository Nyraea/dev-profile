import './Avatar.css'
import avatar from "./1x1.jpg";
import Card from 'react-bootstrap/Card';
function Avatar(){
    return(
        <>
      <Card.Img variant="top" src={avatar}  />
        </>
    )
}

export default Avatar;