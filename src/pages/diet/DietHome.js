import React, { useState, useEffect } from 'react'
import { getDiet } from '../../functions/diet'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard'
import DietList from '../../components/diet/DietList'

const DietHome = ({ match }) => {
  const [diet, setDiet] = useState({})
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { slug } = match.params

  useEffect(() => {
    setLoading(true)
    getDiet(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4))
      setDiet(res.data.diet)
      setProducts(res.data.products)
      setLoading(false)
    })
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading
            ? (
            <h4 className="text-center p-3 mt-2 mb-2 display-7 jumbotron">
              Loading...
            </h4>
              )
            : (
            <h4
                style={{ backgroundColor: '#69c0ff', color: 'white' }}
              className="text-center p-3 mt-2 mb-2 display-7 jumbotron"
            >
              {products.length} Products in "{diet.name}" diet
            </h4>
              )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DietHome
