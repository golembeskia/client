import axios from 'axios'

export const getDiets = async () =>
  await axios.get(`${process.env.REACT_APP_API}/diets`)

export const getDiet = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/diet/${slug}`)

export const removeDiet = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/diet/${slug}`, {
    headers: {
      authtoken
    }
  })

export const updateDiet = async (slug, diet, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/diet/${slug}`, diet, {
    headers: {
      authtoken
    }
  })

export const createDiet = async (diet, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/diet`, diet, {
    headers: {
      authtoken
    }
  })
