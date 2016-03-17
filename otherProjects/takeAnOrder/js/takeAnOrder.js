$(document).ready(function () {

    $(".hide-name").hide();
    $(".hide-address").hide();
    //this class show when alert appears, style in css to make it red
    var price;
    $("#myButton").on("click", function () {
        //setting variables for id's in HTML
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextArea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();
        var myCheckbox = $("[name='vehicle']:checked").val();

        var myCheckbox = $("input[name='vehicle']:checked").map(function () {
            return this.value;
        }).get().join(", ");
        //I understand, a 'for loop' would be more efficient val()++, price = val() * 1300, but due to time contraints this was easier for me to do. 
        //user buy one pair, price is $101,770
        if ($('#mySelect').val() === '1') {
            price = 101770;
        }
        //user buy two pairs, price is $203,540
        if ($('#mySelect').val() === '2') {
            price = 203540;
        }
        //user buy three pairs, price is $305,310
        if ($('#mySelect').val() === '3') {
            price = 305310;
        }
        //user buy four pairs, price is $407,080
        if ($('#mySelect').val() === '4') {
            price = 407080;
        }
        //user buy five pairs, price is $6,500
        if ($('#mySelect').val() === '5') {
            price = 508850;
        }
        //user buy six pairs, price is $610,620
        if ($('#mySelect').val() === '6') {
            price = 610620;
        }
        //user buy seven pairs, price is $712,390
        if ($('#mySelect').val() === '7') {
            price = 712390;
        }
        //user buys eight pairs, price is $814,160
        if ($('#mySelect').val() === '8') {
            price = 814160;
        }
        //user buys nine pairs, price is $915,930
        if ($('#mySelect').val() === '9') {
            price = 915930;
        }
        //user buys ten pairs, price is ~$1.018 million
        if ($('#mySelect').val() === '10') {
            price = 1017700;
        }

        //if user selects Carbon Ceramics, add $12,700 to price
        if ($('input[value=Carbons]').prop("checked")) {
            price = price + 12700;
        }

        if ($('input[value=Stainless]').prop("checked")) {
            price = price + 360;
        }


        if ($('input[value=Ivory]' && 'input[value=Amber]').prop("checked")) {
            price = price + 0;
        }
        if ($('input[value=Caps]').prop("checked")) {
            price = price + 20;
        }
        if ($('input[value=Mats]').prop("checked")) {
            price = price + 258;
        }
		if ($('input[value=Cover]').prop("checked")) {
            price = price + 399;
        }

       


        //adding the value of the variables to the LOG section of the page
    
        $("#log").append("<br><br>Price: $" + price);
        $("#log").append("<br>Name: " + myInput);
        $("#log").append("<br>Delivery Address: " + myTextarea);
        $("#log").append("<br> Quantity ordered: " + mySelect);
        $("#log").append("<br> Connector type: " + myRadio);
        $("#log").append("<br> Accessories added: " + myCheckbox);
        $("#log").append("<br><br>");


        //once user clicks the 'chain order button' alert the user to continue and add the following line at the bottom of the previous Reciept
        $("#chainButton").on("click", function () {
            $("#log").append("process the previous order, in addition to the following:");
            alert("Now you may complete your next order");
        });




        //if user leaves mySingleLineText blank, return the alert and highlight mySingleLineText red  
        if (myInput === "") {
            alert("You forget to enter your name");

            $("#mySingleLineText").css("background-color", "#EE6363");
            $(".hide-name").show();
        }

        //if user leaves myTextArea blank, return the alert and highlight myTextArea red  
        if (myTextarea === "") {
            alert("You forgot to enter a delivery address");

            $("#myTextArea").css("background-color", "#EE6363");
            $(".hide-address").show();
        }
        //ends click function
    });

    //focus function changes the background color of mySingleLineText to a light blue
    $("#mySingleLineText").on("focus", function () {
            $(this).css("background-color", "#d5eaf6");
        })
        //blur function returns the background color of mySingleLineText to white
        .on("blur", function () {
            $(this).css("background-color", "white");
        });

    //focus function changes the background color of myTextArea to a light blue
    $("#myTextArea").on("focus", function () {
        $(this).css("background-color", "#d5eaf6");
    })

    //blur function returns the background color of myTextArea to white
    .on("blur", function () {
        $(this).css("background-color", "white");
    });

    $("#mySelect").on("change", function () {
        //if user enters the '+10' option, return this alert
        if ($('#mySelect').val() === '10') {

            alert("You can't be serious - but if you are then please place at least two orders that add to the desired amount. Place your first order, then fill out your second order and remember to click the 'Chain Order box'");
        }
        //otherwise user enters a value <=9, so return this messsage
        else {
            $("#mySelectMessage").html("You would only have to buy 7 to have one for each day of the week!");
        }
        //ends mySelect change function
    });

    //changes button color to green when mouseover 
    $("#myButton").on("mouseenter", function () {
            $(this).text("You're Done!");
            $(this).css("background-color", "#61B329");
        })
    //changes button color to white when mouseleaves
        .on("mouseleave", function () {
            $(this).text("Click to Place Order");
            $(this).css("background-color", "white");

            //ends button mouseover and mouseleave functions
        });



    //ends document ready function
});