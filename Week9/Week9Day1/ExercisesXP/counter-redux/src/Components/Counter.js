import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../redux/actions';


class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { count } = this.props;
        return (
            <>
                <button onClick={this.props.increase}>+</button>
                {count}
                <button onClick={this.props.decrease}>-</button>
            </>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increaseCount()),
        decrease: () => dispatch(decreaseCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// export default connect(mapStateToProps)(Counter);

