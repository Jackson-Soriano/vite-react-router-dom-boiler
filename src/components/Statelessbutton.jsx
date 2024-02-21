import {Button} from 'react-bootstrap';
const Statelessbutton = ({color, label, display, margin}) => {
  
        return (
        <Button variant={color} style={{
            display:{display},
            margin: `${margin}px`
        }}>
            {label}
        </Button>
    )
};

export default Statelessbutton;