import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import TotalAmount from './TotalAmout';

class Cart extends Component<any>{

   
    handleRemove = (id : number)=>{
        this.props.removeItem(id);
    }
   
    handleAddQuantity = (id : number)=>{
        this.props.addQuantity(id);
    }
   
    handleSubtractQuantity = (id : number)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <div className="card product-card" key={item.id}>
                                    <div className="card-img-left"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="card-body">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}₹</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove d-flex my-3">
                                            <Link to="/cart"><i className="btn add-btn btn-add-cart mr-2" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                            <Link to="/cart"><i className="btn add-btn btn-add-cart" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </div>
                                        <button type="button" className="btn btn-add-cart" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </div>
                         
                    )
                })
            ):

             (
                <p>No items in the cart</p>
             )
       return(
        <div className="container py-4 mt-5">
                <div className="cart-warpper">
                <h3 className="text-left">Cart</h3>
                   
                        {addedItems}
                   
                </div> 
                <TotalAmount />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)