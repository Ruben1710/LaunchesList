import {all} from "redux-saga/effects"
import { pastLaunchesWatcher, presentLaunchesWatcher } from "./launchesSaga"

export function* rootWatcher() {
    yield all([pastLaunchesWatcher(),presentLaunchesWatcher()])
}