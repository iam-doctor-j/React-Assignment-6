import React from 'react';
import ProductsList from './ProductsList';
import { Link, Prompt } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProductActions from '../actions/ProductActions';

class AllProductsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.actions.initProducts();
    }

    render() {
        console.log(this.props);
        return(
            <div style={{ marginLeft: 10 }}>
                <Prompt message={params => params.pathname.includes("/products/") ? "Are you sure you want to view the details?" : true } />
                <h1>
                    Products List - Using Redux
                </h1>
                <ProductsList data={ this.props.users } />
                <p>
                    <Link to="/addProduct">Add Product</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        users: state.productsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);