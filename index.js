const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

//buy ice cream action creator function
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}
//buy ice cream action creator function
const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,
    };
};
//initial state
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
};

const initialCakeState = {
    numOfCakes: 10,
};
const initialIceCreamState = {
    numOfIceCreams: 20,
};

//combined reducer

//reducer function
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1,
//             };
//         case BUY_ICE_CREAM:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1,
//             };
//         default:
//             return state;
//     }
// };

// separate reducer for cake
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        default:
            return state;
    }
};

//separate reducer for ice cream
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        default:
            return state;
    }
};

//combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
//store responsibilities
const store = createStore(rootReducer);
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() =>
    console.log("Updated State:", store.getState())
);
//dispatching action
store.dispatch(buyCake());
//we can also pass actions directly like this
store.dispatch({ type: BUY_CAKE });
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
