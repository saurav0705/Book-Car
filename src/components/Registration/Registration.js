import React, {  useState } from 'react';
import { connect } from 'react-redux';
import './Registration.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useHistory} from 'react-router-dom';
const Registration = (props) => {
    const [input,setInput] = useState({name:"",number:"",start:"",end:""});
    let history = useHistory();

    const handleChange = (event) => {
        let attribute = event.target.name;
        let obj = input;
        if(attribute === "number"){
            event.target.value = event.target.value.toString().replace("e","");
            if(input.number.length >= 10 ){return;}
        }
        input[attribute] = event.target.value;
        setInput({...obj})

    }
    const submit = () => {
        let filtered = Object.keys(input).filter(key =>{
            if(input[key].length === 0){
                return false ;
            }
            return true;
        })

        if(filtered.length === 0){
            return;
        }

        if(input.number.length !== 10){
            alert('number must be of length 10')
            return;
        }


        
        if(new Date(input.end) < new Date(input.start)){
            alert("start date can't be greater than end")
            return; 
        }
        
        props.confirm({...input,...props.data.book});
        history.push('/');

    }
    return (
        <div className="booking">
            <div className="heading">Booking Page</div>
            <div className="flex">
            <div className="tile right">
            <img className="image" src={props.data.book.image}/>
            <div className="car-name"> {props.data.book.car}</div>
            </div>
            <div className="left">
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input className="color" type="text" name="name" value={input.name} onChange={(event)=> handleChange(event)}/>
                    <div className="error"></div>
                </div>
                <div className="input">
                    <label htmlFor="number">Number</label>
                    <input className="color" type="number" name="number" value={input.number}   onChange={(event)=> handleChange(event)}/>
                    <div className="error"></div>
                </div>
                <div className="input">
                    <label htmlFor="start">start</label>
                    <div className="date">
                    <DatePicker
                        selected={input.start}
                        showTimeSelect
                        dateFormat="Pp"
                        onChange={(val) => handleChange({target:{name:"start",value:val}})}

                    /></div>
                    <div className="error"></div>
                </div>
                <div className="input">
                    <label htmlFor="end">end </label>
                    <div className="date">
                    <DatePicker
                        selected={input.end}
                        showTimeSelect
                        dateFormat="Pp"
                        onChange={(val) => handleChange({target:{name:"end",value:val}})}
                    />
                    </div>
                    <div className="error"></div>
                </div>
            </div>
            </div>
            <div className="button" onClick={() => submit()}>Confirm</div>      
        </div>
    );
};

const mapState = (state) => {
    return{
        data:state
    }
}
const mapDispatch =(dispatch) => {
    return{
        confirm:(data) => dispatch({type:'CONFIRMED',payload:data})
    }
}
export default connect(mapState,mapDispatch)(Registration);