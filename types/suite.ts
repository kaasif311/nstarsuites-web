export type SuiteStatus = "available" | "leased";

export type Suite = {
  id: string;
  number: string;
  size: number;
  monthlyRent: number;
  status: SuiteStatus;
  featured?: boolean;
  image: string;
  description: string;
};