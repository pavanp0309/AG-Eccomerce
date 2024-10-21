document.addEventListener("DOMContentLoaded",()=>{
    // load the items form local storage
    LoadCart()

})

let cartItems = [];

function LoadCart(){
    let cartValues=localStorage.getItem("cartItem")
 
    if(cartValues){
      cartItems=  JSON.parse(cartValues)
      updateCartUi()
   
    }
 }


 function updateCartUi(){
    let cartContainer=document.querySelector(".cart")
    cartContainer.innerHTML=""
    
    cartItems.forEach((ele)=>{
       // creating the div element to attach into the row
    let cartCard=document.createElement("div")
    // adding the classname to created div section
    cartCard.className="col-sm-12 col-md-3 col-lg-3 col-12"
    // adding the card layout inside created div section 
    cartCard.innerHTML=`          <div class="card product" style="width: 18rem;">
            <img src=${ele.ImageUrl} class="card-img-top product-img" alt="...">
            <!-- Heart Icon -->
            <i class="bi bi-heart-fill heart-icon"></i>
            <div class="card-body product-info">
              <h5 class="card-title text-center product-title">${ele.name}</h5>
              <p class="card-text product-des">${ele.description}</p>
              <p class="text-center price">${ele.price}</p>
              <!-- quantity --> 
               <div class="quantity-container">
                <button class="btn btn-danger">-</button>
                <span>${ele.quantity}</span>
                <button class="btn btn-success">+</button>
                <button>💀</button>
               </div>
             
           
            </div>
          </div>`

    cartContainer.appendChild(cartCard)

    })

 }

