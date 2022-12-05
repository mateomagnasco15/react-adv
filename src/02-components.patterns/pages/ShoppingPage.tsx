import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../components';
import '../styles/custome-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();
  const arrayOfKeys = Object.keys(shoppingCart);

  return (
    <div>
        <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {products.map(product => (
        <ProductCard value={shoppingCart[product.id]?.count || 0}  onChange={onProductCountChange} key={product.id} product={product} className="bg-dark text-white">
         <ProductImg className="custome-img"/>
            <ProductTitle />
          <ProductButtons className = "custome-buttons"/>
       </ProductCard>
       ))}
      </div>
      <div className='shopping-cart'>
        {arrayOfKeys.map(key => {
          return (
            <ProductCard onChange={onProductCountChange} value={shoppingCart[key]?.count || 0} key={key} product={shoppingCart[key]} className="bg-dark text-white" style={{ width: "100px" }}>
               <ProductImg className="custome-img" />
               <ProductButtons className="custome-buttons" style={{ display: "flex", justifyContent: "center" }} />
            </ProductCard>)})
        }
      </div>
    </div>
  )
}

