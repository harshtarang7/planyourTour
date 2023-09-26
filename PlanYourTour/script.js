// manali itinerary
var dropD = document.querySelectorAll(".Dropd-items h4");
var dropDestination = document.querySelectorAll("#list-select ul li")
var dropDest = document.querySelector("#destination-dropD")
var megaMenu = document.querySelector("#mega-menu")
var megaMenuTheme = document.querySelector("#mega-menu-theme")
var dropDestinationTheme= document.querySelector("#destination-theme")
var form=document.querySelector("nav ul li button")
var overLay=document.querySelector("#overlay-btn")
var overLayBg=document.querySelector("#overlay-bg")
var closeBtn=document.querySelector("#close-btn")

// side menu mobile
var show = document.querySelector("#overlay-mobile");
var closeM= document.querySelector("#cross");

// 
// closeM.addEventListener("click", (event) =>{
//     if(closeM.className == "fa-solid fa-bars")
//     {
//     show.style.left="0px" 
//     closeM.className = "fa fa-close";
//     }
//     else 
//     {
//         show.style.left = "-800px"
//         closeM.className = "fa-solid fa-bars"
//     }
// })
// 
dropD.forEach((el,i) => {
    el.addEventListener("click",() => {
    dropD.forEach((elH,index) => {
        if(i!=index)
        {
            elH.nextElementSibling.classList.remove('showP')
        }
    })
   
        el.nextElementSibling.classList.toggle('showP')
    })
})

    dropDestination.forEach((drop,indexV) =>{
        drop.addEventListener("click",() =>{
            
           if(drop.innerHTML == dropDest.innerHTML)
           {
              megaMenu.classList.toggle('show-drop')
              megaMenuTheme.classList.remove('show-drop')
              
           }
           else if(drop.innerHTML == dropDestinationTheme.innerHTML)
           {
                megaMenuTheme.classList.toggle('show-drop')
                megaMenu.classList.remove('show-drop')
           }
   })
})   

    form.addEventListener("click" ,() =>{
       
      
        overLayBg.classList.add('show-overlay')
        overLay.classList.add('show-enquiry')
    })


    closeBtn.addEventListener("click",() =>{
        overLayBg.classList.remove('show-overlay')
        overLay.classList.remove('show-enquiry')
    })
// side menu mobile



