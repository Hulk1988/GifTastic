//create a variable that holds on to topics in an array called topics.
// create a function "take in" (think function) the array and "creates" (dynamically creating things) dependant on an object.
// Remember definition of CORS, and resolve issues with it. Interview question typically.
// DOM document object model- document.ready document represents entire window that contains webpage. Header to footer
//model refers to thinking of our document as an object that means it contains methods, (.ready most common method) read from top to bottom, 
// document.ready means hey javascript, as soon as the page is ready, load this stuff. Once page is loaded only things on page will be listened for. Once you dynamically create something, it will not behave the same as regular objects do.
//interacting and working on dom is thought of as a front end dev skill. Backend refers tos ervers and databases. REST (representational State Transfer)keep my website and server separate from customers side. CORS cross origin resource comparision. HTTP in front of my website. If something is a sceure website, an insecure cannot speak to secure websites.


//array to hold our topics
var superArr = [
    "Superman", "Wolverine", "Ant-man", "Luke-Cage", "Dr.-Manhattan", "Spider-man", "Incredible-Hulk", "Agua-man", "batman"
]
createButtons();
//function to create buttons for our array AJAX requests are in strings.
//var superInd = superBtn.text()
//var ajaxUrl = "http://api.giphy.com/v1/gifs/search?q=" + superInd + "&api_key=JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB&limit=10"  // test by throwing url into chrome
//$.ajax({ //objects made up of methods, properties, and key value pairs
   // url: ajaxUrl,
    //method: "GET",


//})
   //.then(function (response) {//AJAX function, .then is a method which is a function that takes in a function. function i create inside .then will then run once a reponse is received from API.
        // results or response, the object that comes back from my request. Huge data response or result from pasting API URL.
       // createButton();
    //console.log(response.data)
    //})
//2 create buttons 

//create a function separate from AJAX request-- dynamically generates button 
function createButtons() {
    for (var i = 0; i < superArr.length; i++) {
        var superBtn = $();//'<button class="btn btn-info hero">'
        superBtn.text(superArr[i]);
        $("#super-heroes").append(superBtn);
    }
};
function getGifs(topic) {
    var ajaxUrl = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB&limit=10"  // test by throwing url into chrome
    $.ajax({ //objects made up of methods, properties, and key value pairs
        url: ajaxUrl,
        method: "GET",
    
    
    })
    //step 3 getting 10 images for topic that was clicked
        .then(function (response) {//AJAX function, .then is a method which is a function that takes in a function. function i create inside .then will then run once a reponse is received from API.
            // results or response, the object that comes back from my request. Huge data response or result from pasting API URL.
            //createButton();
            console.log(response.data)
            response.data.forEach(element => {// looping over array of objects response.data
            var newImg = $("<img>").attr("src", element.images["480w_still"].url);   
            $("#gifs").append(newImg);
            });
        })
//step 4- create click event handler for each button
$(".btn.hero").on("click", function() {
console.log("inClickHandler")
   var topic = $(this).text()
    getGifs(topic)
})
//figure out why buttons are not workin. 
}
    //create a click function on newly created buttons to erase text and bring back a gif. clcik function needs to teake text of button and AJAX call.
    //lines 17-37 AJAX function will live inside created click function
    //clicked button should generate 10 gifs, when user clicks gif first time, should animate, second time, should stop animation.

//research attributes/adding and removing attributes
// on click set attribute to physical gif to animate, once animated, change the source URL to animated gif from response data. Click again, sets gif attribute to not animated.
// use URL within reponse to set animation to none. Which URLs are these? move? stop? Different standard sizes for entire web page?
//inside click function on button, on search, need to append results from reponse.data. need gifs to append to page. Think looping through super array, loop response and append urls from page.
//append to page lines 30-35 example. dig through response data to find urls i want to use. 
// can create an attribute for button, .attribute you can set that equal to what you want to animate
      //create a form input for add superhero and grab whatever is in form and push it into super array
      //run your function that recreates buttons after someones added to the array.
// API Key: JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB
// read this.Form submit prevent default: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//API URL: http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
//var new =$("input").val()
      //read up on prevent default on form.

//AJAX allows you to preform asyncronis request from API. Request info to be sent back from a server.

//JSON javascript object notation

//CRUD operations--->
//CREATE some new data or a new things---
//READ git request---
//UPDATE updates URL.---
//DELETE OR DESTROY gets rid of data or thing---<

//concatinate DEF add two strings together.--> null, booleans, strings, operations, and numbers
