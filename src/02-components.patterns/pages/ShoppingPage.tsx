import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../components';
import '../styles/custome-styles.css';

const product = {
  id: "1",
  title: "Coffee-mug",
  img: "./coffee-mug.png"
};


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImg className="custome-img"/>
          <ProductTitle />
          <ProductButtons className = "custome-buttons"/>
        </ProductCard>
        <ProductCard product={product} style={{backgroundColor : "red"}}>
          <ProductImg />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
