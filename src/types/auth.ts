export interface TLoggedInUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
}
