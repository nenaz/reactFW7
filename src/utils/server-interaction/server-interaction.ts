import { getCurrentAuthorizationToken } from '@/modules/auth';

export const Send = (name: string, params = {}, type = 'POST') => {
  const serverUrl = 'http://127.0.0.1:5000/';
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, serverUrl + name, true);
    xhr.onprogress = (event) => { }
    xhr.setRequestHeader('Content-Type', 'application/json');
    const webToken = getCurrentAuthorizationToken();
    if (name !== 'newUser' && name !== 'authUser' && name !== 'setPass' && webToken) {
      console.log('webToken', webToken)
      xhr.setRequestHeader('Authorization', webToken);
    }
    xhr.timeout = 15000;
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
      } else if (this.status === 401) {
        const obj = {
          result: false,
          statusText: this.statusText,
          status: this.status
        }
        resolve(obj);
      } else {
        const error = new Error(this.statusText);
        // error.code = this.status;
        reject(error);
      }
    };
    xhr.ontimeout = function () {
      const obj = {
        result: false,
        statusText: "Time out error",
        status: this.status || 504,
      }
      resolve(obj);
    }
    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };
    xhr.send(JSON.stringify(params));
  });
}
