import React, {createContext, useReducer,useContext } from 'react'

const cartstatecontext=createContext();
const cartdispatchcontext=createContext();
const reducer=(state,action)=>{
switch(action.type){
    case 'ADD_TO_CART':
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}];
        default:
            console.log("error in dispatch");
}
}
export const Cartprovider =({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);
    return (
             <cartdispatchcontext.Provider value={dispatch}>
                <cartstatecontext.Provider value={state}>
                    {children}
                </cartstatecontext.Provider>
             </cartdispatchcontext.Provider>
        );
}

export const useCart=()=>useContext(cartstatecontext);
export const useDispatchCart=()=>useContext(cartdispatchcontext);