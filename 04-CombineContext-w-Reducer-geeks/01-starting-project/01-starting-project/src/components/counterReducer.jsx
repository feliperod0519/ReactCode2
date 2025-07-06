// Step 2: Define a reducer function

export const counterReducer = (state,action) => {
    switch (action.type){
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        default:
            throw Error('unsupported operation');
    }
}