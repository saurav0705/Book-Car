import React from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const LandingPage = (props) => {
    let history = useHistory();
    return (
        <div className="landing-page">
            <div className="bookings" onClick={()=> history.push('/bookings')}>your bookings</div>
            <div className="heading">
                Book Your Car
            </div>
            <div className="grid">
                {Array(21).fill("car").map((data,index) =>
                 (<div className="tile" key={index}>
                     <img className="image" src={"/cars/"+(parseInt(index)%5).toString()+".png"}/>
                    <div className="car-name"> {data+index}</div>
                    <div className="button" onClick={() => {props.book({"car":"car"+index,"image":"/cars/"+(parseInt(index)%5).toString()+".png"});history.push('/book')}}>BOOK NOW</div>
                     </div>))}
            </div>
            
        </div>
    );
};


const mapState = (state) => {
    return {
        data:state
    }
};

const mapDispath = (dispatch) => {
    return{
        book:(data) => dispatch({type:'BOOK',payload:data}),
        confirm:(data) => dispatch({type:'CONFIRMED',payload:data})
    }
}
export default connect(mapState,mapDispath)(LandingPage);