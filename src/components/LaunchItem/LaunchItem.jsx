import React from 'react';
import { useNavigate } from 'react-router-dom';


const LaunchItem = ({ listItem, fullLaunchesList, item, addfullLaunchesList, addCurrentlistItem, addList, currentlist, currentlistItem }) => {

    const router = useNavigate()

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className === "launchItem") {
            e.target.style.boxShadow = "0 4px 3px gray"
        }
    }
    function dragLeaveHandler(e) {
        e.target.style.boxShadow = "none"
    }
    function dragStartHandler(e, listItem, item) {
        addList(listItem)
        addCurrentlistItem(item)
    }
    function dragEndHandler(e) {
        e.target.style.boxShadow = "none"
    }
    function dropHandler(e, listItem, item) {
        e.preventDefault()
        const currentIndex = currentlist.list.indexOf(currentlistItem);
        currentlist.list.splice(currentIndex, 1)
        const dropIndex = listItem.list.indexOf(item);
        listItem.list.splice(dropIndex + 1, 0, currentlistItem)
        if (listItem.id === 3) {
            alert("SUCCESS")
        }
        const newFullList = fullLaunchesList.map(b => {
            if (b.id === listItem.id) {
                return listItem
            }
            if (b.id === currentlist.id) {
                return currentlist
            }
            return b
        })
        addfullLaunchesList(newFullList)
        e.target.style.boxShadow = "none"
        e.stopPropagation()
    }


    return (
        <>
            <div onClick={() => router(`/${item.id}`, { replace: true })}
                onDragOver={e => dragOverHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={e => dragStartHandler(e, listItem, item)}
                onDragEnd={e => dragEndHandler(e)}
                onDrop={e => dropHandler(e, listItem, item)}
                draggable={listItem.draggable}
                className="launchItem">
                <h3>{item.name}</h3>
                <p>{item.details}</p>
            </div>
        </>
    )
}

export default LaunchItem