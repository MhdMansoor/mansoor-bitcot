import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from "../../data/productList";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: ProductList,
  },
  reducers: {
    addProduct: (state, action) => {
      let item = action.payload;
      state.productList.push(item);
    },
    editProduct: (state, action) => {
      const { id, formValues } = action.payload;
      console.log(formValues);
      const productIndex = state.productList.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state["productList"][productIndex] = { ...formValues };
      }
    },
    clearProduct: (state, action) => {
      let productId = action.payload;
      let filteredProducts = state.productList.filter((product) => {
        return product.id !== productId;
      });
      state.productList = filteredProducts;
    },
  },
});

export const { addProduct, editProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
