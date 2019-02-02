$(document).ready(function() {
    var superArr = [
      "Superman",
      "Wolverine",
      "Luke-Cage",
      "Dr.-Manhattan",
      "Spider-man",
      "Incredible-Hulk",
      "Batman",
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
      "Dr.-Strange"
    ];
    //global variable to contain newly added hero
    var newHeroAdd = $("#gif-input").val();
    function createButtons(arrayToUse, classToAdd, areaToAddTo) {
      $(areaToAddTo).empty(); // makes sure that second button isn't added to same place. no overlapping
      for (var i = 0; i < arrayToUse.length; i++) {
        //for loop
        var superBtn = $("<button>"); // declares a button and adds a class to it.
        superBtn.addClass(classToAdd);
  
        superBtn.attr("data-type", arrayToUse[i]);
        superBtn.text(arrayToUse[i]);
        $(areaToAddTo).append(superBtn);
      }
    }
  
    $(document).on("click", ".hero", function() {
      event.preventDefault();
      $("#gifs").empty();
      console.log(topic);
      var topic = $(this).attr("data-type");
      // getGifs(topic)
      var ajaxURL =
        "http://api.giphy.com/v1/gifs/search?q=" +
        topic +
        "&api_key=JLKVkOubXp7JHVvmT7IcnIpOsGVAPXlB&limit=10";
      $.ajax({
        url: ajaxURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.data);
        console.log(response.ratings);
        response.data.forEach(element => {
          // forEach loop
          // looping over array of objects response.data -arrow function. Functional programming.
          var newImg = $("<img>");
          newImg.attr("src", element.images["480w_still"].url);
          newImg.attr("id", element.id);
          newImg.attr("data-animation", element.images["original"].url);
          newImg.attr("data-still", element.images["480w_still"].url);
          newImg.attr("data-state", "still");
          newImg.attr("class", "secondImg");
          var p = $("<p/>");
          p.text(JSON.stringify(element.rating)); //look into rating object
          $("#gifs").append(newImg);
          $("#gifs").append(p);
        });
        $(document).on("click", ".secondImg", function() {
          //this refers to newImg
          var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animation"));
            $(this).attr("data-state", "animated");
          } else {
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"));
          }
        });
      });
    });
  
    $("#theButton").on("click", function() {
      event.preventDefault();
      newHeroAdd = $("#gif-input").val();
      console.log(newHeroAdd);
      superArr.push(newHeroAdd);
      createButtons(superArr, "hero", "#super-heroes");
      console.log(superArr);
    });
    createButtons(superArr, "hero", "#super-heroes");
  });
  //6. Add a form to your page takes the value from a user input box and adds it into your `topics` array.
  //Then make a function call that takes each topic in the array remakes the buttons on the page.
  // getGifs(topic);
  //want to grab userinput and push the value from the userForm into the array
  // done inside a form button submit--- event.preventDefault() --
  //prevent submit from doing its default function of connecting to a database, which isn't there and would cause it to refresh page
  // this event would cause DOM to reload. Hence preventDefault function...
  
  //Tutoring notes 12-28-18
  //for step 4, add an onclick function with conditional logic. Based on attributes, which I'll add to the images.
  //add animate attribute. So you'll have animated url for gifs. ID recommendation
  //on click function, when clicked potentially want to remove attribute for making image still.
  //inside for loop add all image attributes. This will prevent scope issues.
  //can add as many attributes as is necessary and can be named whatever I wish.
  //all logic can be created in my onclick function.
  //Lastly, go back and clean up commented out stuff with the address keys.
  //Review scope to help with this AJAX project.  Look at lines 68-.then for AJAX call syntax.
  // review this statements.
  
  // $.ajax({ //objects made up of methods, properties, and key value pairs
  //     url: ajaxURL,
  //     method: "GET"
  //console.log(topic);
  
  //getGifs("Tarzan");
  //function getGifs(topic) {
  
  //step 1
  // for (let i = 0; i < addressKeys.length; i++) {
  //     var ajaxURL = addressKeys[i].mainAddress + topic + addressKeys[i].api_key;
  //     console.log("ajax url is: ", ajaxURL);
  
  //step 3 getting 10 images for topic that was clicked
  
  // response.data.forEach(element => {// looping over array of objects response.data
  //                 var newImg = $("<img>").attr("src", element.images["480w_still"].url);
  //                 var p =$('<p/>');
  //                 p.text(JSON.stringify(response.rating));
  //                 $("#gifs").append(newImg);
  //                 $("#gifs").append(p);
  //             });
  //         })
  // }
  //practice for loops
  