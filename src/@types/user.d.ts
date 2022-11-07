export type UserAuthType = {
  email: string;
  password: string;
};

export type UserType = {
  name: string;
  email: string;
};

export type DataType = {
  token: string;
  user: UserType;
};
