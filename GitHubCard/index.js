
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//code at bottom of page 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

import axios from 'axios';
console.log(axios);
const axdata = axios.get("https://api.github.com/users/jcsnider431")
.then((res)=>{
  const data = res.data;
  console.log(data);
});
// .catch((err)=>{
//   console.log(err);
// });

function card(object){
const cardDiv = document.createElement('div');
const img = document.createElement('img');
const infoDiv= document.createElement('div');
const header = document.createElement('h3');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
const link = document.createElement('a');
const para4 = document.createElement('p');
const para5 = document.createElement('p');
const para6 = document.createElement('p');
cardDiv.classList.add('card');
infoDiv.classList.add('card-info');
header.classList.add('name');
para1.classList.add('username');


img.src = object.data.avatar_url;
header.textContent = object.data.name;
para1.textContent = object.data.login;
para2.textContent = `Location: ${object.data.location}`;
para3.textContent ='Profile: ';
link.textContent = object.data.html_url;
para4.textContent = `Followers: ${object.data.followers}`;
para5.textContent = `Following: ${object.data.following}`;
para6.textContent = `Bio: ${object.data.bio}`;


cardDiv.appendChild(img);
cardDiv.appendChild(infoDiv);
infoDiv.appendChild(header);
infoDiv.appendChild(para1);
infoDiv.appendChild(para2);
infoDiv.appendChild(para3);
para3.appendChild(link);
infoDiv.appendChild(para4);
infoDiv.appendChild(para5);
infoDiv.appendChild(para6);

return cardDiv;

}


const cards = document.querySelector('.cards');
axios.get("https://api.github.com/users/jcsnider431")
.then((res)=>{
  const newCard = card(res);
  cards.appendChild(newCard);
})
followersArray.forEach(person =>{
  axios.get(`https://api.github.com/users/${person}`)
  .then((result)=> {
    cards.appendChild(card(result));
  })
 

})