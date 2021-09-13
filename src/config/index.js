const URL_BACKEND =  window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://jobs4alljobs.herokuapp.com';


export default {
    URL_BACKEND,
};