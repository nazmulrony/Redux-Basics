const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

//action creator function
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

//initial state
const initialState = {
    numOfCakes: 10,
};
//reducer function
const reducer = (state = initialState, action) => {
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

//store responsibilities
const store = createStore(reducer);
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() =>
    console.log("Updated State:", store.getState())
);
//dispatching action
store.dispatch(buyCake());
//we can also pass actions directly like this
store.dispatch({ type: BUY_CAKE });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
