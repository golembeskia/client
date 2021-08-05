import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDiets } from "../../functions/diet";

const DietList = () => {
  const [diets, setDiets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDiets().then((d) => {
      setDiets(d.data);
      setLoading(false);
    });
  }, []);

  const showDiets = () =>
    diets.map((d) => (
      <div
        key={d._id}
        className="col btn btn-outlined-secondary btn-md m-3"
      >
        <Link to={`/diet/${d.slug}`}>{d.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showDiets()
        )}
      </div>
    </div>
  );
};

export default DietList;