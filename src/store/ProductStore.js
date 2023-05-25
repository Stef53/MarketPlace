import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._categories = [
      {id: 0, name: 'all categories'},
      {id: 1, name: "men's clothing"},
      {id: 2, name: "women's clothing"},
      {id: 3, name: "jewelery"},
      {id: 4, name: "electronics"},
    ]
    this._products = []
    this._categoryProducts = []
    this._selectedCategory = {id: 0, name: 'all categories'}
    this._page = 1
    this._totalCount = 0
    this._limit = 8
    this._filters = [
      {name: 'Alfabeticaly', value: 'title'},
      {name: 'By price', value: 'price'},
    ]
    this._selectedFilter = {name: 'Default', value: '0'}
    this._basketProducts = []
    this._favoriteProducts = []
    this._searchValue = ''

    makeAutoObservable(this)
  }

  setCategories(categories){
    this._categories = categories
  }
  setProducts(products){
    this._products = products
  }
  setCategoryProducts(categoryProducts){
    this._categoryProducts = categoryProducts
  }
  setSelectedCategory(categories){
    this._selectedCategory = categories
  }
  setPage(page){
    this._page = page
  }
  setTotalCount(count){
    this._totalCount = count
  }
  setLimit(limit){
    this._limit = limit
  }
  setSelectedFilter(filters){
    this._selectedFilter = filters
  }
  setDeleteBasketProducts(basketProducts){
    this._basketProducts.splice(this._basketProducts.indexOf(basketProducts), 1)
  }
  setAddBasketProducts(basketProducts){
    this._basketProducts.push(basketProducts)
  }
  setFavoriteProducts(favoriteProducts){
    this._favoriteProducts = favoriteProducts
  }
  setAddFavoriteProducts(favoriteProducts){
    this._favoriteProducts.push(favoriteProducts)
  }
  setDeleteFavoriteProducts(favoriteProducts){
    this._favoriteProducts.splice(this._favoriteProducts.indexOf(favoriteProducts), 1)
  }
  setSearchValue(searchValue){
    this._searchValue = searchValue
  }

  get categories(){
    return this._categories
  }
  get products(){
    return this._products
  }
  get categoryProducts(){
    return this._categoryProducts
  }
  get selectedCategory(){
    return this._selectedCategory
  }
  get totalCount(){
    return this._totalCount
  }
  get page(){
    return this._page
  }
  get limit(){
    return this._limit
  }
  get filters(){
    return this._filters
  }
  get selectedFilter(){
    return this._selectedFilter
  }
  get basketProducts(){
    return this._basketProducts
  }
  get favoriteProducts(){
    return this._favoriteProducts
  }
  get searchValue(){
    return this._searchValue
  }
}