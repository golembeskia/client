import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../../functions/brand";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBrands().then((c) => {
      setBrands(c.data);
      setLoading(false);
    });
  }, []);

  const showBrands = () =>
    brands.map((c) => (
      <div
        key={c._id}
        className="col btn btn-outlined-secondary btn-md m-3"
      >
        <Link to={`/brand/${c.slug}`}>{c.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showBrands()
        )}
      </div>
    </div>
  );
};

export default BrandList;