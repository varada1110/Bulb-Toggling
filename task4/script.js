
    function myFunction()
        {
            var image=document.getElementById("bulb-off");
            if(image.src.match("LC"))
                {
                image.src="OIPXWBOY9YU.jpg";
                var x=document.getElementById("bulb-on");

                x.innerHTML="TURNED ON";
                }
            else
                {
                image.src="LC.jpg";
                var x=document.getElementById("bulb-on");

                x.innerHTML="TURNED OFF";
                }
        
        }
        
    