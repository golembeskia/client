// import React, { useState, useEffect } from "react";
// import {
//   getProductsByCount,
//   fetchProductsByFilter,
//   getProducts,
// } from "../functions/product";
// import { getCategories } from "../functions/category";
// import { getBrands } from "../functions/brand";
// import { getDiets } from "../functions/diet";
// import { getIngredients } from "../functions/ingredient";
// import { getSubs } from "../functions/sub";
// import { useSelector, useDispatch } from "react-redux";
// import ProductCard from "../components/cards/ProductCard";
// import ProductTable from "../components/tables/ProductTable";
// import ProductTableAd from "../components/tables/ProductTableAd";
// import { Menu, Slider, Checkbox, Radio } from "antd";
// import {
//   DollarOutlined,
//   DownSquareOutlined,
//   StarOutlined,
//   AppstoreOutlined,
//   BarsOutlined,
//   TableOutlined,
//   ExperimentOutlined,
//   GoldOutlined,
// } from "@ant-design/icons";
// import Star from "../components/forms/Star";

// const { SubMenu, ItemGroup } = Menu;

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [productIds, setProductIds] = useState(["test"]);
//   const [loading, setLoading] = useState(false);
//   const [price, setPrice] = useState([0, 1000000]);
//   const [ok, setOk] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [categoryIds, setCategoryIds] = useState([]);
//   const [star, setStar] = useState("");
//   const [subs, setSubs] = useState([]);
//   const [subIds, setSubIds] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [brandIds, setBrandIds] = useState([]);
//   const [diets, setDiets] = useState([]);
//   const [dietIds, setDietIds] = useState([]);
//   const [ingredients, setIngredients] = useState([]);
//   const [ingredientIds, setIngredientIds] = useState([]);
//   const [colors, setColors] = useState([
//     "Black",
//     "Brown",
//     "Silver",
//     "White",
//     "Blue",
//   ]);
//   const [color, setColor] = useState("");
//   const [shipping, setShipping] = useState("");

//   //sort
//   const [sortedProducts, setSortedProducts] = ("");
//   const [sorts, setSorts] = useState([
//     "Name: A to Z",
//     "Name: Z to A",
//     "Price: Min to Max",
//     "Price: Max to Min",
//     "Calories: Min to Max",
//     "Calories: Max to Min",
//     "Carbs: Max to Min",
//     "Carbs: Min to Max",
//   ]);
//   const [sort, setSort] = useState("");

//   const [showResults, setShowResults] = useState(true);

//   let dispatch = useDispatch();
//   let { search } = useSelector((state) => ({ ...state }));
//   const { text } = search;

//   useEffect(() => {
//     loadAllProducts();
//     // fetch categories
//     getCategories().then((res) => setCategories(res.data));
//     // fetch subcategories
//     getSubs().then((res) => setSubs(res.data));
//     //fetch brands
//     getBrands().then((res) => setBrands(res.data));
//     //fetch diets
//     getDiets().then((res) => setDiets(res.data));
//     //fetch ingredients
//     getIngredients().then((res) => setIngredients(res.data));
//   }, []);

//   const fetchProducts = (arg) => {
//     fetchProductsByFilter(arg).then((res) => {
//       setProducts(res.data);
//     });
//   };

//   // 1. load products by default on page load
//   const loadAllProducts = () => {
//     getProductsByCount(12).then((p) => {
//       setProducts(p.data);
//       setLoading(false);
//     });
//   };
//   // const loadAllProducts = () => {
//   //   setLoading(true);
//   //   // sort, order, limit
//   //   getProducts("createdAt", "desc").then((res) => {
//   //     setProducts(res.data);
//   //     setLoading(false);
//   //   });
//   // };

//   // 2. load products on user search input
//   useEffect(() => {
//     const delayed = setTimeout(() => {
//       fetchProducts({ query: text });
//     }, 300);
//     return () => clearTimeout(delayed);
//   }, [text]);

//   // 3. load products based on price range
//   useEffect(() => {
//     // console.log("ok to request");
//     fetchProducts({ price });
//   }, [ok]);

//   const handleSlider = (value) => {
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });

//     // reset
//     setCategoryIds([]);
//     setBrandIds([]);
//     setDietIds([]);
//     setIngredientIds([]);
//     setPrice(value);
//     setStar("");
//     setSubIds("");
//     setColor("");
//     setShipping("");
//     setTimeout(() => {
//       setOk(!ok);
//     }, 300);
//   };

//   // 4. load products based on category
//   // show categories in a list of checkbox
//   const showCategories = () =>
//     categories.map((c) => (
//       <div key={c._id}>
//         <Checkbox
//           onChange={handleCheck}
//           className="pb-2 pl-4 pr-4"
//           value={c._id}
//           name="category"
//           checked={categoryIds.includes(c._id)}
//         >
//           {c.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for categories
//   const handleCheck = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setStar("");
//     setSubIds([]);
//     setBrandIds([]);
//     setDietIds([]);
//     setIngredientIds([]);
//     setColor("");
//     setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...categoryIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setCategoryIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ category: inTheState });
//     // console.log({ category: inTheState });
//   };

//   // 5. show products by star rating
//   const handleStarClick = (num) => {
//     // console.log(num);
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setStar(num);
//     setSubIds([]);
//     setBrandIds([]);
//     setDietIds([]);
//     setIngredientIds([]);
//     setColor("");
//     setShipping("");
//     fetchProducts({ stars: num });
//   };

//   const showStars = () => (
//     <div className="pr-4 pl-4 pb-2">
//       <Star starClick={handleStarClick} numberOfStars={5} />
//       <Star starClick={handleStarClick} numberOfStars={4} />
//       <Star starClick={handleStarClick} numberOfStars={3} />
//       <Star starClick={handleStarClick} numberOfStars={2} />
//       <Star starClick={handleStarClick} numberOfStars={1} />
//     </div>
//   );

//   // 6. show sub categories
//   // show sub categories in a list of checkbox
//   const showSubs = () =>
//     subs.map((s) => (
//       <div key={s._id}>
//         <Checkbox
//           onChange={handleSub}
//           className="pb-2 pl-4 pr-4"
//           value={s._id}
//           name="sub"
//           checked={subIds.includes(s._id)}
//         >
//           {s.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for sub categories
//   const handleSub = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setStar("");
//     setBrandIds([]);
//     setDietIds([]);
//     setIngredientIds([]);
//     setColor("");
//     setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...subIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setSubIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ sub: inTheState });
//     // console.log({ sub: inTheState });
//   };

//   // 7. show products based on brand name
//   // const showBrands = () =>
//   //   brands.map((b) => (
//   //     <Radio
//   //       value={b}
//   //       name={b}
//   //       checked={b === brand}
//   //       onChange={handleBrand}
//   //       className="pb-1 pl-4 pr-4"
//   //     >
//   //       {b}
//   //     </Radio>
//   //   ));

//   // const handleBrand = (e) => {
//   //   setSubIds("");
//   //   dispatch({
//   //     type: "SEARCH_QUERY",
//   //     payload: { text: "" },
//   //   });
//   //   setPrice([0, 0]);
//   //   setCategoryIds([]);
//   //   setSubIds([]);
//   //   setStar("");
//   //   setColor("");
//   //   setBrand(e.target.value);
//   //   setShipping("");
//   //   fetchProducts({ brand: e.target.value });
//   // };

//   const showBrands = () =>
//     brands.map((b) => (
//       <div key={b._id}>
//         <Checkbox
//           onChange={handleBrand}
//           className="pb-2 pl-4 pr-4"
//           value={b._id}
//           name="brand"
//           checked={brandIds.includes(b._id)}
//         >
//           {b.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for brands
//   const handleBrand = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setStar("");
//     setSubIds([]);
//     setCategoryIds([]);
//     setDietIds([]);
//     setIngredientIds([]);
//     setColor("");
//     setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...brandIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setBrandIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ brand: inTheState });
//     // console.log({ category: inTheState });
//   };

//   //Diet
//   // const showDiets = () =>
//   //   diets.map((d) => (
//   //     <div key={d._id}>
//   //       <Checkbox
//   //         onChange={handleDiet}
//   //         className="pb-2 pl-4 pr-4"
//   //         value={d._id}
//   //         name="diet"
//   //         checked={dietIds.includes(d._id)}
//   //       >
//   //         {d.name}
//   //       </Checkbox>
//   //       <br />
//   //     </div>
//   //   ));

//   // handle check for diets
//   // const handleDiet = (e) => {
//   //   // reset
//   //   dispatch({
//   //     type: "SEARCH_QUERY",
//   //     payload: { text: "" },
//   //   });
//   //   setPrice([0, 0]);
//   //   setStar("");
//   //   setSubIds([]);
//   //   setCategoryIds([]);
//   //   setBrandIds([]);
//   //   setColor("");
//   //   setShipping("");
//   //   // console.log(e.target.value);
//   //   let inTheState = [...dietIds];
//   //   let justChecked = e.target.value;
//   //   let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//   //   // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//   //   if (foundInTheState === -1) {
//   //     inTheState.push(justChecked);
//   //   } else {
//   //     // if found pull out one item from index
//   //     inTheState.splice(foundInTheState, 1);
//   //   }

//   //   setDietIds(inTheState);
//   //   console.log(inTheState);
//   //   fetchProducts({ diet: inTheState });
//   //   // console.log({ diet: inTheState });
//   // };

//   // show diet in a list of checkbox
//   const showDiets = () =>
//     diets.map((d) => (
//       <div key={d._id}>
//         <Checkbox
//           onChange={handleDiet}
//           className="pb-2 pl-4 pr-4"
//           value={d._id}
//           name="diet"
//           checked={dietIds.includes(d._id)}
//         >
//           {d.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for diets
//   const handleDiet = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setStar("");
//     setBrandIds([]);
//     setIngredientIds([]);
//     setSubIds([]);
//     setColor("");
//     setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...dietIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setDietIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ diet: inTheState });
//     // console.log({ diet: inTheState });
//   };

//   // show ingredient in a list of checkbox
//   const showIngredients = () =>
//     ingredients.map((d) => (
//       <div key={d._id}>
//         <Checkbox
//           onChange={handleIngredient}
//           className="pb-2 pl-4 pr-4"
//           value={d._id}
//           name="ingredient"
//           checked={ingredientIds.includes(d._id)}
//         >
//           {d.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for ingredients
//   const handleIngredient = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setStar("");
//     setBrandIds([]);
//     setSubIds([]);
//     setDietIds([]);
//     setColor("");
//     setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...ingredientIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setIngredientIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ ingredient: inTheState });
//     // console.log({ ingredient: inTheState });
//   };

//   // 8. show products based on color
//   const showColors = () =>
//     colors.map((r) => (
//       <Radio
//         value={r}
//         name={r}
//         checked={r === color}
//         onChange={handleColor}
//         className="pb-1 pl-4 pr-4"
//       >
//         {r}
//       </Radio>
//     ));

//   const handleColor = (e) => {
//     setSubIds("");
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setSubIds([]);
//     setStar("");
//     setBrandIds([]);
//     setDietIds([]);
//     setColor(e.target.value);
//     setShipping("");
//     fetchProducts({ color: e.target.value });
//   };

//   // 9. show products based on shipping yes/no
//   const showShipping = () => (
//     <>
//       <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingchange}
//         value="Yes"
//         checked={shipping === "Yes"}
//       >
//         Yes
//       </Checkbox>

//       <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingchange}
//         value="No"
//         checked={shipping === "No"}
//       >
//         No
//       </Checkbox>
//     </>
//   );

//   const handleShippingchange = (e) => {
//     setSubIds("");
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     setPrice([0, 1000000]);
//     setCategoryIds([]);
//     setSubIds([]);
//     setStar("");
//     setBrandIds([]);
//     setDietIds([]);
//     setColor("");
//     setShipping(e.target.value);
//     fetchProducts({ shipping: e.target.value });
//   };

//   const showColumns = () =>
//     categories.map((c) => (
//       <div key={c._id}>
//         <Checkbox
//           onChange={handleColumns}
//           className="pb-2 pl-4 pr-4"
//           value={c._id}
//           name="category"
//           checked={categoryIds.includes(c._id)}
//         >
//           {c.name}
//         </Checkbox>
//         <br />
//       </div>
//     ));

//   // handle check for columns
//   const handleColumns = (e) => {
//     // reset
//     dispatch({
//       type: "SEARCH_QUERY",
//       payload: { text: "" },
//     });
//     // setPrice([0, 0]);
//     // setStar("");
//     // setSubIds([]);
//     // setBrandIds([]);
//     // setDietIds([]);
//     // setIngredientIds([]);
//     // setColor("");
//     // setShipping("");
//     // console.log(e.target.value);
//     let inTheState = [...categoryIds];
//     let justChecked = e.target.value;
//     let foundInTheState = inTheState.indexOf(justChecked); // index or -1

//     // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
//     if (foundInTheState === -1) {
//       inTheState.push(justChecked);
//     } else {
//       // if found pull out one item from index
//       inTheState.splice(foundInTheState, 1);
//     }

//     setCategoryIds(inTheState);
//     console.log(inTheState);
//     fetchProducts({ category: inTheState });
//     // console.log({ category: inTheState });
//   };

//   //sorting
//   const showSorts = () =>
//     sorts.map((s) => (
//       <Radio
//         value={s}
//         name={s}
//         checked={s === sort}
//         onChange={handleSort}
//         className="pb-1 pl-4 pr-4"
//       >
//         {s}
//       </Radio>
//     ));

//   const handleSort = (e) => {
//     // setSubIds("");
//     // dispatch({
//     //   type: "SEARCH_QUERY",
//     //   payload: { text: "" },
//     // });
//     setSort(e.target.value);
//     let sortedProducts = [...products];
//     sortedProducts.sort((a, b) => {
//       if (a.name < b.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     });
//     fetchProducts({sort: sortedProducts})
//   };

//   //toggle between card & table
//   const onClick = () => setShowResults(false);
//   const offClick = () => setShowResults(true);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-2 pt-2">
//           <h4>Filters</h4>
//           <hr />

//           <Menu mode="inline">
//             {/* price */}
//             <SubMenu
//               key="1"
//               title={
//                 <span className="h6">
//                   <DollarOutlined /> Price
//                 </span>
//               }
//             >
//               <div>
//                 <Slider
//                   className="ml-4 mr-4"
//                   tipFormatter={(v) => `$${v}`}
//                   range
//                   value={price}
//                   onChange={handleSlider}
//                   max="4999"
//                 />
//               </div>
//             </SubMenu>

//             {/* category */}
//             <SubMenu
//               key="2"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Categories
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
//             </SubMenu>

//             {/* sub category */}
//             <SubMenu
//               key="3"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Sub Categories
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }}>{showSubs()}</div>
//             </SubMenu>

//             {/* brands */}
//             <SubMenu
//               key="4"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Brands
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }} className="pr-5">
//                 {showBrands()}
//               </div>
//             </SubMenu>

//             {/* diets */}
//             <SubMenu
//               key="5"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Diets
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }} className="pr-5">
//                 {showDiets()}
//               </div>
//             </SubMenu>

//             {/* ingredients */}
//             <SubMenu
//               key="6"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Ingredients
//                 </span>
//               }
//             >
//               <div style={{ marginTop: "-10px" }} className="pr-5">
//                 {showIngredients()}
//               </div>
//             </SubMenu>

//             {/* stars */}
//             <SubMenu
//               key="7"
//               title={
//                 <span className="h6">
//                   <StarOutlined /> Rating
//                 </span>
//               }
//             >
//               <div style={{ marginTop: "-10px" }}>{showStars()}</div>
//             </SubMenu>

//             {/* normalize */}
//             <SubMenu
//               key="8"
//               title={
//                 <span className="h6">
//                   <ExperimentOutlined /> Normalize
//                 </span>
//               }
//             >
//               <div style={{ marginTop: "-10px" }}>{}</div>
//             </SubMenu>

//             {/* columns */}
//             {/* <Menu>
//               {!showResults && (
//                 <SubMenu
//                   key="8"
//                   title={
//                     <span className="h6">
//                       <TableOutlined /> Table Columns
//                     </span>
//                   }
//                 >
//                   <div style={{ maringTop: "-10px" }}>{showColumns}</div>
//                 </SubMenu>
//               )}
//             </Menu> */}

//             {/* colors */}
//             {/* <SubMenu
//               key="7"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Colors
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }} className="pr-5">
//                 {showColors()}
//               </div>
//             </SubMenu> */}

//             {/* shipping */}
//             {/* <SubMenu
//               key="8"
//               title={
//                 <span className="h6">
//                   <DownSquareOutlined /> Shipping
//                 </span>
//               }
//             >
//               <div style={{ maringTop: "-10px" }} className="pr-5">
//                 {showShipping()}
//               </div>
//             </SubMenu> */}

//             <hr />
//             <h4>View</h4>

//             <h6 style={{ marginLeft: "22px" }} onClick={offClick}>
//               <AppstoreOutlined /> Grid View
//             </h6>
//             <h6 style={{ marginLeft: "22px" }} onClick={onClick}>
//               <BarsOutlined /> Table View
//             </h6>

//             {/* columns */}

//             {!showResults && (
//               <SubMenu
//                 key="9"
//                 title={
//                   <span className="h6">
//                     <TableOutlined /> Table Columns
//                   </span>
//                 }
//               >
//                 <div style={{ marginTop: "-10px" }}>{showColumns()}</div>
//               </SubMenu>
//             )}

//             <hr />
//             <h4>Sort</h4>
//             <SubMenu
//               key="10"
//               title={
//                 <span className="h6">
//                   <GoldOutlined /> Sort
//                 </span>
//               }
//             >
//               <div style={{ marginTop: "-10px" }}>{showSorts()}</div>
//             </SubMenu>
//           </Menu>
//         </div>

//         <div className="col-md-8 pt-2">
//           {loading ? (
//             <h4 className="text-danger">Loading...</h4>
//           ) : (
//             <h4 className="text-dark">Products</h4>
//           )}

//           {products.length < 1 && <p>No products found</p>}

//           <div className="row pb-0">
//             {products.map((p) => (
//               <div key={p._id} className="col-md-3 mt-3">
//                 {showResults && <ProductCard product={p} />}
//               </div>
//             ))}
//           </div>

//           {/* <div className="col-md-12">
//             {!showResults && <ProductTable/>}
//           </div> */}
//           <div>
//             {products.map((p) => (
//               <div key={p._id}>
//                 {!showResults && <ProductTable product={p} />}
//               </div>
//             ))}
//           </div>

//           {/* <div>
//                 {!showResults && <ProductTableAd />}
//           </div> */}
//         </div>

//         <div className="col-md-2 pt-2">
//           {/* <h4 onClick={offClick}>
//             <AppstoreOutlined />
//           </h4>
//           <h4 onClick={onClick}>
//             <BarsOutlined />
//           </h4> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

/// //////////////////////////////////

import React, { useState, useEffect } from 'react'
import {
  getProductsByCount,
  fetchProductsByFilter
} from '../functions/product'
import { getCategories } from '../functions/category'
import { getSubs } from '../functions/sub'
import { getBrands } from '../functions/brand'
import { getDiets } from '../functions/diet'
import { getIngredients } from '../functions/ingredient'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/cards/ProductCard'
import ProductTable from '../components/tables/ProductTable'
import { Menu, Slider, Checkbox, Radio } from 'antd'
import {
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons'
import Star from '../components/forms/Star'

const { SubMenu } = Menu

const Shop = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(true)
  const [price, setPrice] = useState([0, 1000000])
  const [ok, setOk] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoryIds, setCategoryIds] = useState([])
  const [sub, setSub] = useState([])
  const [subIds, setSubIds] = useState([])
  const [brands, setBrands] = useState([])
  const [brandIds, setBrandIds] = useState([])
  const [diets, setDiets] = useState([])
  const [dietIds, setDietIds] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredientIds, setIngredientIds] = useState([])

  // sort
  const [sorts] = useState([
    'Price: Min to Max',
    'Price: Max to Min',
    'Calories: Min to Max',
    'Calories: Max to Min',
    'Carbs: Max to Min',
    'Carbs: Min to Max',
    'Fat: Max to Min',
    'Fat: Min to Max',
    'Protein: Max to Min',
    'Protein: Min to Max',
    'Sugar: Max to Min',
    'Sugar: Min to Max'
  ])
  const [sort, setSort] = useState('')

  // show columns
  const [columns] = useState([
    'Price',
    'Calories',
    'Fat',
    'Carbs',
    'Protein',
    'Sugar'
  ])
  const [column] = useState('')

  const dispatch = useDispatch()
  const { search } = useSelector((state) => ({ ...state }))
  const { text } = search

  useEffect(() => {
    loadAllProducts()
    // fetch categories
    getCategories().then((res) => setCategories(res.data))
    // fetch subcategories
    getSubs().then((res) => setSub(res.data))
    // fetch brands
    getBrands().then((res) => setBrands(res.data))
    // fetch diets
    getDiets().then((res) => setDiets(res.data))
    // fetch ingredients
    getIngredients().then((res) => setIngredients(res.data))
  }, [])

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data)
      setLoading(false)
    })
  }

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data)
    })
  }

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text })
    }, 300)
    return () => clearTimeout(delayed)
  }, [text])

  // //2a load products on empty search query
  useEffect(() => {
    const delayed = setTimeout(() => {
      loadAllProducts({ query: text.length <= 0 })
    }, 50)
    return () => clearTimeout(delayed)
  }, [text])

  // 3. load products based on price range
  useEffect(() => {
    // console.log("ok to request");
    fetchProducts({ price })
  }, [ok])

  const handleSlider = (value) => {
    // this will empy the search bar when the user starts using the slider
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })
    setCategoryIds([])
    setSubIds([])
    setBrandIds([])
    // reset
    setPrice(value)
    setTimeout(() => {
      setOk(!ok)
    }, 300)
  }

  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ))

  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })
    setPrice([0, 100000])
    setSubIds([])
    setBrandIds([])
    // console.log(e.target.value);
    const inTheState = [...categoryIds]
    const justChecked = e.target.value
    const foundInTheState = inTheState.indexOf(justChecked) // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked)
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1)
    }

    setCategoryIds(inTheState)
    console.log(inTheState)
    fetchProducts({ category: inTheState })
    // console.log({ category: inTheState });

    // load all products when nothing is checked
    if (foundInTheState == []) {
      console.log(inTheState)
      loadAllProducts([])
    }
  }

  // 5. show sub categories
  // show sub categories in a list of checkbox
  const showSubs = () =>
    sub.map((s) => (
      <div key={s._id}>
        <Checkbox
          onChange={handleSub}
          className="pb-2 pl-4 pr-4"
          value={s._id}
          name="sub"
          checked={subIds.includes(s._id)}
        >
          {s.name}
        </Checkbox>
        <br />
      </div>
    ))

  // handle check for sub categories
  const handleSub = (e) => {
    // reset
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })
    setPrice([0, 10000])
    setCategoryIds([])
    setBrandIds([])
    // console.log(e.target.value);
    const inTheState = [...subIds]
    const justChecked = e.target.value
    const foundInTheState = inTheState.indexOf(justChecked) // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked)
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1)
    }

    setSubIds(inTheState)
    console.log(inTheState)
    fetchProducts({ sub: inTheState })
    // console.log({ sub: inTheState });

    // load all products when nothing is checked
    if (foundInTheState == []) {
      console.log(inTheState)
      loadAllProducts([])
    }
  }

  // 6. show brands
  const showBrands = () =>
    brands.map((b) => (
      <div key={b._id}>
        <Checkbox
          onChange={handleBrand}
          className="pb-2 pl-4 pr-4"
          value={b._id}
          name="brand"
          checked={brandIds.includes(b._id)}
        >
          {b.name}
        </Checkbox>
        <br />
      </div>
    ))

  // handle check for brands
  const handleBrand = (e) => {
    // reset
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })
    setPrice([0, 10000])
    setCategoryIds([])
    setSubIds([])
    // console.log(e.target.value);
    const inTheState = [...brandIds]
    const justChecked = e.target.value
    const foundInTheState = inTheState.indexOf(justChecked) // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked)
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1)
    }

    setBrandIds(inTheState)
    console.log(inTheState)
    fetchProducts({ brand: inTheState })
    // console.log({ category: inTheState });

    // load all products when nothing is checked
    if (foundInTheState == []) {
      console.log(inTheState)
      loadAllProducts([])
    }
  }

  // 7. show diet in a list of checkbox
  const showDiets = () =>
    diets.map((d) => (
      <div key={d._id}>
        <Checkbox
          onChange={handleDiet}
          className="pb-2 pl-4 pr-4"
          value={d._id}
          name="diet"
          checked={dietIds.includes(d._id)}
        >
          {d.name}
        </Checkbox>
        <br />
      </div>
    ))

  // handle check for diets
  const handleDiet = (e) => {
    // reset
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })

    // console.log(e.target.value);
    const inTheState = [...dietIds]
    const justChecked = e.target.value
    const foundInTheState = inTheState.indexOf(justChecked) // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked)
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1)
    }

    setDietIds(inTheState)
    console.log(inTheState)
    fetchProducts({ diet: inTheState })
    // console.log({ diet: inTheState });

    // load all products when nothing is checked
    if (foundInTheState == []) {
      console.log(inTheState)
      loadAllProducts([])
    }
  }

  // 8. show ingredient in a list of checkbox
  const showIngredients = () =>
    ingredients.map((d) => (
      <div key={d._id}>
        <Checkbox
          onChange={handleIngredient}
          className="pb-2 pl-4 pr-4"
          value={d._id}
          name="ingredient"
          checked={ingredientIds.includes(d._id)}
        >
          {d.name}
        </Checkbox>
        <br />
      </div>
    ))

  // handle check for ingredients
  const handleIngredient = (e) => {
    // reset
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })

    // console.log(e.target.value);
    const inTheState = [...ingredientIds]
    const justChecked = e.target.value
    const foundInTheState = inTheState.indexOf(justChecked) // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked)
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1)
    }

    setIngredientIds(inTheState)
    console.log(inTheState)
    fetchProducts({ ingredient: inTheState })
    // console.log({ ingredient: inTheState });

    // load all products when nothing is checked
    if (foundInTheState == []) {
      console.log(inTheState)
      loadAllProducts([])
    }
  }

  // 9. show products by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: '' }
    })

    fetchProducts({ stars: num })
  }

  const showStars = () => (
    <div className="pr-4 pl-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
    </div>
  )

  // 10. sorting
  const showSorts = () =>
    sorts.map((s) => (
      <Radio
        value={s}
        name={s}
        checked={s === sort}
        onChange={handleSort}
        className="pb-1 pl-4 pr-4"
      >
        {s}
      </Radio>
    ))

  const handleSort = (e) => {
    // setSubIds("");
    // dispatch({
    //   type: "SEARCH_QUERY",
    //   payload: { text: "" },
    // });
    setSort(e.target.value)
    const sortedProducts = [...products]
    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    fetchProducts({ sort: sortedProducts })
  }

  // 11. show columns for table view
  const showColumns = () =>
    columns.map((c) => (
      <div>
        <Checkbox
          value={c}
          name={c}
          checked={c === column}
          className="pb-1 pl-4 pr-4"
        >
          {c}
        </Checkbox>
        <br />
      </div>
    ))

  // toggle between card & table
  const onClick = () => setShowResults(false)
  const offClick = () => setShowResults(true)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 pt-2">
          <h4>Filter</h4>
          <hr />

          <Menu defaultOpenKeys={[]} mode="inline">
            {/* price */}
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  {/* <DollarOutlined /> Price */}
                  Price
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `$${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="100"
                />
              </div>
            </SubMenu>

            {/* category */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  {/* <DownSquareOutlined /> Categories */}
                  Categories
                </span>
              }
            >
              <div style={{ maringTop: '-10px' }}>{showCategories()}</div>
            </SubMenu>

            {/* sub categories */}
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  {/* <DownSquareOutlined /> Sub Categories */}
                  Sub Categories
                </span>
              }
            >
              <div style={{ maringTop: '-10px' }}>{showSubs()}</div>
            </SubMenu>

            {/* brand */}
            <SubMenu
              key="4"
              title={
                <span className="h6">
                  {/* <DownSquareOutlined /> Brand */}
                  Brand
                </span>
              }
            >
              <div style={{ maringTop: '-10px' }} className="pr-5">
                {showBrands()}
              </div>
            </SubMenu>

            {/* diet */}
            <SubMenu
              key="5"
              title={
                <span className="h6">
                  {/* <DownSquareOutlined /> Diet */}
                  Diet
                </span>
              }
            >
              <div style={{ maringTop: '-10px' }} className="pr-5">
                {showDiets()}
              </div>
            </SubMenu>

            {/* ingredients */}
            <SubMenu
              key="6"
              title={
                <span className="h6">
                  {/* <DownSquareOutlined /> Ingredients */}
                  Ingredients
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }} className="pr-5">
                {showIngredients()}
              </div>
            </SubMenu>

            {/* stars */}
            <SubMenu
              key="7"
              title={
                <span className="h6">
                  {/* <StarOutlined /> Rating */}
                  Rating
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }}>{showStars()}</div>
            </SubMenu>

            <hr />
            <h4>Sort</h4>

            {/* sort */}
            <SubMenu
              key="8"
              title={
                <span className="h6">
                  {/* <GoldOutlined /> Sort */}
                  Sort
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }}>{showSorts()}</div>
            </SubMenu>

            <hr />
            <h4>Normalize</h4>

            {/* normalize */}
            <SubMenu
              key="9"
              title={
                <span className="h6">
                  {/* <ExperimentOutlined /> Normalize */}
                  Normalize
                </span>
              }
            ></SubMenu>

            <hr />
            <h4>View</h4>

            {/* view */}
            <h6 style={{ marginLeft: '22px' }} onClick={offClick}>
              <AppstoreOutlined /> Grid View
            </h6>
            <h6 style={{ marginLeft: '22px' }} onClick={onClick}>
              <BarsOutlined /> Table View
            </h6>

            {!showResults && (
              <SubMenu
                key="10"
                title={
                  <span className="h6">
                    {/* <TableOutlined /> Show Columns */}
                    Show Columns
                  </span>
                }
              >
                <div style={{ marginTop: '-10px' }}>{showColumns()}</div>
              </SubMenu>
            )}
          </Menu>
        </div>

        {/* Load Products */}
        <div className="col-md-9 pt-2">
          {loading
            ? (
            <h4 className="text-danger">Loading...</h4>
              )
            : (
            <h4 className="text-dark">Products</h4>
              )}
          <hr />
          {products.length < 1 && <p>No products found</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                {showResults && <ProductCard product={p} />}
              </div>
            ))}
            <div>
              {products.map((p) => (
                <div key={p._id}>
                  {!showResults && <ProductTable product={p} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
