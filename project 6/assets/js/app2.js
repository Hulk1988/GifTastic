//create a variable that holds on to topics in an array called topics.
//array to hold our topics
var superArr = [
    "Superman",
    "Wolverine",
    "Ant-man",
    "Luke-Cage",
    "Dr.-Manhattan",
    "Spider-man",
    "Incredible-Hulk",
    "Aqua-man",
    "batman",
    "Black-Lightning",
    "Green-Lantern",
    "The-Punisher",
    "Dare-Devil",
    "Iron-Fist",
    "Deadpool",
    "Black-Panther",
    "Thor",
    "Captain-America",
    "Wonder-Woman",
    "Green-Arrow",
    "Dr.-Strange"

]
createButtons(superArr, "hero", "#super-heroes");


function createButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();// makes sure that second button isn't added to same place. no overlapping
    for (var i = 0; i < arrayToUse.length; i++) {//for loop
        var superBtn = $("<button>");// declares a button and adds a class to it.
        superBtn.addClass(classToAdd);
        superBtn.attr("data-type", arrayToUse[i]);
        superBtn.text(arrayToUse[i]);
        $(areaToAddTo).append(superBtn);
    }
};
getGifs("Tarzan");
function getGifs(topic) {
    // create an object that holds the main address and second part is the API key
    // write the ajax into a for loop
    let addressKeys = [];
    let address1 = {
       mainAddress: "http://api.giphy.com/v1/gifs/search?q=",
        api_key: "&api_key=JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB&limit=10"
    };
    addressKeys.push(address1);
    let address2 = {
        mainAddress: "http://api.giphy.com/v1/gifs/search?q=",
        api_key: "&api_key=JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB&limit=10"
    };
    addressKeys.push(address2);
    console.log("address keys: " + addressKeys);
    for (let i = 0; i < addressKeys.length; i++) {
        var ajaxURL = addressKeys[i].mainAddress + topic + addressKeys[i].api_key;
        console.log("ajax url is: ", ajaxURL);
        $.ajax({ 
            url: ajaxURL,
            method: "GET",
    
    
        })
    
            //step 3 getting 10 images for topic that was clicked
            .then(function (response) {
                console.log(response.data)
                console.log(response.ratings)
                response.data.forEach(element => {// looping over array of objects response.data
                    var newImg = $("<img>").attr("src", element.images["480w_still"].url);
                    var p =$('<p/>');
                    p.text(JSON.stringify(response.rating));
                    $("#gifs").append(newImg);
                    $("#gifs").append(p);
                });
            })
    }

    
    $(".btn.hero").on("click", function () {
        console.log("inClickHandler")
        var topic = $(this).text()
        getGifs(topic)
    })
    $.ajax({ //objects made up of methods, properties, and key value pairs
        url: ajaxURL,
        method: "GET"
    })

   
   /* 5. Under every gif, display its rating (PG, G, so on).
    * This data is provided by the GIPHY API.
    * Only once you get images displaying with button presses should you move on to the next step.
 
 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.*/
}
  





