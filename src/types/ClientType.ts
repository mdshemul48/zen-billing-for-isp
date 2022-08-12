interface ClientType {
  id: number;

  userid: string;
  password: string;
  billingCycle: number;
  billingDate: Date;
  clientStatus: "active" | "inactive" | "suspended" | "pending";

  name: string;
  address?: string;
  phone?: string;

  fatherName?: string;
  motherName?: string;

  nid?: string;
  birthDate: Date;

  createdAt: Date;
  updatedAt: Date;
}
