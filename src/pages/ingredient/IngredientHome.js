import React, { useState, useEffect } from "react";
import { getIngredient } from "../../functions/ingredient";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import IngredientList from "../../components/ingredient/IngredientList";

const IngredientHome = ({ match }) => {
  const [ingredient, setIngredient] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getIngredient(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setIngredient(res.data.ingredient);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-2 mb-2 display-7 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4
              style={{ backgroundColor: "#69c0ff", color: "white" }}
              className="text-center p-3 mt-2 mb-2 display-7 jumbotron"
            >
              {products.length} Products in "{ingredient.name}" ingredient
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientHome;