import { sheetIndex } from "../constants/google-sheets";
import { getSheetData } from "../helper/google-sheets-api-mutator";

export async function getAllProducts() {
  return await getSheetData(sheetIndex.bouquets);
}

export async function getAllHampersItems() {
  return await getSheetData(sheetIndex.hampersItems)
}

export async function getAllHampersBoxes() {
  return await getSheetData(sheetIndex.hampersBoxes)
}

export async function getPrunedProducts() {
  const products = await getAllProducts();
  const types = [];
  const prunedProducts = products.filter(product => {
    if(types.includes(product.type)){
      return false;
    }
    types.push(product.type);
    return true;
  })
  return prunedProducts;
}

export async function getProductsByType(type){
  const products = await getAllProducts();
  return products.filter(product => product.type === type);
}

export async function getProductsById(id){
  const products = await getAllProducts();
  return products.find(product => product.id === id);
}