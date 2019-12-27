function populateCity(){
var xhr =new XMLHttpRequest();
xhr.open("GET","state-city.json",true);
xhr.responseType = "text";
xhr.send();

xhr.onload = function(){
    if(xhr.status==200){
        var data = JSON.parse(xhr.responseText);
        // console.log(data);
        var state = document.getElementById("state").value;
        // alert(state);
        // console.log(data.Karnataka;
        var cityHtml = "";
        if(state=="Karnataka"){
            for(var i=0; i<data.Karnataka.length; i++){
                cityHtml = cityHtml + "<option>"+data.Karnataka[i]+"</option>";
                
            }
            document.getElementById("city").innerHTML = cityHtml;
        }


        if(state=="Maharashtra"){
            for(var i=0; i<data.Maharashtra.length; i++){
                cityHtml = cityHtml + "<option>"+data.Maharashtra[i]+"</option>";
                
            }
            document.getElementById("city").innerHTML = cityHtml;
        }

        if(state=="Andhra Pradesh"){
            for(var i=0; i<data["Andhra Pradesh"].length; i++){
                cityHtml = cityHtml + "<option>"+data["Andhra Pradesh"][i]+"</option>";
                
            }
            document.getElementById("city").innerHTML = cityHtml;
        }

        if(state=="Tamil Nadu"){
            for(var i=0; i<data["Tamil Nadu"].length; i++){
                cityHtml = cityHtml + "<option>"+data["Tamil Nadu"][i]+"</option>";
                

            }
            document.getElementById("city").innerHTML = cityHtml;
        }

        if(state=="Odisha"){
            for(var i=0; i<data.Odisha.length; i++){
                cityHtml = cityHtml + "<option>"+data.Odisha[i]+"</option>";
                
            }
            document.getElementById("city").innerHTML = cityHtml;
        }

    }
}
}