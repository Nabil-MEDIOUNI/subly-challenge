export type DataType = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type AxiosDataType = {
  data: DataType[];
};
