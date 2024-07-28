import React, { useEffect, useState } from "react";
import Product from "../components/product";
import Spinner from "../components/Spinner";

const Home = () => {
  const Api_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      let response = await fetch(Api_URL);
      let data = await response.json();

      setItems(data);
    } catch (error) {
      console.log("Error: " + error);
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data available</p> 
        </div>
      )}
    </div>
  );
};

export default Home;
