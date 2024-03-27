import { User } from './User';

export interface UserApiResponse {
  data: User;
  support: {
    url: string;
    text: string;
  };
}
