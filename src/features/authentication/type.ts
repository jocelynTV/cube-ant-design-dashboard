export interface SignInInput {
  remember: boolean;
  email: string;
  password: string;
}

export interface SignInOutput {
  token: string;
}

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface SignUpOutput {
  id: string;
  token: string;
}

export interface CheckInvalidTokenOutput {
  token: string;
  valid: boolean;
}

export interface VerifyAccountInput {
  key: string;
  code: string;
}

export interface VerifyAccountOutput {
  id: string;
  email: string;
  token: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface ForgotPasswordOutput {
  email: string;
  send: boolean;
}

export interface NewPasswordInput {
  password: string;
}

export interface NewPasswordOutput {
  changed: boolean;
}
