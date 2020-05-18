//reducer

const initialStates = {
    firstName : '',
    lastName : '',
    userName : '',
    email : '',
    picture : ''
};

const ADD_USER = 'ADD_USER';

//reducer initial_states are immutable by principle.
//As a consequence we use 'Object.assign' for returning a new object taking properties from multiple sources rather than modifying the immutable one.

const userStateReducer = (state = initialStates, action) => {
    if (action.type === ADD_USER)  {
        return (Object.assign({}, state, action.payload));
    }
};


export default userStateReducer;