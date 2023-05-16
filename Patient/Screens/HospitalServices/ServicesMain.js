import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import ServicesDesc from './ServicesDesc';
import {action_GET_Services_Desc} from '../../Services/Actions/Services_Actions';
const ServicesMain = () => {
  const dispatch = useDispatch();
  const setservicesid = useSelector(
    (state) => state.Services_Reducers.setservicesid,
  );
  useEffect(() => {
    let mounted = true;
    const getservicedesc = () => {
      if(mounted) {
        dispatch(action_GET_Services_Desc(setservicesid));
      }
    };
    mounted && getservicedesc();
    return () => {
      mounted = false;
    };
  }, [dispatch,setservicesid]);
  return <ServicesDesc />;
};
export default ServicesMain;
