import React from 'react'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
    const {
        state: { products },
        productState: {   searchQuery },
      } = CartState();

      const transformProducts = () => {
        let sortedProducts = products;

        if (searchQuery) {
          sortedProducts = sortedProducts.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
          );
        }
    
        return sortedProducts;
      };

  return (
    <div className="home">
    <CategoryFilter />
    <div className="productContainer">
      {transformProducts().map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  </div>
  )
}

export default Home