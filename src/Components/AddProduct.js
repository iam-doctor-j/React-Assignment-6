import React from 'react';
import FormikAddProductForm from './AddProductForm';
import { connect } from 'react-redux';
import * as ProductActions from '../actions/ProductActions';
import { bindActionCreators } from 'redux';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this._navigate = this._navigate.bind(this);
        this.history = props.history;
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this._navigate();
        }
    }

    _navigate() {
        this.history.push('/products');
        
    }

    render() {
        console.log(this.props);
        return(
            <>
                <h1>Add product - Using Redux</h1>
                <FormikAddProductForm addProduct={ this.props.actions.addProduct }/>
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        user: state.productsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (AddProduct);