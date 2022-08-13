import * as actions from './cv.actions'



const INITIAL_STATE = {educationProp: false, nombre: 'Pepe1'};

const cvReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case actions.CLICK_EDUCATION: {
            console.log(actions.CLICK_EDUCATION);
            return { ...state, educationProp: true,};
        }
        default:
            return state;
    }

};

export default cvReducer;