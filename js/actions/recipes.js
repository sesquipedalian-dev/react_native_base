import * as types from './types';

export function changeInt(amount) { 
    return {
        type: types.CHANGE_INT,
        amount
    };
}

export function delayed(amount) { 
    return (dispatch, getState) => { 
        setTimeout(function() {
            dispatch({
                type: types.CHANGE_INT,
                amount
            });
        }, 5000);
    }
}