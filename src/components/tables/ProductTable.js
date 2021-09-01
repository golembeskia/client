// import React, { useState } from "react";
// import { Table, Input, Button, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";

// const ProductTable = () => {

//   const data = [
//     {
//       name: "Adam",
//       age: 10,
//       address: "Charlotte",
//       key: "1",
//     },
//     {
//       name: "Tim",
//       age: 20,
//       address: "Royal Oak",
//       key: "2",
//     },
//     {
//       name: "Rex",
//       age: 30,
//       address: "Detroit",
//       key: "3",
//     },
//   ];

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "key",
//       filters: [
//         {
//           text: "Adam",
//           value: "Adam",
//         },
//         {
//           text: "Tim",
//           value: "Tim",
//         },
//         {
//           text: "Rex",
//           value: "Rex",
//         },
//       ],
//       onFilter: (value, record) => record.name.indexOf(value) === 0,
//       sorter: (a, b) => {return a.name.localeCompare(b.name)},
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "key",
//       sorter: (a, b) => a.age - b.age,
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "key",
//       filters: [
//         {
//           text: "Charlotte",
//           value: "Charlotte",
//         },
//         {
//           text: "Royal Oak",
//           value: "Royal Oak",
//         },
//         {
//           text: "Detroit",
//           value: "Detroit",
//         },
//       ],
//       onFilter: (value, record) => record.address.indexOf(value) === 0,
//       sorter: (a, b) => {return a.address.localeCompare(b.address)}
//     },
//   ];

//   return (
//     <>
//       {/* <div>TEST TABLE SECTION</div> */}
//       <Table dataSource={data} columns={columns}></Table>
//     </>
//   );
// };

// export default ProductTable;

// import React, { Component } from "react";
// import { Table, Input, Button, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";

// import laptop from "../../images/placeholder.png";
// import ModalImage from "react-modal-image";

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Joe Black",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Jim Green",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];

// class ProductTable extends Component {
//   state = {
//     searchText: "",
//     searchedColumn: "",
//   };

//   getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//     }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={(node) => {
//             this.searchInput = node;
//           }}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() =>
//             this.handleSearch(selectedKeys, confirm, dataIndex)
//           }
//           style={{ marginBottom: 8, display: "block" }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => this.handleReset(clearFilters)}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({ closeDropdown: false });
//               this.setState({
//                 searchText: selectedKeys[0],
//                 searchedColumn: dataIndex,
//               });
//             }}
//           >
//             Filter
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex]
//         ? record[dataIndex]
//             .toString()
//             .toLowerCase()
//             .includes(value.toLowerCase())
//         : "",
//     onFilterDropdownVisibleChange: (visible) => {
//       if (visible) {
//         setTimeout(() => this.searchInput.select(), 100);
//       }
//     },
//     render: (text) =>
//       this.state.searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
//           searchWords={[this.state.searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ""}
//         />
//       ) : (
//         text
//       ),
//   });

//   handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     this.setState({
//       searchText: selectedKeys[0],
//       searchedColumn: dataIndex,
//     });
//   };

//   handleReset = (clearFilters) => {
//     clearFilters();
//     this.setState({ searchText: "" });
//   };

//   render() {
//     const columns = [
//         {
//             title: "Image",
//             dataIndex: "ImageURL",
//             render: theImageURL => <ModalImage small={laptop} large={laptop} />,
//             width:"20px",
//           },
//         {
//         title: "Price",
//         dataIndex: "name",
//         key: "name",
//         width: "30%",
//         filters: [
//           {
//             text: "Joe Black",
//             value: "Joe Black",
//           },
//           {
//             text: "John Brown",
//             value: "John Brown",
//           },
//           {
//             text: "Jim Green",
//             value: "Jim Green",
//           },
//           {
//             text: "Jim Red",
//             value: "Jim Red",
//           },
//         ],
//         onFilter: (value, record) => record.name.indexOf(value) === 0,
//         sorter: (a, b) => {
//           return a.name.localeCompare(b.name);
//         },
//         ...this.getColumnSearchProps("name"),
//       },
//       {
//         title: "Categories",
//         dataIndex: "age",
//         key: "age",
//         width: "20%",
//         ...this.getColumnSearchProps("age"),
//         sorter: (a, b) => a.age - b.age,
//       },
//       {
//         title: "Brands",
//         dataIndex: "address",
//         key: "address",
//         filters: [
//             {
//               text: "New York No. 1 Lake Park",
//               value: "New York No. 1 Lake Park",
//             },
//             {
//               text: "London No. 1 Lake Park",
//               value: "London No. 1 Lake Park",
//             },
//             {
//               text: "Sidney No. 1 Lake Park",
//               value: "Sidney No. 1 Lake Park",
//             },
//             {
//               text: "London No. 2 Lake Park",
//               value: "London No. 2 Lake Park",
//             },
//           ],
//         ...this.getColumnSearchProps("address"),
//         sorter: (a, b) => {
//             return a.address.localeCompare(b.address);
//           },
//         // sortDirections: ["descend", "ascend"],
//       },
//       {
//         title: "Diets",
//         dataIndex: "name",
//         key: "name",
//         width: "30%",
//         filters: [
//           {
//             text: "Joe Black",
//             value: "Joe Black",
//           },
//           {
//             text: "John Brown",
//             value: "John Brown",
//           },
//           {
//             text: "Jim Green",
//             value: "Jim Green",
//           },
//           {
//             text: "Jim Red",
//             value: "Jim Red",
//           },
//         ],
//         onFilter: (value, record) => record.name.indexOf(value) === 0,
//         sorter: (a, b) => {
//           return a.name.localeCompare(b.name);
//         },
//         ...this.getColumnSearchProps("name"),
//       },
//       {
//         title: "Rating",
//         dataIndex: "name",
//         key: "name",
//         width: "30%",
//         filters: [
//           {
//             text: "Joe Black",
//             value: "Joe Black",
//           },
//           {
//             text: "John Brown",
//             value: "John Brown",
//           },
//           {
//             text: "Jim Green",
//             value: "Jim Green",
//           },
//           {
//             text: "Jim Red",
//             value: "Jim Red",
//           },
//         ],
//         onFilter: (value, record) => record.name.indexOf(value) === 0,
//         sorter: (a, b) => {
//           return a.name.localeCompare(b.name);
//         },
//         ...this.getColumnSearchProps("name"),
//       },
//     ];
//     return <Table columns={columns} dataSource={data} />;
//   }
// }

// export default ProductTable;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Tooltip } from 'antd'
import {
  EyeOutlined,
  ShoppingCartOutlined,
  SyncOutlined
} from '@ant-design/icons'
import _ from 'lodash'
import ModalImage from 'react-modal-image'
import laptop from '../../images/placeholder.png'
import { showAverage } from '../../functions/ratingTable'
import ProductTableChart from './ProductTableAd'

const ProductTable = ({ product }) => {
  const [tooltip, setTooltip] = useState('Click to add')
  const [products, setProducts] = useState([])
  // redux
  // const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // create cart array
    let cart = []
    if (typeof window !== 'undefined') {
      // if cart is in local storage GET it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1
      })
      // remove duplicates
      const unique = _.uniqWith(cart, _.isEqual)
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem('cart', JSON.stringify(unique))
      // show tooltip
      setTooltip('Added')

      // add to redux state
      dispatch({
        type: 'ADD_TO_CART',
        payload: unique
      })
      // show car items in side drawer
      dispatch({
        type: 'SET_VISIBLE',
        payload: true
      })
    }
  }

  const handleAddToCompare = () => {
    // create compare array
    let compare = []
    if (typeof window !== 'undefined') {
      // if cart is in local storage GET it
      if (localStorage.getItem('compare')) {
        compare = JSON.parse(localStorage.getItem('compare'))
      }
      // push new product to compare
      compare.push({
        ...product,
        count: 1
      })
      // remove duplicates
      const unique = _.uniqWith(compare, _.isEqual)
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem('compare', JSON.stringify(unique))
      // show tooltip
      setTooltip('Added')

      // add to redux state
      dispatch({
        type: 'ADD_TO_COMPARE',
        payload: unique
      })
      // show compare items in side drawer
      // dispatch({
      //   type: "SET_VISIBLE",
      //   payload: true,
      // });
    }
  }

  const {
    images,
    title,
    description,
    slug,
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
    diet
  } = product

  const showTable = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col" style={{ width: '280px' }}>
            <td>
              <div
                style={{
                  width: '100px',
                  height: 'auto',
                  float: 'left',
                  paddingRight: '10px'
                }}
              >
                {product.images.length
                  ? (
                  <ModalImage
                    small={product.images[0].url}
                    large={product.images[0].url}
                  />
                    )
                  : (
                  <ModalImage small={laptop} large={laptop} />
                    )}
              </div>
              <a>{product.title}</a>
              <div>
                {product && product.ratings && product.ratings.length > 0
                  ? (
                      showAverage(product)
                    )
                  : (
                  <a className="text-left pt-1 pb-3">No rating yet</a>
                    )}
              </div>
              <a>
                <Link to={`/product/${slug}`}>
                  <EyeOutlined
                    className="text-warning"
                    style={{ paddingRight: '10px' }}
                  />
                </Link>
              </a>
              <a>
                <Tooltip title={tooltip}>
                  <a onClick={handleAddToCart}>
                    <ShoppingCartOutlined
                      className="text-danger"
                      style={{ paddingRight: '10px' }}
                    />
                  </a>
                </Tooltip>
              </a>
              <a>
                <Tooltip title={tooltip}>
                  <a onClick={handleAddToCompare}>
                    <SyncOutlined
                      className="text-success"
                      style={{ paddingRight: '5px' }}
                    />
                  </a>
                </Tooltip>
              </a>
            </td>
          </th>
          <th scope="col" style={{ width: '90px', paddingBottom: '50px' }}>
            Price<td>${product.price}</td>
          </th>
          <th scope="col" style={{ width: '130px', paddingBottom: '50px' }}>
            Serving Size<td>{product.servingsize}</td>
          </th>
          <th scope="col" style={{ width: '90px', paddingBottom: '50px' }}>
            Calories<td>{product.calories}</td>
          </th>
          <th scope="col" style={{ width: '90px', paddingBottom: '50px' }}>
            Carbs<td>{product.carbohydrates}</td>
          </th>
          <th scope="col" style={{ width: '90px', paddingBottom: '50px' }}>
            Fat<td>{product.fat}</td>
          </th>
          <th scope="col" style={{ width: '90px', paddingBottom: '50px' }}>
            Protein<td>{product.protein}</td>
          </th>
          {/* <th scope="col" style={{ width: "90px", paddingBottom: "50px" }}>
            Trans Fat<td>{product.transfat}</td>
          </th>
          <th scope="col" style={{ width: "90px", paddingBottom: "50px" }}>
            Cholesterol<td>{product.cholesterol}</td>
          </th>
          <th scope="col" style={{ width: "90px", paddingBottom: "50px" }}>
            Sodium<td>{product.sodium}</td>
          </th> */}
        </tr>
      </thead>
    </table>

    // const showTable = () => (

    //   <table className="table table-bordered">
    //     <thead className="thead-light">
    //       <tr>
    //         <th scope="col">Product</th>
    //         <th scope="col">Price</th>
    //         <th scope="col">Calories</th>
    //         <th scope="col">Carbohydrates</th>
    //       </tr>
    //     </thead>
    //     {products.map((p) => (
    //       <ProductTableChart key={p._id} product={p} />
    //     ))}
    //   </table>
  )

  return showTable()
}

export default ProductTable
