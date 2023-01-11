const redux = require("redux");
const createStore = redux.createStore;

const produce = require("immer").produce;
//initial state
const initialState = {
    name: "Nazmul Rony",
    address: {
        street: "Block C- Road 5",
        Area: "Mirpur -2",
        city: "Dhaka",
    },
};

//constants
const UPDATE_STATE = "UPDATE_STATE";

//action creator
const updateStreet = (street) => {
    return {
        type: UPDATE_STATE,
        payload: street,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // };
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState());
});

store.dispatch(updateStreet("Rainkhola Road"));

unsubscribe();
