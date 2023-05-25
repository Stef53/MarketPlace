const useList = (product) => {
  let thisProduct = []
  if(product.currentPage === 'favorite'){
    return thisProduct = product.favoriteProducts
  } else{
    const firstProduct = product.limit * (product.page - 1) - 1
    const lastProduct = product.limit * product.page 
  
    if(product.selectedCategory.name === 'all categories'){
      thisProduct = product.products.filter((el) => {
        return (firstProduct < product.products.indexOf(el)) && (product.products.indexOf(el) < lastProduct)
      })
    } else {
      thisProduct = product.categoryProducts.filter((el) => {
        return (firstProduct < product.categoryProducts.indexOf(el)) && (product.categoryProducts.indexOf(el) < lastProduct)
      })
    }
    return thisProduct
  }
}

export default useList