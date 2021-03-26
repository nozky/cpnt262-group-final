//  fetch() JSON data of members database to be used in a forEach() to display the team members

'use strict';

const endpoint = //  api/v0/members

fetch(endpoint)

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display pictures and bios of team
  .then( () => {

    // forEach() 

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });