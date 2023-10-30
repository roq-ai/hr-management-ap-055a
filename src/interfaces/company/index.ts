import { CustomerInterface } from 'interfaces/customer';
import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { OwnerInterface } from 'interfaces/owner';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  customer?: CustomerInterface[];
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  owner?: OwnerInterface[];

  _count?: {
    customer?: number;
    employee?: number;
    hr_manager?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  name?: string;
  tenant_id?: string;
}
