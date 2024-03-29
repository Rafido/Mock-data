import {getUsers, deleteUser} from './api/userApi';
// import { link } from 'fs';

getUsers().then(result => {
    let userBody ="";

    result.forEach(user => {
        // userBody += "<tr>
        // <td><a href='#' data-id='${user.id}' class='deleteUser'>Delete</a></td>
        // <td>${user.id}</td>
        // <td>${user.firstname}</td>
        // <td>${user.lastname}</td>
        // <td>${user.email}</td>
        // </tr>"
        userBody += '<tr><td><a href="#" data-id='+user.id+' class=deleteUser id=deleteUser>DELETE</a></td><td>'+user.id+'</td><td>'+user.firstName+'</td><td>'+user.lastName+'</td><td>'+user.email+'</td></tr>'
        // global.document.getElementById('users').innerHTML =userBody ;
    });

    global.document.getElementById('users').innerHTML =userBody ;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');
    console.log(deleteLinks);

    // console.log(element.attributes["data-id"].value);
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    })
})
