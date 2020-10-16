export interface IProduct {
  id: string;
  name: string;
  type: string;
  sizeDescription: string;
  count: number;
  size: string;
  description: string;
}

export interface IProductProps extends IProduct {
  nameFirm: string;
}

export interface IProductDescriptionProps {
  count: number;
  description: string;
  onClickByOrder: Function;
  activeItem: boolean;
  type: string;
}

export interface IProductList extends Array<IProduct> {};
