import axios, {AxiosPromise} from 'axios';
import { useQuery } from "react-query";
import { queryTypes } from "../Types/queryTypes";
import { apiResponse } from "../Types/apiResponse";


const data = ({ page, rows, sort, order }: queryTypes) => {
  return `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sort}&orderBy=${order}`;
};

const fetcher = async () => {
  return await axios.get<apiResponse>(data({ page: 1, rows: 8, sort: 'id', order: 'DESC' }))
  .then((response) => response.data)
}

export function useProducts(){
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })

  return {data: data?.products}
}