function validate() {
    var name = document.getElementById("name").value;
    var employeeCode = document.getElementById("employeeCode").value;
    var dept = document.getElementsByName("dept");
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var address = document.getElementById("address").value;
    var trainingProgramAttended = document.getElementsByName("trainingPA");
    var trainingLeft = document.getElementById("trainingLeft").value;


    if (name == "") {
        document.getElementById("name-error").innerHTML = "Name is required.";
    }
    else {
        document.getElementById("name-error").innerHTML = "";

    }
    if (employeeCode == "") {
        document.getElementById("ec-error").innerHTML = "Employee Code is required.";
    }
    else {
        document.getElementById("ec-error").innerHTML = "";

    }

    if(day == "day" || month == "month" || year == "year"){
        document.getElementById("date-error").innerHTML = "Give a valid date."
    } else if (month == "April" || month == "June" || month == "September" || month == "November" && day == "31") {
        document.getElementById("date-error").innerHTML = "Month of "+month+" doesnot have "+day+" days";
    } else if(month =="February " && year != "2012" || year != "2016"  && day > "28")//2012 doesn't work
    {
        document.getElementById("date-error").innerHTML = "Month of "+month+" doesnot have "+day+" days";
    }  else {
        document.getElementById("date-error").innerHTML = "";

    }

    if(address == ""){
        document.getElementById("address-error").innerHTML = "Enter an address";
    }
    else{
        document.getElementById("address-error").innerHTML = "";
    }

    if(trainingLeft == "select"){
        document.getElementById("trainingl-error").innerHTML = "Choose a option";
    }
    else
    {
        document.getElementById("trainingl-error").innerHTML = "";
    }

}