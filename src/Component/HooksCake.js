import React,{useState} from 'react';
import { buyCake, buyIcecream } from '../redux/index';
import {useSelector,useDispatch} from 'react-redux';

function HooksCake() {
    const [number,setNumber] = useState(1);
    const noOfCake = useSelector(state=>state.cake.noOfCake);
    const noOfIcecream = useSelector(state=>state.icecream.noOfIcecream);
    const dispatch = useDispatch();
    return (
        <div>
            noOfCake - {noOfCake}
            <input type = 'text' value = {number} onChange = {(e)=>setNumber(e.target.value)} />
            <button onClick={()=>{dispatch(buyCake(number));}}>Buy {number} Cake</button>
            Number of IceCream - {noOfIcecream}
            <button  onClick={()=>{dispatch(buyIcecream());}}>Click</button>
        </div>
    )
}

export default HooksCake
