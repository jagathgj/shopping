import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Navbar extends Component<any, any>{
    render() {
        return (

            
            <React.Fragment>

                <nav className="d-flex align-items-center fixed-top">
                    <div className="container nav-container d-flex align-items-center justify-content-between">
                        <Link to="/" className="brand-logo navbar-brand nav-link">Shopping</Link>

                        <ul className="nav-menu-list-wrapper d-flex align-items-center">
                            <li className="left-menu-list"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="left-menu-list"><Link className="nav-link" to="/cart" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">{this.props.addedItems.length}</span></Link></li>
                        </ul>
                        
                    </div>
                </nav>

            </React.Fragment>

        )
    }
}


const mapStateToProps = (state : any)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch : any)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)