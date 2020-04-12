import React,{useEffect} from 'react';
import {userFetch} from '../redux/index';
import {useSelector,useDispatch} from 'react-redux';

function User() {
    const data = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userFetch());
    },[]);
    return (
    data.loading?(<div>Loading</div>):(data.error)?(<div>{data.error}</div>):(data.user.map(user=><p key={user.name}>{user.name}</p>))
    )
}

export default User
