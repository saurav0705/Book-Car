import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Bookings = (props) => {
    let history= useHistory();
    useEffect(()=>{console.log(props.data.confirmed)},[])
    const format = (date) => {
        let d= new Date(date);
        return d.toUTCString();
    }
    return (
        <div>
            <div className="button" onClick={()=> history.push('/')}>GO TO HOME</div>
            <div className="list">
                {props.data.confirmed.map((confirm,index) => {
                    return (
                        <div className="tile height" key={index}>
                     <img className="image" src={confirm.image}/>
                    <div className="car-name"> {confirm.car}</div>
                    <div>{confirm.name}</div>
                    <div>{confirm.number}</div>
                    <div>{format(confirm.start)}</div>
                    <div>{format(confirm.end)}</div>
                    {/* <div className="button" onClick={() => {props.book({"car":"car"+index,"image":"/cars/"+(parseInt(index)%5).toString()+".png"});history.push('/book')}}>BOOK NOW</div> */}
                     </div>
                    )
                })}
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {
        data:state
    }
};



export default connect(mapState)(Bookings);