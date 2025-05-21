// TODO: End home page
import { useEffect, useState } from "react";
import { ProductPublic } from "../productData.type";
import ProductCard from "../Components/ProductCard";
import { CartItem } from "../App";

interface HomePageProps {
  cartData: CartItem[];
  setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
export default function HomePage({ cartData, setCartData }: HomePageProps) {
  const [productsList, setProductsList] = useState<ProductPublic[]>([]);
  useEffect(() => {
    const getProductsList = async () => {
      const req = await fetch("http://127.0.0.1:8000/products/");
      const resp = await req.json();
      setProductsList(resp);
    };
    getProductsList();
  }, []);

  // useEffect(() => {
  //   const cartJSON = localStorage.getItem("cart");
  //   if (cartJSON.length == 0) localStorage.setItem("cart", JSON.stringify([]));
  // }, []);

  return (
    <div className="flex">
      <div id="products-list" className="flex">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            cartData={cartData}
            setCartData={setCartData}
          />
        ))}
      </div>
      <aside className="flex flex-col justify-self-end">
        <h1>CREATE FILTER</h1>
      </aside>
    </div>
  );
}
