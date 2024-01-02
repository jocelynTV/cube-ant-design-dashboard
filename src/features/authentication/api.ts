import { faker } from '@faker-js/faker';
import {
  CheckInvalidTokenOutput,
  ForgotPasswordInput,
  ForgotPasswordOutput,
  NewPasswordInput,
  NewPasswordOutput,
  SignInInput,
  SignInOutput,
  SignUpInput,
  SignUpOutput,
  VerifyAccountInput,
  VerifyAccountOutput
} from './type';
import { delay } from 'utils';

const signInApi = async (values: SignInInput): Promise<SignInOutput> => {
  await delay();
  return {
    ...values,
    token: faker.string.nanoid()
  };
};

const signOutApi = async (): Promise<{ signout: boolean }> => {
  return {
    signout: true
  };
};

const signUpApi = async (values: SignUpInput): Promise<SignUpOutput> => {
  await delay();
  return {
    ...values,
    id: faker.string.uuid(),
    token: faker.string.nanoid()
  };
};

const checkInvalidTokenApi = async (
  token: string
): Promise<CheckInvalidTokenOutput> => {
  await delay();
  return {
    token,
    valid: true
  };
};

const verifyAccountApi = async (
  values: VerifyAccountInput
): Promise<VerifyAccountOutput> => {
  await delay();
  return {
    ...values,
    id: faker.string.uuid(),
    email: faker.internet.email(),
    token: faker.string.nanoid()
  };
};

const forgotPasswordApi = async (
  values: ForgotPasswordInput
): Promise<ForgotPasswordOutput> => {
  await delay();
  return {
    ...values,
    email: faker.internet.email(),
    send: true
  };
};

const newPasswordApi = async (
  values: NewPasswordInput
): Promise<NewPasswordOutput> => {
  await delay();
  return {
    ...values,
    changed: true
  };
};

export {
  signOutApi,
  signInApi,
  signUpApi,
  checkInvalidTokenApi,
  verifyAccountApi,
  forgotPasswordApi,
  newPasswordApi
};
