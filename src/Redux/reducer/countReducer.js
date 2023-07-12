export const countReducer=(state=0,action)=>{
    switch(action.type){
        case "INC":return state+1+action.payload;
        case "DEC":return state-1;
        default: return state;
    }
}


// useSelector   :-  to access the states in the store (reducer)
// useDispatch   :-  use the dispatch keyword