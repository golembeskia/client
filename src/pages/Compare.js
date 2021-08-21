import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCompare from "../components/cards/ProductCardInCompare";

const Compare = () => {
  const { compare, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const saveOrderToDb = () => {
    //
  };

//   const getTotal = () => {
//     return compare.reduce((currentValue, nextValue) => {
//       return currentValue + nextValue.count * nextValue.price;
//     }, 0);
//   };

  const showCompareItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Serving Size</th>
          <th scope="col">Diet</th>
          <th scope="col">Calories</th>
          <th scope="col">Carbohydrates</th>
          <th scope="col">Fat</th>
          <th scope="col">Protein</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
    {compare.map((p) => (
        <ProductCardInCompare key={p._id} p={p} />
      ))}{" "}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-12">
          <h4>Compare List / {compare.length} Product</h4>

          {!compare.length ? (
            <p>
              No products in compare. <Link to="/shop">Continue Search.</Link>
            </p>
          ) : (
            showCompareItems()
          )}
        </div>
        {/* <div className="col-md-4">
          <h4>Compare Summary</h4>
          <hr />
          <p>Products</p>
          {compare.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>${getTotal()}</b>
          <hr />
          {user ? (
            <button
              onClick={saveOrderToDb}
              className="btn btn-sm btn-primary mt-2"
              disabled={!compare.length}
            >
              Send me shopping list
            </button>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "compare" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};


export default Compare;
