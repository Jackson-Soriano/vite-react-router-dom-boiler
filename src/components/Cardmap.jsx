import {Card} from 'react-bootstrap';
// import swimming from './images/a_swimming.jpg';
// import hopping from './images/a_hopping.jpg';
import Statelessbutton from './Statelessbutton';
import {useState} from 'react';

const Cardmap=()=> {
    // use initial state 
    const [activities, setActivities] = useState([
        {   
            id:1,
            icon: 'a_swimming.jpg',
            title: "Swimming Activity",
            description:"Swimming, in recreation and sports, the propulsion of the body through water ..."
        },
        {
            id:2,
            icon: 'a_hopping.jpg',
            title: "Island Hopping",
            description:"Island Hopping, n recreation and sports, the propulsion of the body..."
        },
        {
            id:3,
            icon: 'a_swimming.jpg',
            title: "Swimming Activity",
            description:"Swimming, in recreation and sports, the propulsion of the body through water ..."
        },
        

    ]);
         
  return (
    <>
    {activities.map((activity)=>{
        return (
            <Card key={activity.id} style={{ width: '18rem', display:'flex', flexDirection:'column', padding:5, margin:5 }} >
                {/* {console.log(activity)} */}
            <Card.Img style={{height:200}} variant="top" src={`/assets/images/${activity.icon}`}/>
            <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text style={{height:100}} >{activity.description}</Card.Text>
                <Statelessbutton color="primary" label={activity.title} display="inline-block" margin={10}/> 
            </Card.Body>
            </Card>
        );
    })}
   
    </>
    
  );
} 

export default Cardmap;