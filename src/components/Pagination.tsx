import React from "react";
import "./pagination.scss";
interface pageAndLimit {
  page: number;
  limit: number;
}

export const Pagination = () => {
  const [query, setQuery] = React.useState<string>("");
  const [pagin, setPagin] = React.useState<pageAndLimit>({ page: 1, limit: 2 });
  const [products, setProducts] = React.useState<any[]>();
  const getInfo = async (query: string, limit: number, skip: number) => {
    const result = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${query}`
    );
    const data = await result.json();
    if (data.products) {
      return data.products;
    }
  };

  const nextPage = (page: number): void => {
    setPagin({ page: ++page, limit: pagin.limit });
  };

  const prevPage = (page: number): void => {
    setPagin({ page: --page, limit: pagin.limit });
  };
  const limitChange = (limit: number): void => {
    setPagin({ page: pagin.page, limit: limit });
  };
  React.useEffect(() => {
    getInfo(query, pagin.limit, pagin.limit * pagin.page).then((data) =>
      setProducts(data)
    );
  }, [pagin, query]);

  return (
    <>
      <div className="wrapper-input">
        PAGINATION
        <input
          className="inputForm1"
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <div className="pagination-cards-wrapper">
        {products?.map((item: any) => {
          return (
            <div className="pagination-card">
              <div>ID: {item.id}</div>
              <div>NAME: {item.title}</div>
              <div>$ {item.price}</div>
            </div>
          );
        })}
      </div>

      <span>{pagin.page}</span>
      <button className="btn" onClick={() => prevPage(pagin.page)}>
        Prev
      </button>
      <label>Items per page: </label>
      <input
        className="number-input"
        type="number"
        onChange={(event) => {
          limitChange(Number(event.target.value));
        }}
      />
      <button className="btn" onClick={() => nextPage(pagin.page)}>
        Next
      </button>
    </>
  );
};
