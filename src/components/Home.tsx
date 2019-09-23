import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component<any>{
    
    handleClick = (id : number)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card product-card flex-fill" key={item.id}>
                        <div className="card-img-left">
                            <img src={item.img} alt={item.title}/>
                        </div>

                        <div className="card-body">
                            <span className="card-title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} ₹</b></p>
                            <button type="button" className="btn btn-add-cart" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">Add to cart</i></button>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container py-4">
                <h3 className="text-left">Products</h3>
                <div className="d-flex flex-wrap">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state : any)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch : any)=>{
    
    return{
        addToCart: (id : number)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)