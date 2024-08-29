import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TNewsArt = {
  id: number;
  title: string;
  bodyText: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
};

export const getNewsArt = async () => {
  return (
    await axiosClient.get<TResponseTableData<TNewsArt[]>>(
      `http://79.174.85.156:5001/api/newsArt`
    )
  ).data;
};

export const deleteNewsArt = async (id: number) => {
  return (
    await axiosClient.delete(`http://79.174.85.156:5001/api/newsArt/${id}`)
  ).data;
};

export const createNewsArt = async (body: TNewsArt) => {
  return (
    await axiosClient.post(`http://79.174.85.156:5001/api/newsArt`, { body })
  ).data;
};
