export default interface userInterface {
  id?: Number;
  name: String;
  email: String;
  password: String;
  role: "admin" | "reseller" | "employee";
}
