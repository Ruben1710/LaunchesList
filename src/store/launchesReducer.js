const defaultState = {
    past: [],
    present: [],
    my: []
}

export const SET_LAUNCHES_PAST = "SET_LAUNCHES_PAST"
export const SET_LAUNCHES_PRESENT = "SET_LAUNCHES_PRESENT"
export const FETCH_LAUNCHES = "FETCH_LAUNCHES"


export default function launchesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LAUNCHES_PAST:
            return { ...state, past: action.payload }
        case SET_LAUNCHES_PRESENT:
            return { ...state, present: action.payload }
        default:
    }
    return state
}

export const setLaunchesPast = payload => ({ type: SET_LAUNCHES_PAST, payload })
export const setLaunchesPresent = payload => ({ type: SET_LAUNCHES_PRESENT, payload })
export const fetchLaunches = () => ({ type: FETCH_LAUNCHES })