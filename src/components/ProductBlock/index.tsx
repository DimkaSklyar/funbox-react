import React from "react";
import classNames from "classnames";

import "./ProductBlock.scss";
import imageProduct from "../../assets/img/cat-photo.png";

export interface IProductProps {
  name: string;
  type: string;
  sizeDescription: string;
  count: number;
  size: string;
  nameFirm: string;
  description: string;
}

const ProductBlock: React.FC<IProductProps> = ({
  name,
  type,
  sizeDescription,
  count,
  size,
  description,
  nameFirm,
}) => {
  const productDesc: Array<string> = sizeDescription.split(",");

  const [activeItem, setActiveItem] = React.useState<boolean>(false);

  const handleClickItem = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!e.currentTarget.classList.contains("disabled")) {
      setActiveItem(!activeItem);
    }
  };

  return (
    <article className="productItem__wrapper">
      <div
        onClick={handleClickItem}
        className={classNames("productItem", {
          disabled: !count,
          default: !activeItem && count,
          selected: activeItem,
        })}
      >
        <h3 className="productItem__titleFirm">{nameFirm}</h3>
        <h2 className="productItem__title">
          {name}
          <span className="productItem__type">{type}</span>
        </h2>
        <p className="productItem__desc">
          {productDesc[0]} <br />
          {productDesc[1]} <br />
          {+size >= 5 ? "заказчик доволен" : ""}
        </p>
        <figure className="productItem__imageWrapper">
          <img src={imageProduct} alt="Product Image" />
        </figure>
        <div className="productItem__size">
          {size}
          <span>кг</span>
        </div>
      </div>
      <div className="actionDescription">
        <p>{count ? description : "Печалька с курой закончились"}</p>
      </div>
    </article>
  );
};

export default ProductBlock;
