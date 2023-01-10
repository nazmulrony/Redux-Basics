//initial state
const initialState = {
    loading: false,
    data: [],
    error: "",
};

//constants
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creator functions
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: "",
            };

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
    }
};
