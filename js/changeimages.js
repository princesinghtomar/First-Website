function changeImage(){
    y=document.getElementById("miscImages")
    if(y.getAttribute('src') =="img/me.jpg")
    {
        y.src = "img/cpp.jpg";
    }
    else if(y.getAttribute('src') == "img/cpp.jpg")
    {    
        y.src = "img/school.jpg";
    }
    else if(y.getAttribute('src') == "img/school.jpg")
    {    
        y.src = "img/modi.jpg";
    }
    else if(y.getAttribute('src') == "img/modi.jpg")
    {    
        y.src = "img/iiith.jpg";        
    }
    else if(y.getAttribute('src') == "img/iiith.jpg")
    {    
        y.src = "img/me.jpg";        
    }
}
