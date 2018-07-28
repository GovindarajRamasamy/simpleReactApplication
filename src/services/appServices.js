// import { Rx } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'
import 'whatwg-fetch';

const objects = {
    'fetchDate': '/test/getDate',
    'fetchTotal': '/test/',
    'fetchText': '/test/trimSpace'
}

const fetchServerResponse = (method, params) => {
    let url ='';
    let payload = '';
    if(method == 'fetchText'){
        url = objects[method];
        payload = { credentials: 'same-origin',method:'post', body:JSON.stringify(params),
        headers: {"Content-Type": "application/json; charset=utf-8" }, 
        };
    }else{
        url = params ? objects[method].concat(params.join('/')) : objects[method];
        payload = { credentials: 'same-origin',method:'get' };
    }
    return Observable.create((obs) => {
        fetch(url, payload)
        .then(response => (response.ok ?
            response.json().then(json => obs.next(json)).then(() => obs.complete()) :
            response.text().then(json => obs.error(new Error(`${response.status} ${response.statusText}: ${text}`)))))
            .catch(ex => obs.error(ex));
    });
};

export default{
    fetchServerResponse,
}