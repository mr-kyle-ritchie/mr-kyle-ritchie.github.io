$(document).ready(function() {

    $(".hide-name").hide();
    $(".hide-mail").hide();
    $(".hide-address").hide();
    $(".hide-case").hide();
    

   
      $('#startRentDate').datepicker({
      format: "MM dd, yyyy"
      
      })
            
      $('#disableTimeRangesExample').timepicker({'disableTimeRanges': [
        ['12am', '8am'], //store opens
        ['12pm', '1:00pm'], //lunch break
        ['8:30pm', '11:30pm'], //store closes
        ]                                        
      },
      { 'timeFormat': 'H:i A' },
      { 'scrollDefault': 'now' })
  
if(window.location.href.indexOf("buyConsultation") > -1){
$('#checkbox1').prop('checked', true);
} 
    
if(window.location.href.indexOf("buyRepairs") > -1){
$('#checkbox2').prop('checked', true);
} 
    
if(window.location.href.indexOf("buyInstallation") > -1){
$('#checkbox3').prop('checked', true);
} 

    

  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("complete order");
    })
  

    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("order now");
    });


  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>Name field entered");
      $(this).css("background-color", "#F7F8E0");
    })
  
    .on("blur", function() {
      $("#log").append("<br>Name field exited");
      $(this).css("background-color", "#FFF");
    });
    
    $("#mySingleLineText2").on("focus", function() {
      $("#log").append("<br>E-mail field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
    .on("blur", function() {
      $("#log").append("<br>E-mail field exited");
      $(this).css("background-color", "#FFF");
    });
    
    
    $("#mySingleLineText3").on("focus", function() {
      $("#log").append("<br>Address field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
    .on("blur", function() {
      $("#log").append("<br>Address field exited");
      $(this).css("background-color", "#FFF");
    });

    
    $("#myTextarea").on("focus", function() {
      $("#log").append("<br>Explanation field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
    .on("blur", function() {
      $("#log").append("<br>Explanation field exited");
      $(this).css("background-color", "#FFF");
    });
    
  $("#mySelect").on("change", function() {
    var val = $(this).val();
    $("#log").append("<br>Length of service changed to " + val);
    
  });

  $("#startRentDate").on("change", function(){
  var val = $(this).val();
  $("#log").append("<br>Day of service changed to " + val);
  });
    
 $("#disableTimeRangesExample").on("change", function(){
  var val = $(this).val();
  $("#log").append("<br>Time of service changed to " + val);
  });

    //radio button 
  $('input:radio[name=gender]').change(function() {
        if (this.value == 'Yes') {
            $("#log").append("<br>" + "Email notification changed to: yes");
        }
        else if (this.value == 'No') {
        
            $("#log").append("<br>" + "Email notification changed to: no");
        }
    });
    
    $('#checkbox1').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Consultation service selected"); 
        }
        else{
        $('#log').append("<br>" + "Consultation service removed"); 
        }
    });
    
     $('#checkbox2').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Repair service selected"); 
        }
        else{
        $('#log').append("<br>" + "Repair service removed"); 
        }
    });
    
     $('#checkbox3').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Installation service selected"); 
        }
        else{
        $('#log').append("<br>" + "Installation service removed"); 
        }
    });

       $('.target').click(function() {
    $('#orderNumber').html(function(i, val) { return val*1+1 });
})

  //user clicks the button
  $("#myButton").on("click", function() {
      
   
      
       if (document.getElementById("mySingleLineText").value == "") { 
        alert("Your forgot to enter your name");  
        $(".hide-name").show();
        $("#mySingleLineText").css("border-color", "red");

        return false;  // stop submission until textbox is not '' 
        }  

         if (document.getElementById("mySingleLineText2").value == "") { 
        alert("Your forgot to enter your e-mail");  
            $(".hide-mail").show();
             $("#mySingleLineText2").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }  
      
         if (document.getElementById("mySingleLineText3").value == "") { 
        alert("Your forgot to enter your address");  
            $(".hide-adress").show();
             $("#mySingleLineText3").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }  
      
        if (document.getElementById("myTextarea").value == "" && $('#checkbox2').is(":checked") || $('#checkbox3').is(":checked")){
        alert("You forgot to enter an explanation of your situation");
        $(".hide-case").show();
        $("#myTextarea").css("border-color", "red");
        return false;
        }
      
        $("#myTextarea").text($(this).val() || "N/A");
      
      
        if (document.getElementById("startRentDate").value == "") { 
        alert("Your forgot to set a date for the service");  
           
             $("#startRentDate").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }
      
       if (document.getElementById("disableTimeRangesExample").value == "") { 
        alert("Your forgot to set a time for the service");  
           
             $("#disableTimeRangesExample").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }
      
    $("#log").append("<br>User placed an order");
      
      
         var order = {};

    var formData = $("input, select");
    formData.each(function (){
        
    var id = $(this).attr("id");
        
    order[id] = $(this).val();
        
    })
    
    alert("You have successfully ordered: "+ JSON.stringify(order));
  var userOrder = {};
    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myInput2 = $("#mySingleLineText2").val();
    userOrder.myInput3 = $("#mySingleLineText3").val();  
    userOrder.myTextarea = $("#myTextarea").val();
    userOrder.startRentDate = $("#startRentDate").val();
    userOrder.disableTimeRangesExample = $("#disableTimeRangesExample").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name='gender']:checked").val();
    userOrder.myCheckValues = [];
      
      
     $("[name='vehicle']:checked").each(function() {
      userOrder.myCheckValues.push($(this).val());
    })

    $("#rec").append("Name: " + userOrder.myInput);
    $("#rec").append("<br>E-mail: " + userOrder.myInput2);  
    $("#rec").append("<br>Address: " + userOrder.myInput3);  
    $("#rec").append("<br>Service(s): " + userOrder.myCheckValues.join());
    $("#rec").append("<br>Explanation: " + userOrder.myTextarea);
    $("#rec").append("<br>Duration of service: " + userOrder.mySelect);
    $("#rec").append("<br>Date: " + userOrder.startRentDate);
    $("#rec").append("<br>Time: " + userOrder.disableTimeRangesExample);  
    
    
    $("#rec").append("<br>E-mailing list: " + userOrder.myRadio + "<br><hr>");   

        var startRentDate = $("#startRentDate").val();
        var disableTimeRangesExample = $("#disableTimeRangesExample").val();
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();

        var myCheckValues = [];

        $("[name='vehicle']:checked").each(function() {
          myCheckValues.push($(this).val());
        });
/*
        $("#log").append("<br>User clicked the button");

        $("#log").append("<br>Value of input is: " + myInput);
        $("#log").append("<br>Value of textarea is: " + myTextarea);
        $("#log").append("<br>Value of select is: " + mySelect);
        $("#log").append("<br>Value of radio button is: " + myRadio);
        $("#log").append("<br>Value of checks is: " + myCheckValues.join());
    */
      
       


        //if user leaves myTextArea blank, return the alert and highlight myTextArea red  
     
      
})

 
});