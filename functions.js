// Written by Patrick Withams


$(document).ready(function() {
    
    // variables
    
    
     var body = $(".body");
    
     // create array to store the numbers already generated
     
    var numberChecker = [];
    
    
    // enter number of files to cycle through - this should reflect line 45
    // and below, otherwise "no more files error" will show
    
    var numberFiles = 5;
    
    // end of variables
    
   
    // menu show hide toggle controls
    
    // automatically hide menu
    
    $( ".nav" ).toggle(false);
    $( ".footer" ).toggle(false);
    $( ".close" ).toggle(false);
    
    
    // toggle when menu button is clicked
    
                 
     $(".button").click(function() {
          
          $( ".nav" ).fadeToggle( "slow" );
          $( ".footer" ).fadeToggle( "slow" );
        
     });
    
    
    // load about page
    $(".about").click(aboutPage);
    
    function aboutPage() {
    
    $(body).empty();
    $(body).load("about.php");
   
        
    };
    
    
    
    // when page loads, call pageLoad function
    // when body is clicked, call pageLoadFull function
    
    $(document).ready(pageLoad);
    
    $(body).click(pageLoadFull);
    
        
    // pageLoadFull checks if the link has been clicked, or the body
    
    
    function pageLoadFull() {
        
       // allows links to be clicked without triggering main function
        
       // weird method used due to js only noticing click or hover events
       // on the body, not individual elements
        
         if ($('h1').css('opacity') == '.6') {
            
        } 
        
        else {
            
         
       // if it's not the title that's been clicked, trigger main function
            
             pageLoad();
        };
        
    };
    

    // pageLoad function variables
    
      

    // pageLoad function, to randomly select which fonts to display
    

    function pageLoad() {

        // create random number

        var randomNumber = Math.random();
        randomNumber = randomNumber * numberFiles;
        randomNumber = Math.ceil(randomNumber);

        // check to see whether that number is in our array already

        var arrayChecker = numberChecker.indexOf(randomNumber);

        // if number has already been generated, loop until another
        // is generated that is not a duplicate

        while (arrayChecker >= 0 && numberChecker.length < numberFiles ) {

            randomNumber = Math.random();
            randomNumber = randomNumber * numberFiles;
            randomNumber = Math.ceil(randomNumber);
            arrayChecker = numberChecker.indexOf(randomNumber);

        };

        // once an original number has been created, double
        // check it's not in the array, as if the array limit
        // has been exceeded it will bypass the while loop


        if (arrayChecker < 0) {

            if (randomNumber === 3) {

                $(body).empty();
                $(body).load("roboto.php");
            }

            else if (randomNumber === 1) {

                $(body).empty();
                $(body).load("lato.php");
            }

            else if (randomNumber === 2) {

                $(body).empty();
                $(body).load("oldstandard.php");
            }

            else if (randomNumber === 4) {

                $(body).empty();
                $(body).load("sourcesans.php");
            }
            
             else if (randomNumber === 5) {

                $(body).empty();
                $(body).load("oswald.php");
            }

            else {

                $(body).empty();
                alert("uh oh! Looks like something went wrong - no more files!");
            };



            // add generated number to our tracking array

            numberChecker.push(randomNumber);

           // optional alert for debugging: alert(numberChecker);

        }

            // if the array limit has been exceeded, we will stop the function


            else if (numberChecker.length === numberFiles) {
                
                // if all pages have been shown, display finish page and reset array
                
                $(body).empty();
                $(body).load("end.php");
                
                numberChecker = [];
                

            

            }

            else {

                alert("Something went wrong!");

        }; // end of if else statement

    

    };   // end of pageLoad function
    
    
        
                   
}); // end of document ready function