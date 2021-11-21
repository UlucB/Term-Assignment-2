// ACIT 1620 - Set B - Assignment 2
// Created by: Luke Birol - A01294098
// Created: Nov 20, 2021

// Index Page 

function cleanUPIndex() {
    let main = document.getElementsByClassName('main');
    all_a = main[0].querySelectorAll('a')
    for (let i = 0; i < all_a.length; i++) {all_a[i].remove();};
}

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

// Create Page 

function cleanUpCreate() {
    let all = document.getElementsByClassName('contactedit');
    for (let i = 0; i < all.length; i) {all[i].remove();};
}

function renderCreate() {
    let main_class = document.getElementsByClassName('main');
    let main = main_class[0];
    // //two divs needed inside contactedit: contacting and form
    // **pretend there is an update here
    let contact_edit_node = document.createElement('div');
    contact_edit_node.classList.add('contactedit'); 

    //contactimg
    let contact_img_node = document.createElement('div');
    contact_img_node.classList.add('contactimg'); 
    let img_node = document.createElement('img');
    img_node.classList.add('profilepic');
    img_node.src="./img/profile.jpg";
    img_node.alt='Profile picture';
    contact_img_node.appendChild(img_node);
    contact_edit_node.appendChild(contact_img_node);

    //forms
    let form_div_node = document.createElement('div');
    form_div_node.classList.add('form');

    let forms_node = document.createElement('form');

    //name
    let name_container = document.createElement('div');
    name_container.classList.add('inputcontainer');

    let name_inp = document.createElement('input')
    name_inp.id='contactname';
    name_inp.type='text';
    name_inp.name='contactname';
    name_inp.placeholder='Contact Name';

    let name_button = document.createElement('button');
    name_button.id='extranamefield';
    name_button.classList.add('extrafield');
    name_button.name='extranamefield';
    let name_plus = document.createTextNode('+');
    
    name_button.appendChild(name_plus);
    name_container.appendChild(name_inp);
    name_container.appendChild(name_button);
    forms_node.appendChild(name_container);

    //phone
    let phone_container = document.createElement('div');
    phone_container.classList.add('inputcontainer');

    let phone_inp = document.createElement('input')
    phone_inp.id='contactphone';
    phone_inp.type='tel';
    phone_inp.name='contactphone';
    phone_inp.placeholder='Contact Phone';

    let phone_button = document.createElement('button');
    phone_button.id='extraphonefield';
    phone_button.classList.add('extrafield');
    phone_button.name='extraphonefield';
    let phone_plus = document.createTextNode('+');
    
    phone_button.appendChild(phone_plus);
    phone_container.appendChild(phone_inp);
    phone_container.appendChild(phone_button);
    forms_node.appendChild(phone_container);

    //address
    let address_container = document.createElement('div');
    address_container.classList.add('inputcontainer');

    let address_inp = document.createElement('input')
    address_inp.id='contactaddress';
    address_inp.type='text';
    address_inp.name='contactaddress';
    address_inp.placeholder='Contact Address';

    let address_button = document.createElement('button');
    address_button.id='extraaddressfield';
    address_button.classList.add('extrafield');
    address_button.name='extraaddressfield';
    let address_plus = document.createTextNode('+');
    
    address_button.appendChild(address_plus);
    address_container.appendChild(address_inp);
    address_container.appendChild(address_button);
    forms_node.appendChild(address_container);

    //email
    let email_container = document.createElement('div');
    email_container.classList.add('inputcontainer');

    let email_inp = document.createElement('input')
    email_inp.id='contactemail';
    email_inp.type='email';
    email_inp.name='contactemail';
    email_inp.placeholder='Contact Email';

    let email_button = document.createElement('button');
    email_button.id='extraemailfield';
    email_button.classList.add('extrafield');
    email_button.name='extraemailfield';
    let email_plus = document.createTextNode('+');
    
    email_button.appendChild(email_plus);
    email_container.appendChild(email_inp);
    email_container.appendChild(email_button);
    forms_node.appendChild(email_container);

    //bookend buttons
    let button_node = document.createElement('div');
    button_node.classList.add('buttons');

    let save_button = document.createElement('button');
    save_button.id= 'savecontact';
    save_button.classList.add('button', 'save');
    save_button.type= 'submit';
    save_button.name= 'savecontact';
    let save_text = document.createTextNode("Save Contact");
    save_button.appendChild(save_text);
    button_node.appendChild(save_button);

    let cancel_button = document.createElement('button');
    cancel_button.classList.add('button', 'cancel');
    cancel_button.id= 'cancel';
    cancel_button.classList.add('button', 'cancel');
    cancel_button.type= 'reset';
    cancel_button.name= 'cancel';
    let cancel_text = document.createTextNode("Cancel");
    cancel_button.appendChild(cancel_text);
    button_node.appendChild(cancel_button);

    forms_node.appendChild(button_node);
    form_div_node.appendChild(forms_node);
    contact_edit_node.appendChild(form_div_node);
    main.appendChild(contact_edit_node);
}

// /* Here is an example of a contact list array, with three contacts already populated */
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