// TODO: End home page
import { useEffect, useState } from "react";
import { ProductPublic } from "../productData.type";
import ProductCard from "../Components/ProductCard";
export default function HomePage() {
  const [productsList, setProductsList] = useState<ProductPublic[]>([]);
  useEffect(() => {
    const getProductsList = async () => {
      const req = await fetch("http://127.0.0.1:8000/products/");
      const resp = await req.json();
      setProductsList(resp);
    };
    getProductsList();
  }, []);
  return (
    <div>
      <h1>HomePage</h1>
      <div id="products-list" className="flex">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>

      {/* <button
        className="border border-black w-32 h-16"
        onClick={getProductsList}
      > */}
      {/* click
      </button> */}
    </div>
  );
}
