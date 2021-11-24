import {put, takeEvery, call} from "redux-saga/effects"
import { FETCH_LAUNCHES, setLaunchesPast, setLaunchesPresent } from "../store/launchesReducer"

const fetchPastLaunchesFromApi = () => fetch('https://api.spacexdata.com/v5/launches/past').catch(alert)
const fetchPresentLaunchesFromApi = () => fetch('https://api.spacexdata.com/v5/launches/upcoming').catch(alert)

function* fetchPastLaunchesWorker () {
    const data = yield call(fetchPastLaunchesFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setLaunchesPast(json))
}
function* fetchPresentLaunchesWorker () {
    const data = yield call(fetchPresentLaunchesFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setLaunchesPresent(json))
}

export function* pastLaunchesWatcher() {
    yield takeEvery(FETCH_LAUNCHES, fetchPastLaunchesWorker)
}
export function* presentLaunchesWatcher() {
    yield takeEvery(FETCH_LAUNCHES, fetchPresentLaunchesWorker)
}