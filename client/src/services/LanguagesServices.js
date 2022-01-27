const baseURL = "http://localhost:5001/api/languages";

 

const LanguagesService = {
   
    getLanguages(){
    return fetch(baseURL)
    .then(res => res.json());
    }
    
  }
  
  export default LanguagesService


