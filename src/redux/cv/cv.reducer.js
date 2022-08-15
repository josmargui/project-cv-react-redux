import * as actions from './cv.actions'



const INITIAL_STATE = {educationProp: 0,};

const cvReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case actions.CLICK_EDUCATION: {
            //console.log(actions.CLICK_EDUCATION);
            return { ...state, educationProp: 1,};
        }
        case actions.CLICK_EXPERIENCE: {
            //console.log(actions.CLICK_EXPERIENCE);
            return { ...state, educationProp: 2,};
        }
        default:
            return state;
    }

};

export default cvReducer;