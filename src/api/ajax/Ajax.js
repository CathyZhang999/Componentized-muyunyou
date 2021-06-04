import {
  CONTENT_TYPE_FORM_URLENCODED,
  CONTENT_TYPE_JSON,
} from "./constants.js";
import { serialize, serializeJSON, addUrlData } from "./util.js";
import defaults from './DEFAULT.js'
class Ajax {
  constructor(url, options) {
    this.url = url;
    this.options = Object.assign({}, defaults, options);
    this.init();
  }
  init() {
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
    this.bindEvent();
    //   this.getMethod()

    xhr.open(this.options.method, this.url + this.addParams(), true);
    this.setResponseType();   
    this.setTimeout();
    this.setCookie();
    this.sendData();
  }
  bindEvent() {
    const xhr = this.xhr;
    const { success, HttpCodeError, Error, abort, timeout } = this.options;
    this.xhr.addEventListener(
      "load",
      () => {
        if (this.isOk()) {
          success(xhr.response);
        } else {
            HttpCodeError(this.xhr.status);
        }
      },
      false
    );
    this.xhr.addEventListener(
      "error",
      () => {
        Error(this.xhr);
      },
      false
    );
    this.xhr.addEventListener(
      "timeout",
      () => {
        timeout(this.xhr);
      },
      false
    );
    this.xhr.addEventListener(
      "abort",
      () => {
        abort(this.xhr);
      },
      false
    );
  }
  isOk() {
    
    if (this.xhr.status >= 200 && this.xhr.status < 300 || this.xhr.status == 304) {
      return true;
    }
  } 
  addParams() {
    const { params } = this.options;
    if (!params) return "";
    const data = serialize(params);
    return addUrlData(this.url, data);
  }
  // setMethod(){
  //     this.method = (this.options.respondType).toLowerCase();
  // }
  setResponseType() {
    this.xhr.responseType = this.options.responseType;
  }
  setCookie() {
    if (this.options.withCredential) {
      this.xhr.withCredential = true;
    }
  }

  setTimeout() {
    const { timeoutTime } = this.options;
    if (timeoutTime > 0) {
      this.xhr.timeout = timeoutTime;
    }
  }

  isSendData() {
    if (!this.options.data) return false;
    if (this.options.method.toLowerCase() == "get") return false;
    return true;
  }
  isFormData() {
    if (this.options.data instanceof FormData) {
      resultData = data;
    }
  }
  setContentType(contentType = this.options.contentType) {
    if (!contentType) return;
    this.xhr.setRequestHeader("Content-Type", contentType);
  }

  sendData() {
    if (!this.isSendData()) {
      return this.xhr.send(null);
    }
    let resultData = null;
    const { data } = this.options;
    if (this.options.data instanceof FormData) {
      resultData = data;
    } else if (
      this.options.contentType
        .toLowerCase()
        .includes(CONTENT_TYPE_FORM_URLENCODED)
    ) {
      this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
      resultData = serialize(data);
    } else if (this.options.contentType.includes(CONTENT_TYPE_JSON)) {
      this.setContentType(CONTENT_TYPE_JSON);
      resultData = serializeJSON(data);
    } else {
      this.setContentType();
      resultData = data;
    }
    this.xhr.send(resultData);
  }

  getXHR() {
    return this.xhr;
  }
}

export default Ajax