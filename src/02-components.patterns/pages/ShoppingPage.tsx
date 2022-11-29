import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../components';

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
        <ProductCard product={product}>
          <ProductImg/>
          <ProductTitle/>
          <ProductButtons/>
          
        
        </ProductCard>
      </div>
    </div>
  )
}
