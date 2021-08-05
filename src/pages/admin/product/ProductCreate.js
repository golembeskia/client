import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import { getBrands } from "../../../functions/brand";
import { getDiets } from "../../../functions/diet";
import { getIngredients } from "../../../functions/ingredient";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
  title: "TestProductXX",
  description: "This test product XX",
  manufacturing: "Manufactured in a facility that also manufactures XXX",
  allergy: "Allergy Info: XXX",
  price: "11",
  calories: "10",
  carbohydrates: "9",
  fat: "8",
  transfat: "7",
  cholesterol: "6",
  sodium: "5",
  sugar: "4",
  servingsize: "3",
  saturatedfat: "2",
  dietaryfiber: "1",
  protein: "0",
  categories: [],
  category: "",
  subs: [],
  shipping: "Yes",
  quantity: "5",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: [],
  brand: "",
  diets: [],
  diet: "",
  ingredients: [],
  ingredient: "",
  color: "White",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  // const [Brandvalues, setBrandValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadCategories();
    loadBrands();
    loadDiets();
    loadIngredients();
  }, []);

  // const loadCategories = () =>
  //   getCategories().then((c) => setValues({ ...prevalues, categories: c.data }));

  // const loadBrands = () =>
  //   getBrands().then((b) => setValues({ ...values, brands: b.data }));

  const loadCategories = () => {
    getCategories().then((c) =>
      setValues((prevValues) => ({ ...prevValues, categories: c.data }))
    );
  };

  const loadBrands = () =>
    getBrands(user.token).then((b) => {
      setValues((prevValues) => ({ ...prevValues, brands: b.data }));
    });

  const loadDiets = () =>
    getDiets(user.token).then((d) => {
      setValues((prevValues) => ({ ...prevValues, diets: d.data }));
    });

    const loadIngredients = () =>
    getIngredients(user.token).then((d) => {
      setValues((prevValues) => ({ ...prevValues, ingredients: d.data }));
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleBrandChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleDietChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleIngredientChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });
    setShowSub(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Product create</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBrandChange={handleBrandChange}
            handleDietChange={handleDietChange}
            handleIngredientChange={handleIngredientChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
