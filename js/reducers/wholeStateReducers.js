export const aSecondInt = function(state) { 
    return Object.assign({
        aSecondInt: state.anInt * 2
    }, state);
}