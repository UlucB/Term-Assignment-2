
// Index Page

// This is the page where you can see a list of index cards. To test these functions, try them on that page.

//     Create a function called cleanUpIndex that removes all of the DOM nodes that are unique to the Index page. This function takes no parameters.
function cleanUPIndex() {
    let all = document.getElementsByTagName('*');
    for (let i=0; i<all.length; i++) {all[i].remove();};
}

//     Create a function called createSingleIndex that creates a DOM node that represents a single index card for the Index page. This function will take in a single object, where that object represents a single contact (see examples below). It should output a DOM node. It does not need to attach the DOM node to the rest of the DOM.
function createSingleIndex(object) {
    let new_object = object[0];
    let create_node = new contact(new_object)
    return create_node;
}

//     Create a function called renderIndex that creates all of the DOM nodes that are unique to the Index page. This function will take in a single parameter, which is an array containing many contacts, each of which represents a single contact. An example array of contacts is provided below. But be warned, I will supply the array, and I may change the details, like how many contacts there are. Obviously the reason you wrote createSingleIndex is because I thought it would help you write this function. Unlike createSingleIndex, which just sort of creates some stuff in isolation, this function must actually put DOM nodes onto the web page.
function renderIndex(array) {
    document.querySelectorAll().createElement() 


}

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
]

// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpIndex() to delete all the index cards
//     call renderIndex(contactList) to put them all back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// View Page

// This is the page where we view a single contact that we created previously.

//     Create a function called cleanUpView that removes all of the DOM nodes that are unique to the View page. This function takes no parameters.
// let cleanUpView = document.
// //     Create a function called renderView that creates all of the DOM nodes that are unique to the View page. This function will take in a single parameter, which is an object that represents a single contact. Much like renderIndex, this function is reponsible for actually modifying the web page.
// let renderView = document.

// How you can tell it's working

// If you go to an index page, and you open the browser console, you should be able to:

//     call cleanUpView() to the part of the page that shows the individual contact
//     call renderView(contactList[0]) to put it back
//         the page should be exactly the same as it was before!
//     rinse and repeat

// Create Page

// I hope the pattern is pretty obvious at this point.

//     Create a function called cleanUpCreate that removes all of the DOM nodes that are unique to the Create page. This function takes no parameters.
//     Create a function called renderCreate that creates all of the DOM nodes that are unique to the Create page. This function will take in a single parameter, which is an object that represents a single contact. Much like renderIndex, this function is reponsible for actually modifying the web page.

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