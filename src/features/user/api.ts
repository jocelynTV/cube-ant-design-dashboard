import { faker } from '@faker-js/faker';
import {
  UserUpdatePasswordInput,
  UserInfo,
  UserUpdatePasswordOutput,
  UserAddNewInput
} from './type';
import { delay } from 'utils';

const userInfoApi = async (): Promise<UserInfo> => {
  await delay();
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: faker.location.city(),
    cover: faker.image.urlLoremFlickr({ category: 'natural' }),
    avatar: faker.image.avatarGitHub(),
    bio: faker.lorem.paragraph(),
    gender: faker.person.sex(),
    jobDescriptor: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    time: faker.date.recent({ days: 10 }),
    status: faker.helpers.arrayElement(['OPEN', 'PENDING'])
  };
};

const userListApi = async (): Promise<UserInfo[]> => {
  await delay();
  return Array.from(Array(100), () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: faker.location.city(),
    cover: faker.image.urlLoremFlickr({ category: 'natural' }),
    avatar: faker.image.avatarGitHub(),
    bio: faker.lorem.paragraph(),
    gender: faker.person.sex(),
    jobDescriptor: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    time: faker.date.recent(),
    status: faker.helpers.arrayElement([
      'OPEN',
      'PENDING',
      'PROCESSING',
      'SUCCESS'
    ])
  }));
};

const userAddNewApi = async (data: UserAddNewInput): Promise<UserInfo> => {
  await delay();
  return {
    ...data,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: faker.location.city(),
    cover: faker.image.urlLoremFlickr({ category: 'natural' }),
    avatar: faker.image.avatarGitHub(),
    bio: faker.lorem.paragraph(),
    gender: faker.person.sex(),
    jobDescriptor: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    time: faker.date.recent(),
    status: faker.helpers.arrayElement([
      'OPEN',
      'PENDING',
      'PROCESSING',
      'SUCCESS'
    ])
  };
};

const userDeleteApi = async (data: UserAddNewInput): Promise<UserInfo> => {
  await delay();
  return {
    ...data,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: faker.location.city(),
    cover: faker.image.urlLoremFlickr({ category: 'natural' }),
    avatar: faker.image.avatarGitHub(),
    bio: faker.lorem.paragraph(),
    gender: faker.person.sex(),
    jobDescriptor: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    time: faker.date.recent(),
    status: faker.helpers.arrayElement([
      'OPEN',
      'PENDING',
      'PROCESSING',
      'SUCCESS'
    ])
  };
};

const userUpdateBasicApi = async (values: UserInfo): Promise<UserInfo> => {
  await delay();
  return {
    ...values,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: faker.location.city(),
    cover: faker.image.urlLoremFlickr({ category: 'natural' }),
    avatar: faker.image.avatarGitHub(),
    bio: faker.lorem.paragraph(),
    gender: faker.person.sex(),
    jobDescriptor: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    time: faker.date.recent(),
    status: faker.helpers.arrayElement([
      'OPEN',
      'PENDING',
      'PROCESSING',
      'SUCCESS'
    ])
  };
};

const userUpdatePasswordApi = async (
  data: UserUpdatePasswordInput
): Promise<UserUpdatePasswordOutput> => {
  await delay();
  return {
    ...data,
    changed: true
  };
};

export {
  userInfoApi,
  userListApi,
  userAddNewApi,
  userDeleteApi,
  userUpdateBasicApi,
  userUpdatePasswordApi
};
