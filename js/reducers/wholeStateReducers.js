export const aSecondInt = function(state) { 
    return Object.assign({
        aSecondInt: state.anInt * 2
    }, state);
}

import {ActionConst} from 'react-native-router-flux';
export const scene = function(state, action) { 
    if(action.type === ActionConst.FOCUS) { 
        return { 
            ...state, 
            scene: action.scene
        };
    } else if (typeof(state.scene === 'undefined')) { 
        return { 
            scene: {}
        }
    } else { 
        return state;
    }
}