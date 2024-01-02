export interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  cover: string;
  avatar: string;
  bio: string;
  gender: string;
  jobDescriptor: string;
  jobTitle: string;
  time: Date;
  status: string;
}

export interface UserUpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
}

export interface UserUpdatePasswordOutput {
  changed: boolean;
}

export interface UserAddNewInput {
  name: string;
  email: string;
}
