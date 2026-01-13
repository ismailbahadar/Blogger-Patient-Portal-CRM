
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  isPrivate: boolean;
}

export interface PatientFormData {
  mustahiq_name: string;
  f_name: string;
  cnic: string;
  cell_no: string;
  gender: string;
  age: string;
  lzc_id: string;
  address: string;
  istehqaq_no: string;
  category: string;
  disease_type: string;
  dhq_id: string;
  hospital_id: string;
  amount: string;
  thqAmount?: string;
  bhuAmount?: string;
  otherDHQAmount?: string;
  budget: string;
  year: string;
  installment: string;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}
