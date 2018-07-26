import React ,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 20,
    bacon : 35,
    meat : 30,
    cheese : 15
}
class BurgerBuilder extends Component{
    

    state = {
        ingredients:{
            salad:0,
            meat:0,
            cheese:0,
            bacon:0
        },
        totalPrice: 30,
        purchasable: false,
        purchasing : false
    }    

    purchaseHandle = (price) => {
        let newPurchasableState ;
        if(price === 30)
        {
            newPurchasableState= false;
        }
        else{
            newPurchasableState= true;
        }
        this.setState({purchasable : newPurchasableState});

    }
    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.purchaseHandle(newPrice);
    }

    removeIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0)
        {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeletion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeletion;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.purchaseHandle(newPrice);   
    }
    
    modalShowHandle = () => {
        this.setState({purchasing:true});
    }

    modalHideHandle = () => {
        this.setState({purchasing:false});
    }

    purchaseContinue = () => {
        alert("Continued");
    }

    render(){

       let  disableInfo ={
            ...this.state.ingredients
        };

        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.modalHideHandle}> 
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseContinue={this.purchaseContinue}
                    purchaseCancel ={this.modalHideHandle}
                    price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls  
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved ={this.removeIngredientHandle}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.modalShowHandle}
              />
            </Aux>   

        );
    }

}

export default BurgerBuilder;