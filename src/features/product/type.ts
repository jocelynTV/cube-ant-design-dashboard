export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  createdBy: string;
  status: string;
  createdAt: Date;
  image: string;
}

export interface ProductQuery {
  id?: string;
  department?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}
