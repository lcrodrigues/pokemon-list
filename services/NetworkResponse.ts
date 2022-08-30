export type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export type ResponseKind = "success" | "failure";
