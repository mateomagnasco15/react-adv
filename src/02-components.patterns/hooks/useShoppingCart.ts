import { useState } from "react";
import { ProductInCart, Product} from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingState => {
  
             if (count === 0) {
              const { [product.id]: toDelete, ...rest } = oldShoppingState;
              return rest
            }
            return {
              ...oldShoppingState,
              [product.id]: { ...product, count }
            } 
        })
       
    }
     return {
            shoppingCart,
            onProductCountChange
        }
}
