
	   const buttons=document.querySelector("#buttons").children;
	   const items=document.querySelector(".items").children;
	   
	    
	    for(let i=0; i<buttons.length; i++){
	    	buttons[i].addEventListener("click",function(){

	    		 for(let j=0; j<buttons.length; j++){
	    		 	buttons[j].classList.remove("active")
	    		 }
	    		 this.classList.add("active")
	    		 const target=this.getAttribute("data-target");

	    		 for(let k=0; k<items.length; k++){
                   items[k].style.opacity="0.5";
                   items[k].style.transform="scale(0.8)";


                   if(items[k].getAttribute("data-id")==target){
                   	items[k].style.opacity="1";
                   items[k].style.transform="scale(1)";
                   }
                   if(target=="all"){
                   	items[k].style.opacity="1";
                   items[k].style.transform="scale(1)";
                   }
	    		 }
	    	})
	    }

