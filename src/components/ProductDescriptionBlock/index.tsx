import React from "react";

import { IProductDescriptionProps } from "../../interfaces";

const ProductDescriptionBlock: React.FC<IProductDescriptionProps> = ({
  count,
  description,
  onClickByOrder,
  activeItem,
  type,
}) => {
  const onClickItem = (e: React.MouseEvent<HTMLElement>) => {
    onClickByOrder(e);
  };

  return (
    <div className="actionDescription">
      {!activeItem && count ? (
        <p>
          Чего сидишь? Порадуй котэ, <span onClick={onClickItem}>купи.</span>
        </p>
      ) : (
        <p>{count ? description : `Печалька ${type} закончились`}</p>
      )}
    </div>
  );
};

export default ProductDescriptionBlock;
