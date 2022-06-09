export default class userInterface {
  readonly id?: number;
  readonly name!: string;
  email!: string;
  password!: string;
  role!: "admin" | "reseller" | "employee";
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
