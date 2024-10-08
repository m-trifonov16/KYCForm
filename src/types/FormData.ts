import { Asset } from "./Asset";

export interface FormData {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    citizenship: string;
    passportId: string;
    passportValidity: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    zipCode: string;
    country: string;
    state: string;
    email: string;
    mobilePhone: string;
    businessPhone: string;
    fax: string;
    preferredContactMethod: string;
    maritalStatus: string;
    dependentAdults: number;
    dependentChildren: number;
    employmentStatus: string;
    companyName: string;
    occupation: string;
    yearsEmployed: number;
    employerCountry: string;
    sourcesOfIncome: string[];
    annualIncome: number;
    incomeCurrency: string;
    assets: Asset[];
    liabilities: Asset[];
    sourceOfWealth: string[];
    currentFundingSources: string[];
    expectedFundingSources: string[];
    initialFundingCountries: string[];
    ongoingFundingCountries: string[];
    notes: string;
    consents: string[];
    documents: Record<string, any[]>;
  }