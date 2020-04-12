import React,{useState} from 'react';
import { buyCake, buyIcecream } from '../redux/index';
import { connect } from 'react-redux';

function Cake(props) {
    const [number,setNumber] = useState(1);
    return (
        <div>
            Number of cakes - {props.noOfCake}
            <input type = 'text' value = {number} onChange = {(e)=>setNumber(e.target.value)} />
            <button onClick = {()=>props.buyCake(number)}>Buy {number} Cake</button>
            Number of IceCream - {props.noOfIcecream}
            <button onClick = {props.buyIcecream}>Click</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCake: state.cake.noOfCake,
        noOfIcecream: state.icecream.noOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: number => dispatch(buyCake(number)),
        buyIcecream: ()=>dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake);
