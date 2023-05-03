import React from "react";
import "./myquery.scss";
import { CardProduct, ICardProduct } from "./CardProduct";

export const Query = () => {
  const [query, setQuery] = React.useState<string>("");
  const [products, setProducts] = React.useState<ICardProduct[]>([]);

  const getInfo = async (query: string) => {
    const result = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const data = await result.json();
    if (data.products) {
      return data.products;
    }
  };

  React.useEffect(() => {
    if (query.length > 2) {
      getInfo(query).then((data) => setProducts(data));
    }
  }, [query]);

  return (
    <>
      <div className="light">
        <span>QUERY</span>
        <input
          className="inputForm"
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>

      <div className="block-wrapper">
        {products.map((item) => (
          <CardProduct
            images={item.images}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};
