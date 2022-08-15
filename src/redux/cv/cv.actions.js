export const CLICK_EDUCATION ='CLICK_EDUCATION';
export const CLICK_EXPERIENCE ='CLICK_EXPERIENCE';



export const clickEducation = () => (dispatch) => {
    dispatch({
        type: CLICK_EDUCATION,
    });
}

export const clickExperience = () => (dispatch) => {
    dispatch({
        type: CLICK_EXPERIENCE,
    });
}