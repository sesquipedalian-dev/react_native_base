import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const anInt = createReducer(0, { 
    [types.CHANGE_INT](state, action) { 
        return state + action.amount;
    }
});
