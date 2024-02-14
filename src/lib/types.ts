export type LoggedInUserData = {
  accessToken: string;
  profile: {
    adminId: string;
    email: string;
    fullName: string;
    isApproved: boolean;
    permissions: string[];
  };
  refreshToken: string;
};

export type RegisterData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type UserId = {
  bnpl_access: boolean;
  bnpl_monthly_limit: number;
  bnpl_performed_this_month: number;
  bvn_verified: boolean;
  city: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  _id: string;
};

export type Retailer = {
  _id: string;
  awaitingVerification: boolean;
  city: string;
  createdAt: string;
  createdDate: string;
  isFairshop: boolean;
  isVerified: boolean;
  name: string;
  picture: string[];
  state: string;
  updatedAt: string;
  userId: UserId;
};

export type RetailerGadget = {
  brandId: {
    _id: string;
    name: string;
  };
  categoryId: {
    name: string;
    _id: string;
  };
  costPrice: number;
  createdAt: string;
  description: string;
  gadgetCondition: string;
  isActive: boolean;
  isFairshop: boolean;
  name: string;
  negotiable: string;
  picture: string[];
  pictureNamePrefix: string;
  quantity: number;
  resalePrice: number;
  salesCount: number;
  storeId: {
    isFairShop: boolean;
    name: string;
    _id: string;
  };
  updatedAt: string;
  userId: string;
  vendorPrice: number;
  _id: string;
};

export type RetailerCustomer = {
  addresses: string;
  createdAt: string;
  email: string;
  name: string;
  phoneNumber: string;
  purchaseValue: number;
  storeId: string;
  totalPurchases: number;
  updatedAt: string;
  userId: string;
  _id: string;
};

export type RetailerSale = {
  customerId: {
    _id: string;
    name: string;
    phoneNumber: string;
    purchaseValue: number;
    totalPurchases: number;
  };
  createdAt: string;
  productId: string;
  costPrice: number;
  quantity: number;
  soldPrice: number;
  storeId: string;
  soldDate: string;
  updatedAt: string;
  userId: string;
  _id: string;
  brandId: string;
};

export type Brand = {
  createdAt: string;
  itemCount: number;
  updatedAt: string;
  _id: string;
  name: string;
};

export type category = {
  createdAt: string;
  itemCount: number;
  updatedAt: string;
  name: string;
  _id: string;
};

export type Bnpl = {
  approvalDeadline: string;
  approved: false;
  bvn: string;
  completed: boolean;
  createdAt: string;
  enrolled: boolean;
  enrollmentInitiated: boolean;
  gadgetPrice: number;
  initialDeposit: number;
  linkedLoans: [];
  linkedUsers: [];
  loanAmount: number;
  loanExtraCharge: number;
  loanInterest: number;
  loanPeriod: number;
  loanStatus: string;
  monthlyAmount: number;
  phoneNumber: string;
  productId: {
    name: string;
    picture: string[];
    rejectedReason: string;
    _id: string;
  };
  storeId: {
    city: string;
    name: string;
    state: string;
    _id: string;
  };
  totalOwed: number;
  updatedAt: string;
  userId: {
    city: string;
    firstName: string;
    lastName: string;
    otherName: string;
    phoneNumber: string;
    state: string;
    _id: string;
  };
  verifiedNumber: boolean;
  _id: string;
};

export type BnplAnalytic = {
  _id: string;
  count: number;
};
