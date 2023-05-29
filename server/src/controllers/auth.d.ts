import { Request } from "express";

// export interface SignupRequestType extends Request {}
export interface AuthDataType {
  email: string;
  password: string;
}
