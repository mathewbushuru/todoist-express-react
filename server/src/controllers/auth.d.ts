import { Request } from "express";

// export interface RequestType extends Request {}
export interface AuthDataType {
  email: string;
  password: string;
}
