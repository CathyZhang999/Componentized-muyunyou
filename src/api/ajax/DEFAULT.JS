import{CONTENT_TYPE_FORM_URLENCODED} from './constants.js'

const defaults = {
  method: "get",
  respondType: "",
  data: null,
  params: null,
  contentType: CONTENT_TYPE_FORM_URLENCODED,
  timeoutTime: 0,
  withCredentials: false,

  success() {},
  HttpCodeError() {},
  error() {},
  timeout() {},
  abort() {},
};

export default defaults