const defaultStateaaa = {
    fullLaunches: [
        { id: 1, listTitle: 'past Launches', draggable: "false" },
        { id: 2, listTitle: 'Launches', draggable: "true" },
        { id: 3, listTitle: 'My Launches', draggable: "true" },
    ]
}

const SET_LAUNCHES_LIST = "SET_LAUNCHES_LIST"
const SET_FULL_LIST = "SET_FULL_LIST"


export default function fullLaunchesReducer(state = defaultStateaaa, action) {
    switch (action.type) {
        case SET_LAUNCHES_LIST:
            return { ...state, fullLaunches: state.fullLaunches.filter(item => (item.id === action.payload.id) ? (item.list = action.payload.list) : item) }
        case SET_FULL_LIST:
            console.log(action.payload)
            return { ...state, fullLaunches: [...action.payload] }
        default:
    }
    return state
}

export const fullLaunchesListAction = payload => ({ type: SET_LAUNCHES_LIST, payload })
export const fullBoardsAction = payload => ({ type: SET_FULL_LIST, payload })


