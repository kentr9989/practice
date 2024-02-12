import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products", category);
    setProduct(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
