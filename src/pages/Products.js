import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/thailand">A Trip To Thailand</Link>
        </li>
        <li>
          <Link to="/products/philippines">A Trip To Philippines</Link>
        </li>
        <li>
          <Link to="/products/brazil">A Trip To Brazil</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
