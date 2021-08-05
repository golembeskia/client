import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import { getBrands } from "../../../functions/brand";
import { getDiets } from "../../../functions/diet";
import { getIngredients } from "../../../functions/ingredient";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  calories: "",
  carbohydrates: "",
  fat: "",
  transfat: "",
  cholesterol: "",
  sodium: "",
  sugar: "",
  servingsize: "",
  saturatedfat: "",
  dietaryfiber: "",
  protein: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  color: "",
  brand: "",
  diet: "",
  ingredient: "",
};

const ProductUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [diets, setDiets] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
    loadBrands();
    loadDiets();
    loadIngredients();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // console.log("single product", p);
      // 1 load single proudct
      setValues({ ...values, ...p.data });
      // 2 load single product category subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subs
      });
      // 3 prepare array of sub ids to show as default sub values in antd Select
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("ARR", arr);
      setArrayOfSubs((prev) => arr); // required for ant design select to work
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
      setCategories(c.data);
    });

  const loadBrands = () =>
    getBrands().then((b) => {
      console.log("GET BRANDS IN UPDATE PRODUCT", b.data);
      setBrands(b.data);
    });

  const loadDiets = () =>
    getDiets().then((d) => {
      console.log("GET DIETS IN UPDATE PRODUCT", d.data);
      setDiets(d.data);
    });

    const loadIngredients = () =>
    getIngredients().then((d) => {
      console.log("GET INGREDIENTS IN UPDATE PRODUCT", d.data);
      setIngredients(d.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    values.subs = arrayOfSubs;
    values.category = selectedCategory ? selectedCategory : values.category;
    values.brand = selectedBrand ? selectedBrand : values.brand;
    values.diet = selectedDiet ? selectedDiet : values.diet;
    values.ingredient = selectedIngredient ? selectedIngredient : values.ingredient;

    updateProduct(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });

    console.log("EXISTING CATEGORY values.category", values.category);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.category._id === e.target.value) {
      loadProduct();
    }
    // clear old sub category ids
    setArrayOfSubs([]);
  };

  const handleBrandChange = (e) => {
    e.preventDefault();
    console.log("CLICKED BRAND", e.target.value);

    setSelectedBrand(e.target.value);

    console.log("EXISTING BRAND values.brand", values.brand);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.brand._id === e.target.value) {
      loadProduct();
    }
  };

  const handleDietChange = (e) => {
    e.preventDefault();
    console.log("CLICKED DIET", e.target.value);

    setSelectedDiet(e.target.value);

    console.log("EXISTING DIET values.diet", values.diet);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.diet._id === e.target.value) {
      loadProduct();
    }
  };

  const handleIngredientChange = (e) => {
    e.preventDefault();
    console.log("CLICKED DIET", e.target.value);

    setSelectedIngredient(e.target.value);

    console.log("EXISTING INGREDIENT values.ingredient", values.ingredient);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.ingredient._id === e.target.value) {
      loadProduct();
    }
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
            <h4>Product update</h4>
          )}

          {/* {JSON.stringify(values)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCategoryChange={handleCategoryChange}
            handleBrandChange={handleBrandChange}
            handleDietChange={handleDietChange}
            handleIngredientChange={handleIngredientChange}
            categories={categories}
            brands={brands}
            diets={diets}
            ingredients={ingredients}
            subOptions={subOptions}
            arrayOfSubs={arrayOfSubs}
            setArrayOfSubs={setArrayOfSubs}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            selectedDiet={selectedDiet}
            selectedIngredient={selectedIngredient}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
