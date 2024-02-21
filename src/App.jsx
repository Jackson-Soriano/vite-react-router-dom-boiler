import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Httpasynawait from './components/Httpasynawait';
import { Container } from 'react-bootstrap';
import Cardmap from './components/Cardmap';
const App = () => {
    return (
        <>
            <Navibar/>
            <Container style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                <Httpasynawait/>
                {/* <Cardmap /> */}
            </Container>
        </> 
    );
};
export default App;

