import React from "react";

import { IProduct, IProductList } from "./interfaces";

import ProductBlock from "./components/ProductBlock";

import "./App.scss";
import DB from "./assets/db.json";

function App() {
  const [productsList, setProductsList] = React.useState<IProductList | null>(
    null
  );

  React.useEffect(() => {
    setProductsList(DB[0].firm[0].products);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="productList">
          {productsList &&
            productsList.map((product: IProduct) => (
              <ProductBlock
                key={product.id}
                {...product}
                nameFirm={DB[0].firm[0].name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
