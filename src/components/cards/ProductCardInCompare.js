import React from "react";
import ModalImage from "react-modal-image";
import laptop from "../../images/placeholder.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ProductCardInCompare = ({ p }) => {
 
  let dispatch = useDispatch();

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let compare = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("compare")) {
        compare = JSON.parse(localStorage.getItem("compare"));
      }
      // [1,2,3,4,5]
      compare.map((product, i) => {
        if (product._id === p._id) {
          compare.splice(i, 1);
        }
      });

      localStorage.setItem("compare", JSON.stringify(compare));
      dispatch({
        type: "ADD_TO_COMPARE",
        payload: compare,
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>${p.price}</td>
        <td>{p.brand.name}</td>
        <td>{p.servingsize}</td>
        <td>{p.diet.name}</td>
        <td>{p.calories}</td>
        <td>{p.carbohydrates}</td>
        <td>{p.fat}</td>
        <td>{p.protein}</td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCompare;
