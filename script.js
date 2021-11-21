// ACIT 1620 - Set B - Assignment 2
// Created by: Luke Birol - A01294098
// Created: Nov 20, 2021

// Index Page 

function cleanUPIndex() {
    let main = document.getElementsByClassName('main');
    all_a = main[0].querySelectorAll('a')
    for (let i = 0; i < all_a.length; i++) {all_a[i].remove();};
}
// ^^^This seems to be what the question is asking for. By keeping div.main, this allows renderIndex(array) to dump in new indicies without cleanUpIndex() being run first; the new cards are appened to already-existing div.main instead of using a new div.main.

function createSingleIndex(single_object) {
    let new_a = document.createElement('a');
    new_a.href="page3.html";
    let contact_node = document.createElement('div');
    contact_node.classList.add('contact'); 
    let name = document.createTextNode(single_object);
    let new_p = document.createElement('p');
    new_p.appendChild(name);
    contact_node.appendChild(new_p);
    new_a.appendChild(contact_node);
    return new_a
}

function renderIndex(array) {
    let main_div=document.getElementsByClassName('main')

    for (let i=0; i<array.length; i++) {
        let new_a = createSingleIndex(array[i]['name'])
        main_div[0].appendChild(new_a);
    }
}

// function vanilla_renderIndex(array) {
//     let main_div=document.getElementsByClassName('main')

//     for (let i=0; i<array.length; i++) {
//         let new_a = document.createElement('a');
//         new_a.href="page3.html";
//         main_div[0].appendChild(new_a);
//         let contact_node = document.createElement('div');
//         contact_node.classList.add('contact'); 
//         let name = document.createTextNode(array[i]['name']);
//         let new_p = document.createElement('p');
//         new_p.appendChild(name);
//         contact_node.appendChild(new_p);
//         new_a.appendChild(contact_node);
//     }
// }

// View Page

function cleanUpView() {
    let main = document.getElementsByClassName('main');
    all_div = main[0].querySelectorAll('div');
    for (let i = 0; i < all_div.length; i++) {all_div[i].remove();};
}

function renderView(single_contact) {
    let contact_info_node = document.createElement('div');
    contact_info_node.classList.add('contactinfo'); 

    // name + image
    let name_img_node = document.createElement('div');
    name_img_node.classList.add('contactname'); 

    let name = document.createTextNode(single_contact['name']);
    name_img_node.appendChild(name);
    
    let image = document.createElement('img');
    image.classList.add('profilepic');
    image.src = "./img/profile.jpg";
    image.alt = "Profile picture";
    name_img_node.appendChild(image);

    contact_info_node.appendChild(name_img_node);

    //email
    let email_node = document.createElement('div');
    email_node.classList.add('contactemail'); 
    let email = document.createTextNode("email: " + single_contact['email']);
    email_node.appendChild(email);
    contact_info_node.appendChild(email_node);

    // phone
    let phone_node = document.createElement('div');
    phone_node.classList.add('contactphone'); 
    let phone = document.createTextNode("cell: +1 " + single_contact['phone']);
    phone_node.appendChild(phone);
    contact_info_node.appendChild(phone_node);

    // address
    let address_node = document.createElement('div');
    address_node.classList.add('contactaddress'); 
    let address = document.createTextNode("address: " + single_contact['address']);
    address_node.appendChild(address);
    contact_info_node.appendChild(address_node);

    let main_class = document.getElementsByClassName('main');
    let main = main_class[0];

    //buttons
    let button_node = document.createElement('div');
    button_node.classList.add('buttons');

    let edit_button = document.createElement('button');
    edit_button.classList.add('button', 'edit');
    edit_button.value= "Edit";
    let edit = document.createTextNode("Edit");
    edit_button.appendChild(edit);
    button_node.appendChild(edit_button);

    let close_button = document.createElement('button');
    close_button.classList.add('button', 'close');
    close_button.value= "Close";
    let close = document.createTextNode("Close");
    close_button.appendChild(close);
    button_node.appendChild(close_button);

    contact_info_node.appendChild(button_node);

    //append all of the above into div.main
    main.appendChild(contact_info_node);
}

// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpView() to the part of the page that shows the individual contact
//     call renderView(contactList[0]) to put it back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// Create Page (page2)

// I hope the pattern is pretty obvious at this point.

// //     Create a function called cleanUpCreate that removes all of the DOM nodes that are unique to the Create page. This function takes no parameters.
function cleanUpCreate() {
    let all = document.getElementsByClassName('contactedit');
    for (let i = 0; i < all.length; i) {all[i].remove();};
}

// }
// //     Create a function called renderCreate that creates all of the DOM nodes that are unique to the Create page. This function will take in a single parameter, which is an object that represents a single contact. Much like renderIndex, this function is reponsible for actually modifying the web page.


function renderCreate(single_contact) {
    return single_contact


}



// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpCreate() to delete the form and all the inputs and so on
//     call renderCreate() to put it all back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// Grading

// So you should have written 7 functions for this. Each function will be graded on a 2-point scale, for a total of 14 points for functionality.

//     2 points for flawless
//     1 point for mostly working but not flawless
//     0 points for not really working

// There will be an additional 3 points for code clarity, style, layout, variable names, etc.

//     3 points: it is presentable to a professional standard
//     2 points: minor lapses
//     1 points: this looks like you did not make an effort
//     0 points: vomiting noises

// There will be 2 points for good git commit history, including branching at least once, merging at least once, good commit messages (no more "first commit" nonsense), not all commited at once.

//     2 points: multi-commits present, merge present, no stupid commit messages
//     1 point: tolerable but weak
//     0 points: one single tear

// That's a total of 19 points, because nice round numbers are overrated.
// Submission

// Push to your new GitHub repo (i.e. for A2 do not re-use your A1 repo), and put a link in the D2L dropbox. I will expect to see the file script.js right in the top-level directory of the main branch of your repo (can we all use main, just so I can write scripts to get the marks back faster, please).
// Optional

// If you want to take it farther, here's what didn't make the cut for this assignment. You could obviously add another page called Edit that looks just like Create, and for that page create another set of functions for editing. It's sort of the same as the Create page, but it takes in an existing contact object, and pre-populates all the fields. It also would say "Update" or something on the button, instead of "Save".

// No, I'm not promising any bonus marks for this, mostly because it makes the marking a mess. The bonus is in your heart.

// /* Here is an example of a contact list array, with two contacts already populated */
let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
      {
      name: "Jessica Rabbit",
      phone: "236-420-6969",
      address: "Patty-Cake, Toontown, USA",
      email: "imnotbad@imjustdrawn.thisway.com",
    }, 
  ]