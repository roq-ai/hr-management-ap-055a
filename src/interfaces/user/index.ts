import { CustomerInterface } from 'interfaces/customer';
import { OwnerInterface } from 'interfaces/owner';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  roq_user_id: string;
  locale: string;
  timezone: string;
  avatar_url: string;
  tenant_id: string;
  created_at: any;
  updated_at: any;

  customer: CustomerInterface[];
  owner: OwnerInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
