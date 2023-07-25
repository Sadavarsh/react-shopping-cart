import {  Col, Container, Row} from "react-bootstrap";
import categories from "../db/categories.json"
import { Link } from "react-router-dom";


const CategoryFilter = () => {
 

 

  return (
    <div className="filters">
      <span className="title">Categories</span>
      <Container>
      <Row>
        {categories.map(c => (
          <Link key={c.id}
          to={`/category/${c.id}`}>
          <Col
            className="text-dark mb-3 bg-white py-5 shadow-sm rounded-lg flex-fill text-center"
          >
            <h2 className="h3">{c.name}</h2>
            <div>{c.description}</div>
          </Col>
          </Link>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default CategoryFilter;
