import axios from 'axios';

// const api = axios.create({baseURL:
//     `https://api.github.com/users/danilod30/repos`});

// export default api


// import axios from 'axios';
// async function getUserFromGithub(user) {
//     try {
//          const response = await axios.get(`https://api.github.com/users/${user}`);
//          console.log(response);
           
//     } catch (error) {
//         console.warn('Erro na API');
//     }
 
// }

// async function api(user) {
//         try {
//               const response = await axios.
//               get({baseURL:
//                 `https://api.github.com/users/${user}/repos`}).
//                 then( );
               
//                 console.log(response.data);
//              return response;
               
//          } catch (error) {
//              console.warn('Erro na API');
//          }
//     }
// export default api

// const buscaUsuario = async usuario => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${usuario}`);
//         console.log(response);
//     } catch (error) {
//         console.log('Usuário não existe');
//     }
// }

 const api = async user => {
     try {
        const response = await axios.get(
            `https://api.github.com/users/${user}/repos`);
            console.log(response);
            return response;
       } catch (error) {
        console.log('Usuário não existe');
     }
}
 export default api


// function searchUser(user){
//     // function renderLoading(loading) {
//          renderLoading();
//          axios.get('https://api.github.com/users/' + user + '/repos')
//              .then(function(response){
//                  renderLoadingOn(); 
//                 // resolve(JSON.parse(axios.responseText));
//                 var json = response.data;
//                 var myObj = json;
//                 console.log(myObj);
//                  //json.forEach(myFunction);
//                  var txt = '';
//                  for(j of json){