let cart=[];

export const handleCart =(state = cart, action)=>{
     const product=action.payload;
     switch (action.type) {
         case "ADDITEM":
             //if exist
            //  console.log(state,state.length);
            //  const exist=cart.findIndex((x)=> x.id === product.id);
             const exist=state.find((x)=> x.id === product.id);
             
             if(exist){
                //  console.log("inside exist if");
                //  console.log(product.id);
                //  let k=Object.keys(state)[0];
                //  console.log(state[k]);
                 return state.map((x)=>{
                //  console.log(x.qty);
                 return x.id === product.id ? {...x, qty: x.qty +1} : x});

             }
             else{
                 const product = action.payload;
                
                //  cart=[
                //      ...cart,
                //      {
                //          ...product,
                //          qty: 1,
                //      }
                //  ]
                //  return cart;
                 return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ];

             }
             break;
        case "DELITEM":
            const exist1=cart.find((x)=> x.id === product.id );
            if (exist1.qty === 1){
                return cart.filter((x)=> x.id != exist1.id);
            }
            else{
                return cart.map((x)=>
                   x.id === product.id ? {...x, qty:x.qty-1}:x
                );
            }
            break;
        default:
             return cart;
             break;    
     }
}

// export default handleCart;