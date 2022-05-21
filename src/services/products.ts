import firestore from '@react-native-firebase/firestore'
import { PRODUCTS_COLLECTION_NAME } from '../global/constants'
import { nextChar } from '../global/utils'
const PRODUCTS_COLLECTION_REF = firestore().collection(PRODUCTS_COLLECTION_NAME)
const CATEGORIES_COLLECTION_REF = firestore().collection('categories')
const getAllProducts = async () => {
  const products = await PRODUCTS_COLLECTION_REF.get()
  return products.docs.map((doc) => doc.data())
}

const getPoductsByCategory = async (category: string) => {
  const products = await PRODUCTS_COLLECTION_REF.where(
    'categories',
    'array-contains',
    category
  ).get()
  return products.docs.map((doc) => doc.data())
}

const getProductByDocumentId = async (id: string) => {
  const product = await PRODUCTS_COLLECTION_REF.doc(id).get()
  if (product.exists) {
    return product.data()
  } else {
    return null
  }
}

const searchProductsByName = async (nameQ: string) => {
  if (nameQ.length === 0) {
    return getAllProducts()
  }
  const lt = nameQ.slice(0, nameQ.length - 1) + nextChar(nameQ.slice(-1))
  const products = await PRODUCTS_COLLECTION_REF.where('name', '<', lt)
    .where('name', '>=', nameQ)
    .orderBy('name', 'asc')
    .get()
  return products.docs.map((doc) => doc.data())
}

const getCategories = async () => {
  const categories = await CATEGORIES_COLLECTION_REF.get()
  return categories.docs.map((doc) => doc.data())
}

export default {
  getAllProducts,
  getPoductByCategory: getPoductsByCategory,
  getProductByDocumentId,
  searchProductsByName,
  getCategories,
}
