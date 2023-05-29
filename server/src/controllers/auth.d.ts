import { Request } from "express";

// export interface SignupRequestType extends Request {}
export interface SignupRequestType {
  email: string;
  password: string;
}
