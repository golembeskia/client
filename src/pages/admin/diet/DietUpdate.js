import React, { useState, useEffect } from 'react'
import AdminNav from '../../../components/nav/AdminNav'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { updateDiet, getDiet } from '../../../functions/diet'
import DietForm from '../../../components/forms/DietForm'

const DietUpdate = ({ history, match }) => {
  const { user } = useSelector((state) => ({ ...state }))

  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadDiet()
  }, [])

  const loadDiet = () =>
    getDiet(match.params.slug).then((b) => setName(b.data.diet.name))

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name);
    setLoading(true)
    updateDiet(match.params.slug, { name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false)
        setName('')
        toast.success(`"${res.data.name}" is updated`)
        history.push('/admin/diet')
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        if (err.response.status === 400) toast.error(err.response.data)
      })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading
            ? (
            <h4 className="text-danger">Loading..</h4>
              )
            : (
            <h4>Update brand</h4>
              )}

           <DietForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          <hr />
        </div>
      </div>
    </div>
  )
}

export default DietUpdate
