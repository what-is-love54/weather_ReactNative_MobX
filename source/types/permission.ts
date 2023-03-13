/** @format */

export type CheckLocationAccuracyParams = {
  onGranted?: () => void;
  onBlocked?: () => void;
  onDenied?: () => void;
};

export type LocationAccuracyOptions = {
  purposeKey?: string;
};

export type CheckPermission = {
  type: any;
  onGranted?: () => void;
  onBlocked?: () => void;
  onDenied?: () => void;
};

export type RequestPermission = {
  type: any;
  // onGranted?: () => void;
  // onBlocked?: () => void;
  // onDenied?: () => void;
};
