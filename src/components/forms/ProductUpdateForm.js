import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  handleBrandChange,
  handleDietChange,
  handleIngredientChange,
  categories,
  brands,
  diets,
  ingredients,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
  selectedBrand,
  selectedDiet,
  selectedIngredient
}) => {
  // destructure
  const {
    title,
    description,
    manufacturing,
    allergy,
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
    quantity,
    images,
    colors,
    color,
    brand,
    diet,
    ingredient
  } = values

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Manufacturing Info</label>
        <input
          type="text"
          name="manufacturing"
          className="form-control"
          value={manufacturing}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Allergy Info</label>
        <input
          type="text"
          name="allergy"
          className="form-control"
          value={allergy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Calories</label>
        <input
          type="number"
          name="calories"
          className="form-control"
          value={calories}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Carbohydrates</label>
        <input
          type="number"
          name="carbohydrates"
          className="form-control"
          value={carbohydrates}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Fat</label>
        <input
          type="number"
          name="fat"
          className="form-control"
          value={fat}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Protein</label>
        <input
          type="number"
          name="protein"
          className="form-control"
          value={protein}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Trans Fat</label>
        <input
          type="number"
          name="transfat"
          className="form-control"
          value={transfat}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Cholesterol</label>
        <input
          type="number"
          name="cholesterol"
          className="form-control"
          value={cholesterol}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Sodium</label>
        <input
          type="number"
          name="sodium"
          className="form-control"
          value={sodium}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Sugar</label>
        <input
          type="number"
          name="sugar"
          className="form-control"
          value={sugar}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Serving Size</label>
        <input
          type="number"
          name="servingsize"
          className="form-control"
          value={servingsize}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Saturated Fat</label>
        <input
          type="number"
          name="saturatedfat"
          className="form-control"
          value={saturatedfat}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Dietary Fiber</label>
        <input
          type="number"
          name="dietaryfiber"
          className="form-control"
          value={dietaryfiber}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          value={shipping === 'Yes' ? 'Yes' : 'No'}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Color</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div> */}

      <div className="form-group">
        <label>Brand</label>
        <select
          name="brand"
          className="form-control"
          onChange={handleBrandChange}
          value={selectedBrand || brand._id}
        >
          {brands.length > 0 &&
            brands.map((b) => (
              <option key={b._id} value={b._id}>
                {b.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label>Diet</label>
        <select
          name="diet"
          className="form-control"
          onChange={handleDietChange}
          value={selectedDiet || diet._id}
        >
          {diets.length > 0 &&
            diets.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
        </select>
      </div>

      {/* <div>
        <label>Diet</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={diet}
          onChange={(value) => diet(value)}
        >
          {diets.length &&
            diets.map((d) => (
              <Option key={d._id} value={d._id}>
                {d.name}
              </Option>
            ))}
        </Select>
      </div> */}

      <div className="form-group">
        <label>Ingredient</label>
        <select
          name="ingredient"
          className="form-control"
          onChange={handleIngredientChange}
          value={selectedIngredient || ingredient._id}
        >
          {ingredients.length > 0 &&
            ingredients.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory || category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  )
}

export default ProductUpdateForm
