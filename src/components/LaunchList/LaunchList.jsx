import React from 'react';
import LaunchItem from './../LaunchItem/LaunchItem';
import './../../styles/Launches.css'
import { Skeleton } from 'antd';



const LaunchList = (props) => {

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className === "launchItem") {
            e.target.style.boxShadow = "0 4px 3px gray"
        }
    }


    function dropCardHandler(e, list) {
        list.list.push(props.currentlistItem)
        console.log("listlistlist",)
        const currentIndex = props.currentlist.list.indexOf(props.currentlistItem);
        props.currentlist.list.splice(currentIndex, 1)
        if (props.currentlist.id === 2) {
            alert("SUCCESS")
        }
        const newFullList = props.fullLaunchesList.map(b => {
            if (b.id === list.id) {
                return list
            }
            if (b.id === props.currentlist.id) {
                return props.currentlist
            }
            return b
        })
        props.addfullLaunchesList(newFullList)
        e.stopPropagation()
        e.target.style.boxShadow = "none"
    }

    return (
        <div className="LaunchList">
            <h2>{props.listItem.listTitle}</h2>
            <div
                className="LaunchList__item"
                onDragOver={e => dragOverHandler(e)}
                onDrop={e => dropCardHandler(e, props.listItem)}
            >
                {props.listItem.list === undefined && <Skeleton active loading={true}></Skeleton>}
                {props.listItem.list?.length === 0
                    ? <h2 style={{ color: "#000" }}>Not Launches</h2>
                    : props.listItem.list?.map(item => <LaunchItem key={item.id} listItem={props.listItem} fullLaunchesList={props.fullLaunchesList} item={item} addfullLaunchesList={props.addfullLaunchesList} addCurrentlistItem={props.addCurrentlistItem} addList={props.addList} currentlist={props.currentlist} currentlistItem={props.currentlistItem} />)}
            </div>
        </div>
    )
}

export default LaunchList