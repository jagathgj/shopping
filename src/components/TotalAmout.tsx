import React, { Component } from 'react';
import { connect } from 'react-redux';
class TotalAmount extends Component<any>{
    
    componentWillUnmount() {
        var refValue = this.refs.shipping;
        var checkRef = refValue as HTMLInputElement;
         if(checkRef.checked) {
              this.props.substractShipping();
         }
    }

    handleChecked = (e : any)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="row">
                    <div className="card p-3 w-100">
                        <div className="input-group d-flex align-items-center">
                                    <input  id="productCheckbox" type="checkbox" ref="shipping" onChange= {this.handleChecked} aria-label="checkbox" />
                                
                                
                                <span className="flex-fill ml-3">Shipping to home address</span>
                        </div>
                        <div className="Total-price w-100 mt-3 border-top py-3"><b>Total: {this.props.total} ₹</b></div>
                        </div>
                        
                    </div>
                    <div className="checkout my-3 ">
                        <button className="btn btn-add-cart">Checkout</button>
                    </div>
                 </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(TotalAmount)