const URL_BACKEND =  window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://apijobs4all.herokuapp.com';


export default {
    URL_BACKEND,
};