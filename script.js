const quotes = [
    "Sometimes life is like this dark tunnel. You can not always see the light at the end of the tunnel, but if you just keep moving...you will come to a better place",
"When you are in your darkest place, you give youself hope, that is the meaning of inner strength.",
"Life happens wherever you are, whether you make it or not.",
"Sometimes the best way to solve your own problems is to help someone else.",
"There is nothing wrong with letting people who love you, help you."
];
//creates array of five quotes


const userNum = parseInt(prompt("Enter a number divisible by 5:"));

//prompts user for number


const remainder = userNum % 5;
document.getElementById("quote").innerText = quotes[remainder];
//gets remainder and displays proper quote

    
let FavSites = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.Mars.com"
];
//array of sites

let siteList = "";
FavSites.forEach(website => {
    siteList += `<a href="${website}" target="_blank">${website}</a><br>`;
});
document.getElementById("websites").innerHTML = siteList;
//Displays sites array as working links


const userSite = prompt("Enter your favorite website URL:");
FavSites.push(userSite);
//prompt user for fav site and adds to array

FavSites.shift();
//deletes first site from array

siteList = "";
FavSites.forEach(website => {
    siteList += `<a href="${website}" target="_blank">${website}</a><br>`;
});
document.getElementById("websites").innerHTML = siteList;
//displays as working links