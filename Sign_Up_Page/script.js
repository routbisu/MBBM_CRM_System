$(document).ready(function() {
    "use strict";
    
    $(".error-label").hide();
    
    // First Name Validation    
    validateField("#fName", "#err-lbl-fname");
    // Last Name
    validateField("#lName", "#err-lbl-fname");
    // User Name
    validateField("#username", "#err-lbl-uname");
    // Password & Confirm Password
    validateField("#password", "#err-lbl-pass");
    validateField("#password1", "#err-lbl-pass1");
    
    // Birth Date Validation
    $("#day").blur(validateBirthDate);
    $("#month").blur(validateBirthDate);
    $("#year").blur(validateBirthDate);
    
    // Gender Validation
    validateField("#gender", "#err-lbl-gender");
    // Mobile Phone
    validateField("#phone", "#err-lbl-mobile");
});

// Show/Hide Error Label on Validation
function validateField(elementName, errorLabelName) {
    $(elementName).blur(function() {
        if($(this).val().trim() == "" || $(this).val() == "-1") {
            $(errorLabelName).slideDown();
            // Make the border red
            $(this).css({'border': '1px solid red'});
        }
        else {
            $(errorLabelName).slideUp();
            $(this).css({'border': '1px solid #96baf5'});
        }
    });
}

// Birth Date Validation
function validateBirthDate() {
    $("#err-lbl-date").slideUp();
    $("#month").css({'border': '1px solid #96baf5'});
    $("#year").css({'border': '1px solid #96baf5'});
    $("#day").css({'border': '1px solid #96baf5'});
    
    // Month Validation
    var month = $("#month").val();
    var day = $("#day").val();
    var year = $("#year").val();
    
    if(month < 1) {
        $("#err-lbl-date").slideDown();
        $("#err-lbl-date").text("Please select a month");
        // Make the border red
        $("#month").css({'border': '1px solid red'});
        return;
    }
    
    var currentYear = (new Date()).getFullYear();
    if(year < 1900 || year > currentYear - 2) {
        $("#err-lbl-date").slideDown();
        $("#err-lbl-date").text("Please enter a valid year");
        // Make the border red
        $("#year").css({'border': '1px solid red'});
        return;
    }
    //debugger;
    var invalidDate = false;
    if(!isNaN(day) && day > 0) {
        if($.inArray(month, [1, 3, 5, 7, 8, 10, 12]) === 1) {
            if(day > 31) {
                invalidDate = true;
            }   
        }
        else {
            // Leap year February
            if(year % 4 == 0 && month == 2 && day > 29) {
                invalidDate = true;
            }
            // Non-leap year february
            else if(year % 4 != 0 && month == 2 && day > 28) {
                invalidDate = true;
            }
            // All 30 day months except february
            else if($.inArray(month, [4, 6, 9, 11]) === 1 && day > 30) {
                invalidDate = true;
            }
        }
    }
    else {
        invalidDate = true;
    }
                    
    if(invalidDate) {
        $("#err-lbl-date").slideDown();
        $("#err-lbl-date").text("Invalid Date.");
        // Make the border red
        $("#day").css({'border': '1px solid red'});
        return;     
    }
    
}





