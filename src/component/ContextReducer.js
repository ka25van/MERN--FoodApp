import React, {useReducer, useContext, createContext} from 'react'

const CartStateContext = createContext();
const CartDispatchContext= createContext();

const reducer =(state, action) =>{}

//children means all the child inside this file
export const CartProvider = ({children}) =>{
     const[state,dispatch] = useReducer(reducer,[])
    
    return(

        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
            </CartDispatchContext.Provider>
    
    )
}

export const useCart=()=> useContext(CartStateContext)
export const useDispatch =()=> useContext(CartDispatchContext )