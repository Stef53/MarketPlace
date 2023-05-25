import { $host } from "."

export const fetchCategoryProducts = async (categoryName) => {
  const {data} = await $host.get('/category/' + categoryName)
  return data
}

export const fetchProducts = async () => {
  const {data} = await $host.get('')
  return data
}

export const fetchOneProduct = async (id) => {
  const {data} = await $host.get('/'+id)
  return data
}