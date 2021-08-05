import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createIngredient,
  getIngredients,
  removeIngredient,
} from "../../../functions/ingredient";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import IngredientForm from "../../../components/forms/IngredientForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const IngredientCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  //searching/filtering
  //step 1
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadIngredients();
  }, []);

  const loadIngredients = () =>
    getIngredients().then((b) => setIngredients(b.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createIngredient({ name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadIngredients();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeIngredient(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadIngredients();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  //step 4
  const searched = (keyword) => (b) => b.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Create ingredient</h4>
          )}
          <IngredientForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          {/* step 2 and step 3 */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {/* step 5 */}
          {ingredients.filter(searched(keyword)).map((b) => (
            <div className="alert alert-dark" key={b._id}>
              {b.name}
              <span
                onClick={() => handleRemove(b.slug)}
                className="btn btn-sm float-end"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/ingredient/${b.slug}`}>
                <span className="btn btn-sm float-end">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientCreate;