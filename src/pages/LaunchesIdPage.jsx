import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import './../styles/LaunchesIdPage.css'

function LaunchesIdPage() {

    const params = useParams()
    const fullLaunchesList = useSelector(state => state.fullLaunchesReducer.fullLaunches)

    const GetLaunchesIdItem = (list) => {
        let elem = []
        list.forEach(element => {
            elem.push(element.list.filter(i => i.id === params.id))
        });
        let newElem = elem.filter(i => i.length !== 0)
        return newElem[0][0]
    }
    let LaunchesIdPageObj = GetLaunchesIdItem(fullLaunchesList)
    return (
        <div className="LaunchesIdPage">
            <MyButton>
                <Link to="/">Back to list</Link>
            </MyButton>
            <ul>
                <li>Name: {LaunchesIdPageObj.name}</li>
                <li>Auto_update: {LaunchesIdPageObj.auto_update}</li>
                <li>Flight_number: {LaunchesIdPageObj.flight_number}</li>
                <li>Date_utc: {LaunchesIdPageObj.date_utc}</li>
                <li>Date_unix: {LaunchesIdPageObj.date_unix}</li>
                <li>Date_local: {LaunchesIdPageObj.date_local}</li>
                <li>Date_precision: {LaunchesIdPageObj.date_precision}</li>
            </ul>
        </div>
    )
}

export default LaunchesIdPage
