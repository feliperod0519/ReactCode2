//Step 3: Create a reducer
export const myReducer = (state,action) => {
    switch (action.type){
        case 'SET_NAME':
            return { name : action.name };
        default:
            return state;
    }
}
