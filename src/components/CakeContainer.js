import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = (props) => {
    return ( 
        <div>
            <h2>number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
     );
}


// 1.state
// 2.setState
// 3.connect => redux => react

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);