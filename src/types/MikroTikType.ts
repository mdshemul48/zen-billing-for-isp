interface MikroTikType {
  id: number;
  name: string;
  ip: string;
  username: string;
  password: string;
  port: number;
  remarks?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export default MikroTikType;
