import { axiosIntance } from '../config/AxiosConfig';

export const ProductoRepositorio = {
  getAllProducts: () => axiosIntance.get('http://localhost:5000/productos'),
};
