export interface FailedRequestResponse {
  data: FailedRequestResponseData;
  status: 'fail';
}

export interface FailedRequestResponseData {
  fields?: string[];
  headers?: string[];
  reason: string;
}
