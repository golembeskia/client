import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const saveOrderToDb = () => {
    //
  };

  const getTotalPrice = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const getTotalCarbs = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.carbohydrates;
    }, 0);
  };

  const getTotalFat = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.fat;
    }, 0);
  };

  const getTotalProtein = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.protein;
    }, 0);
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          {/* <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th> */}
          <th scope="col">Diet</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
    {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}{" "}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Shopping List / {cart.length} Product</h4>

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue Search.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {/* {c.title} x {c.count} = ${c.price * c.count} */}
                {c.title} 
              </p>
            </div>
          ))}
          <hr />
          Total Estimated Price: <b>${getTotalPrice()}</b><hr />
          Total Carbs: <b>{getTotalCarbs()}</b><hr />
          Total Fat: <b>{getTotalFat()}</b><hr />
          Total Protein: <b>{getTotalProtein()}</b><hr />
          <hr />
          {user ? (
            <button
              onClick={saveOrderToDb}
              className="btn btn-sm btn-primary mt-2"
              disabled={!cart.length}
            >
              Send me shopping list
            </button>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

//   const getTotal = () => {
//     return cart.reduce((currentValue, nextValue) => {
//       return currentValue + nextValue.count * nextValue.price;
//     }, 0);
//   };

// //   const saveOrderToDb = () => {
// //     //
// //   };

//   const showCartItems = () => (
//     <table className="table table-bordered">
//       <thead className="thead-light">
//         <tr>
//           <th scope="col">Image</th>
//           <th scope="col">Title</th>
//           <th scope="col">Price</th>
//           <th scope="col">Brand</th>
//           <th scope="col">Color</th>
//           <th scope="col">Count</th>
//           <th scope="col">Shipping</th>
//           <th scope="col">Remove</th>
//         </tr>
//       </thead>

//       {cart.map((p) => (
//         <ProductCardInCheckout key={p._id} p={p} />
//       ))}
//     </table>
//   );

//   return (
//     <div className="container-fluid pt-2">
//       <div className="row">
//         <div className="col-md-9">
//           <h4>Cart / {cart.length} Product</h4>

//           {!cart.length ? (
//             <p>
//               No products in cart. <Link to="/shop">Continue Shopping.</Link>
//             </p>
//           ) : (
//             showCartItems()
//           )}
//         </div>
//         <div className="col-md-3">
//           <h4>Order Summary</h4>
//           <hr />
//           <p>Products</p>
//           {cart.map((c, i) => (
//             <div key={i}>
//               <p>
//                 {c.title} x {c.count} = ${c.price * c.count}
//               </p>
//             </div>
//           ))}
//           <hr />
//           Total: <b>${getTotal()}</b>
//           <hr />
//           {user ? (
//             <button
//               onClick={saveOrderToDb}
//               className="btn btn-sm btn-primary mt-2"
//               disabled={!cart.length}
//             >
//               Proceed to Checkout
//             </button>
//           ) : (
//             <button className="btn btn-sm btn-primary mt-2">
//               <Link
//                 to={{
//                   pathname: "/login",
//                   state: { from: "cart" },
//                 }}
//               >
//                 Login to Checkout
//               </Link>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Cart;
