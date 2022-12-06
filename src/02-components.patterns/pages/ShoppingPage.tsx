import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../components';
import '../styles/custome-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4, 
          maxCount: 10
        }}
      >
        {
          ({reset, isCountMaxReached}) => (
            <>
              <ProductImg className="custome-img"/>
              <ProductTitle />
              <ProductButtons className = "custome-buttons"/>
              
              <button onClick={reset}>Reset</button>
              {isCountMaxReached && <p>Es el limite</p>}
              <button>-2</button>
              <button>+2</button>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}

export default ShoppingPage;