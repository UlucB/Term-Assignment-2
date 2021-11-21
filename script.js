// Index Page

//     Create a function called cleanUpIndex that removes all of the DOM nodes that are unique to the Index page. This function takes no parameters.

function cleanUPIndex() {
    let main = document.getElementsByClassName('main');
    all_a = main[0].querySelectorAll('a')
    for (let i = 0; i < all_a.length; i++) {all_a[i].remove();};
}
// ^^^This seems to be what the question is asking for. By keeping div.main, this allows renderIndex(array) to dump new index without cleanUpIndex() being run first; the new cards are appened to already-existing div.main instead of using a new div.main.

//     Create a function called createSingleIndex that creates a DOM node that represents a single index card for the Index page. This function will take in a single object, where that object represents a single contact (see examples below). It should output a DOM node. It does not need to attach the DOM node to the rest of the DOM.
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

//     Create a function called renderIndex that creates all of the DOM nodes that are unique to the Index page. This function will take in a single parameter, which is an array containing many contacts, each of which represents a single contact. An example array of contacts is provided below. But be warned, I will supply the array, and I may change the details, like how many contacts there are. Obviously the reason you wrote createSingleIndex is because I thought it would help you write this function. Unlike createSingleIndex, which just sort of creates some stuff in isolation, this function must actually put DOM nodes onto the web page.

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
]

// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpIndex() to delete all the index cards
//     call renderIndex(contactList) to put them all back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// View Page

// This is the page where we view a single contact that we created previously.

// //     Create a function called cleanUpView that removes all of the DOM nodes that are unique to the View page. This function takes no parameters.
function cleanUpView() {
    let all = document.getElementsByClassName('contactinfo');
    for (let i = 0; i < all.length; i) {all[i].remove();};
}

// } 
// // //     Create a function called renderView that creates all of the DOM nodes that are unique to the View page. This function will take in a single parameter, which is an object that represents a single contact. Much like renderIndex, this function is reponsible for actually modifying the web page.
// function renderView(single_contact) {
//     let para = document.querySelectorAll('p')
//     return para, single_contact
// } 

// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpView() to the part of the page that shows the individual contact
//     call renderView(contactList[0]) to put it back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// Create Page

// I hope the pattern is pretty obvious at this point.

// //     Create a function called cleanUpCreate that removes all of the DOM nodes that are unique to the Create page. This function takes no parameters.
function cleanUpCreate() {
    let all = document.getElementsByClassName('contactedit');
    for (let i = 0; i < all.length; i) {all[i].remove();};
}

// }
// //     Create a function called renderCreate that creates all of the DOM nodes that are unique to the Create page. This function will take in a single parameter, which is an object that represents a single contact. Much like renderIndex, this function is reponsible for actually modifying the web page.
// function renderCreate(single_contact) {
//     return single_contact


// }



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