import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {
    price,
    calories,
    carbohydrates,
    fat,
    protein,
    transfat,
    cholesterol,
    sodium,
    sugar,
    servingsize,
    saturatedfat,
    dietaryfiber,
    category,
    subs,
    shipping,
    color,
    brand,
    diet,
    ingredient,
    quantity,
    sold,
  } = product;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price:{" "}
        <span className="label label-default label-pill float-end">
          ${price}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category:{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill float-end"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub categories:{" "}
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill float-end"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      {/* <li className="list-group-item">
        Shipping:{" "}
        <span className="label label-default label-pill float-end">
          {shipping}
        </span>
      </li>

      <li className="list-group-item">
        Color:{" "}
        <span className="label label-default label-pill float-end">
          {color}
        </span>
      </li> */}

      {/* <li className="list-group-item">
        Brand:{" "}
        <span className="label label-default label-pill float-end">
          {brand.name}
        </span>
      </li> */}

      {brand && (
        <li className="list-group-item">
          Brand:{" "}
          <Link
            to={`/brand/${brand.slug}`}
            className="label label-default label-pill float-end"
          >
            {brand.name}
          </Link>
        </li>
      )}

      {/* {diet && (
        <li className="list-group-item">
          Diet:{" "}
          <Link
            to={`/diet/${diet.slug}`}
            className="label label-default label-pill float-end"
          >
            {diet.name}
          </Link>
        </li>
      )} */}

      {diet && (
        <li className="list-group-item">
          Diet:{" "}
          {diet.map((d) => (
            <Link
              key={d._id}
              to={`/diet/${d.slug}`}
              className="label label-default label-pill float-end"
            >
              {d.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Serving Size:{" "}
        <span className="label label-default label-pill float-end">
          {servingsize}
        </span>
      </li>

      <li className="list-group-item">
        Calories:{" "}
        <span className="label label-default label-pill float-end">
          {calories}
        </span>
      </li>

      <li className="list-group-item">
        Protein:{" "}
        <span className="label label-default label-pill float-end">
          {protein}
        </span>
      </li>

      <li className="list-group-item">
        Total Carbohydrates:{" "}
        <span className="label label-default label-pill float-end">
          {carbohydrates}
        </span>
      </li>

      <li className="list-group-item">
        Dietary Fiber:{" "}
        <span className="label label-default label-pill float-end">
          {dietaryfiber}
        </span>
      </li>

      <li className="list-group-item">
        Total Sugar:{" "}
        <span className="label label-default label-pill float-end">
          {sugar}
        </span>
      </li>

      <li className="list-group-item">
        Total Fat:{" "}
        <span className="label label-default label-pill float-end">{fat}</span>
      </li>

      <li className="list-group-item">
        Trans Fat:{" "}
        <span className="label label-default label-pill float-end">
          {transfat}
        </span>
      </li>

      <li className="list-group-item">
        Saturated Fat:{" "}
        <span className="label label-default label-pill float-end">
          {saturatedfat}
        </span>
      </li>

      <li className="list-group-item">
        Cholesterol:{" "}
        <span className="label label-default label-pill float-end">
          {cholesterol}
        </span>
      </li>

      <li className="list-group-item">
        Sodium:{" "}
        <span className="label label-default label-pill float-end">
          {sodium}
        </span>
      </li>

      {/* <li className="list-group-item">
        Available:{" "}
        <span className="label label-default label-pill float-end">
          {quantity}
        </span>
      </li>

      <li className="list-group-item">
        Sold:{" "}
        <span className="label label-default label-pill float-end">{sold}</span>
      </li> */}

      {ingredient && (
        <li className="list-group-item">
          Ingredients:{" "}
          {ingredient.map((d) => (
            <Link
              key={d._id}
              to={`/ingredient/${d.slug}`}
              className="label label-default label-pill float-end"
            >
              {d.name}
            </Link>
          ))}
        </li>
      )}
    </ul>
  );
};

export default ProductListItems;
