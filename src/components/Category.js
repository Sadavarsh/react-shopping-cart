import { useParams } from "react-router";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";


const Category = () => {
  const {id} = useParams();
  const {
    state: { products },
    productState: {  byStock, byDelivery, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products.filter((item) => item.categoryId === id)


    if (byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.delivery);
    }


    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
