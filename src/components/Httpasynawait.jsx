import {useEffect, useState} from 'react';
import axios from 'axios';
const Httpasynawait = () => {
//initialize the card/api data
    const [cardInfo, setCardInfo] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });
    //get the api url
    const apiReqURL = "https://dummyjson.com/products/1";
    //perform asynchronous async/await inside useEffect
    useEffect(()=>{
        //http request using axios
        const fetchData= async ()=>{
            const response = await axios.get(apiReqURL);
            //console.log(response.data);
            setCardInfo({
                title : response.data.title,
                description : response.data.description,
                price : response.data.price,
                image : response.data.images[1]
            });
        };
        fetchData();
    }, [cardInfo]);
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={cardInfo.image} className="card-img-top" alt="..."/>
            {/* <img src={`/assets/images/${cardInfo.price}.jpg`} className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">{cardInfo.title}</h5>
                <p className="card-text">{cardInfo.description}</p>
                <h5 className="card-text">$ {cardInfo.price}</h5>
                <button className="btn btn-primary">ADD to Cart</button>
            </div>
        </div>
    )
}

export default Httpasynawait