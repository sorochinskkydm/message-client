export interface IUser {
  id: string;
  name: string;
  surname: string;
  position: string;
  isAdmin: boolean;
  birthDate: Date;
  photoPath: string;
  username: string;
  email: string;
  password: string;
  publicKey: string;
  privateKey: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  photoPath: string;
  adminId: string;
  employees: String[];
  dateCreated: Date;
}
