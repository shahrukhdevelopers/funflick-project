import { atom } from 'jotai';

export const cartSlidingPane = atom<boolean>(false);
export const ProfileSlidingPane = atom<boolean>(false);
export const CustomerMobileNumber = atom<string>('');
export const UserResponse = atom<any>({});
export const headersearchvalue=atom<string>('')
export const filtershowvalues = atom<string>('');
export const Genderfilter = atom<string>('');
export const Maximumretailpricefilter = atom<string>('');
export const datashowvaluetotal=atom<string>('')
export const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzgxZGZlYTYyNTFlNGE0MmI3NDEwYyIsImlhdCI6MTczMjMzNzgyNiwiZXhwIjoxNzYzODczODI2fQ.ScHpoy2Hcx9E_1Nh_BO9HQYuW6RSNfCy3nL7p175XlE";