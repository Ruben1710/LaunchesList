import React, { useState, useEffect } from 'react';
import glob from './../img/glob.png';
import LaunchList from '../components/LaunchList/LaunchList'
import { useFetching } from './../hooks/useFetching';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from './../store/launchesReducer';
import { fullBoardsAction, fullLaunchesListAction } from './../store/fullLaunchesReducer';


function Explore() {

  const dispatch = useDispatch()
  const [fetchLaunchList, loading, error] = useFetching(async () => {
    await dispatch(fetchLaunches());
  })
console.log(loading,error)
  useEffect(() => {
    fetchLaunchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchLaunchesList = useSelector(state => state.launchesReducer)
  useEffect(() => {
    dispatch(fullLaunchesListAction({ id: 1, list: fetchLaunchesList.past }));
    dispatch(fullLaunchesListAction({ id: 2, list: fetchLaunchesList.present }));
    dispatch(fullLaunchesListAction({ id: 3, list: fetchLaunchesList.my }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchLaunchesList]) 

  const fullLaunchesList = useSelector(state => state.fullLaunchesReducer.fullLaunches)
  const [currentlist, setCurrentlist] = useState(null);
  const [currentlistItem, setCurrentlistItem] = useState(null);

  const addList = (list) => {
    setCurrentlist(list)
  }

  const addCurrentlistItem = (listItem) => {
    setCurrentlistItem(listItem)
  }

  const addfullLaunchesList = (fullLaunchesList) => {
    dispatch(fullBoardsAction(fullLaunchesList))
  }

  return (
    <div className="Explore">
      <h1 className="title">Explore the space <img src={glob} alt="" /></h1>
      <div className="wrapper">
        {fullLaunchesList?.map(listItem => <LaunchList key={listItem.id} listItem={listItem} fullLaunchesList={fullLaunchesList} addfullLaunchesList={addfullLaunchesList} addCurrentlistItem={addCurrentlistItem} addList={addList} currentlist={currentlist} currentlistItem={currentlistItem} />)}
      </div>
    </div>
  );
}

export default Explore;




