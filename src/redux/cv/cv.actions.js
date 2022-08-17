export const CLICK_EDUCATION ='CLICK_EDUCATION';
export const CLICK_EXPERIENCE ='CLICK_EXPERIENCE';
export const CLICK_SOFTWARE ='CLICK_SOFTWARE';




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

export const clickSoftware = () => (dispatch) => {
    dispatch({
        type: CLICK_SOFTWARE,
    });
}