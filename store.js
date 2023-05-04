

const  addItem = () =>{
     const nameField = document.getElementById('product-name')
    const nameValue = nameField.value 

    if(!nameValue){
        return
    }

    // add to local storage//
    addToCard(nameValue)

    //  clear 
    nameField.value= ' '
}

const getCart  = () =>{
    const  cart  = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.Parse(cart)
    }
    else {
        cartObj = {}
    }
}

const addToCard = name  =>{
    console.log ( typeof (name));
    const  cart  = getCart()
    if(cart[name]){
        cart([name]) = cart[name] + 1
    }
    else{
        cart[name] = 1
    }

    // const  cartStringfied = JSON.stringify(cart);
    // localStorage.setItem('cart' , cartStringfied )
}



