// api models

// model for User
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// model for Address
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// model for Geo
export interface Geo {
  lat: string;
  lng: string;
}

// model for Company

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
