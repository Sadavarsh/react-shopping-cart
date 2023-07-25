import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";


const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byDelivery},
  } = CartState();

 

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
  
    
      <span>
        <Form.Check
          inline
          label="In Stock Only"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Delivery"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byDelivery}
        />
      </span>
    
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
