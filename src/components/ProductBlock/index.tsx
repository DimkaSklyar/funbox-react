import React from "react";
import classNames from "classnames";

import { IProductProps } from "../../interfaces";

import ProductDescriptionBlock from "../ProductDescriptionBlock";

import imageProduct from "../../assets/img/cat-photo.png";
import "./ProductBlock.scss";

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

  const handleClickItem = (e: React.MouseEvent<HTMLElement>): void => {
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
          {+size >= 5 && "заказчик доволен"}
        </p>
        <figure className="productItem__imageWrapper">
          <img src={imageProduct} alt="Product" />
        </figure>
        <div className="productItem__size">
          {size}
          <span>кг</span>
        </div>
      </div>
      <ProductDescriptionBlock
        description={description}
        count={count}
        type={type}
        onClickByOrder={handleClickItem}
        activeItem={activeItem}
      />
      <div className="decor"></div>
    </article>
  );
};

export default ProductBlock;
