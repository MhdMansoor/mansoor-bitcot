import React from "react";
import ProductForm from "../../Components/ProductForm";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <ProductForm isEdit={id} />
    </div>
  );
};

export default EditProduct;
