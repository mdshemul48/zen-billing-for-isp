export default interface userInterface {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "reseller" | "employee";
}
