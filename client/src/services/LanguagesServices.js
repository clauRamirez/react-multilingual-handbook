const baseURL = "http://localhost:5001/api/languages";

 

const LanguagesService = {
   
    getLanguages(){
    return fetch(baseURL)
    .then(res => res.json());
    }

  
    // postGame(payload) {
    //   return fetch(baseURL, {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: { 'Content-Type': 'application/json'}
    //   })
    //   .then(res => res.json())
    // },
  
    // deleteGame(id) {
    //   return fetch(baseURL + id, {
    //     method: 'DELETE'
    //   })
    // }
  }
  
  export default LanguagesService


