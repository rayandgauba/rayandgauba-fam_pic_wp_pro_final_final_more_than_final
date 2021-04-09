var names=[
     "My Family Book",
    "Rachna",
   "Dheeraj",
    "Tessa",
    "Rayan"];
  var images = ["Capture.PNG","rac.JPG","dhe.jpg","Tes.JPG","ray.jpg" ];
  var i=0;
  function nextslide(){             
    document.getElementById("name_1").innerHTML=names[i];
    document.getElementById("img1").src=images[i];
    i++;

    if(i==5){
      i=0;
    }
  }
  
                            
  