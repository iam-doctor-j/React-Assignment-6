import React from 'react';
import { Link } from 'react-router-dom';
import * as ProductActions from '../actions/ProductActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.actions.getProduct(this.props.match.params.id);
    }

    render() {
        return(
            <>
                <h1>Product Details</h1>
                <p>
                    <strong>Product Name: </strong> { this.props.product.productName }
                </p>
                <Link to="/products">Back</Link>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        product: state.productReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductDetails);