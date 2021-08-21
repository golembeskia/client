import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined, SyncOutlined} from "@ant-design/icons";
import laptop from "../../images/placeholder.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  // const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      //show car items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  const handleAddToCompare = () => {
    // create compare array
    let compare = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("compare")) {
        compare = JSON.parse(localStorage.getItem("compare"));
      }
      // push new product to compare
      compare.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(compare, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("compare", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to redux state
      dispatch({
        type: "ADD_TO_COMPARE",
        payload: unique,
      });
      //show compare items in side drawer
      // dispatch({
      //   type: "SET_VISIBLE",
      //   payload: true,
      // });
    }
  };

  // destructure
  const { images, title, description, slug, price, calories, carbohydrates, fat, protein, diet } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card
        style={{ textAlign: "center"}}
        className="col-md-12"
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{
              height: "150px",
              width: "auto",
              // objectFit: "cover",
              display: "inline-flex",
            }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined className="text-danger" /> <br /> Add to
              List
            </a>
          </Tooltip>,
          <Tooltip title={tooltip}>
          <a onClick={handleAddToCompare}>
            <SyncOutlined className="text-success" /> <br /> Compare
          </a>
        </Tooltip>,
        ]}
      >
        <Meta
          style={{whiteSpace: "normal", height:"auto"}}
          // title={`${title} - $${price}`}
          // description={`${description && description.substring(0, 40)}...`}
          title={`${title}`}
          description={`Calories:${calories} Carbs:${carbohydrates}g Fat:${fat}g Protein:${protein}g Diet:${diet.name}`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
