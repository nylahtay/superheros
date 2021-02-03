

/*CREATE THE NAV */
//navigation items  (['Title', 'link', 'name'])
let menu_items = [['Home', '/index.html', 'home'],['About', '/about.html', 'about'], ['Sign the Petition', '/petition.html', 'petition']];
//create nav element
const nav = document.createElement('nav');
//create innerDiv elemtn
let innerDiv = document.createElement('div');
innerDiv.classList.add('inner');
let navUL = document.createElement('ul');
let sublist = document.createElement('ul');
//create the menu items
for (i=0; i<menu_items.length; i++){
    let menuItemLI = document.createElement('li');
    let menuItemA = document.createElement('a');
    menuItemA.href = menu_items[i][1];
    menuItemA.classList.add('navbar');
    menuItemA.innerHTML = menu_items[i][0];
    //add class for hamburger menu items
    if (menu_items[i][2] != 'home'){
        menuItemA.classList.add('notMain');
        let sublistLI = document.createElement('li');
        sublistLI.appendChild(menuItemA);
        sublist.appendChild(sublistLI);
    }
    else {
        menuItemLI.appendChild(menuItemA);
    }
    navUL.appendChild(menuItemLI);
    menuItemLI.appendChild(sublist);
}
sublist.classList.add('sublist');
//create the logo
const logoContainer = document.createElement('div');
const logoImg = document.createElement('img');
logoImg.src = "img/logo.png";
logoContainer.classList.add('logo');
logoContainer.appendChild(logoImg);
//add Logo to NAV
nav.appendChild(logoContainer);
//add UL to NAV
nav.appendChild(navUL);

innerDiv.appendChild(nav);
const header = document.getElementsByTagName('header')[0];
header.appendChild(innerDiv);
/* END CREATE THE NAV */