const defaultState = () => {
    if (localStorage.getItem('data')) return JSON.parse(localStorage.getItem('data'));
    return {book:"",confirmed:[]};
}

export const reducer = (state=defaultState(),action) => {
    switch(action.type){
        case 'BOOK' : {
            let obj = state;
            console.log('triggered');
            obj['book'] = action.payload;
            console.log(obj);
            localStorage.setItem('data',JSON.stringify(obj));
            return {...state,...obj}
        }
        case 'CONFIRMED':{
            console.log(action.payload)
            let obj = state;
            obj['confirmed'] = [...obj['confirmed'],action.payload]
            console.log(obj);
            localStorage.setItem('data',JSON.stringify(obj));
            return {...obj}

        }
        default : return state
    }
}