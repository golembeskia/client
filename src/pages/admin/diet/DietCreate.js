import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createDiet,
  getDiets,
  removeDiet,
} from "../../../functions/diet";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DietForm from "../../../components/forms/DietForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const DietCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [diets, setDiets] = useState([]);

  //searching/filtering
  //step 1
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadDiets();
  }, []);

  const loadDiets = () =>
    getDiets().then((d) => setDiets(d.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createDiet({ name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadDiets();
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
      removeDiet(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadDiets();
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
  const searched = (keyword) => (d) => d.name.toLowerCase().includes(keyword);

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
            <h4>Create diet</h4>
          )}
          <DietForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          {/* step 2 and step 3 */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {/* step 5 */}
          {diets.filter(searched(keyword)).map((d) => (
            <div className="alert alert-dark" key={d._id}>
              {d.name}
              <span
                onClick={() => handleRemove(d.slug)}
                className="btn btn-sm float-end"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/diet/${d.slug}`}>
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

export default DietCreate;