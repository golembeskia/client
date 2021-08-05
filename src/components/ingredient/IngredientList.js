import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getIngredients } from "../../functions/ingredient";

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getIngredients().then((c) => {
      setIngredients(c.data);
      setLoading(false);
    });
  }, []);

  const showIngredients = () =>
    ingredients.map((c) => (
      <div
        key={c._id}
        className="col btn btn-outlined-secondary btn-md m-3"
      >
        <Link to={`/ingredient/${c.slug}`}>{c.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showIngredients()
        )}
      </div>
    </div>
  );
};

export default IngredientList;