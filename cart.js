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
                <button class="btn btn-danger decrement-btn">-</button>
                <span class="quant-val">${ele.quantity}</span>
                <button class="btn btn-success increment-btn">+</button>
                <button class="btn btn-danger delete-btn">💀</button>
               </div>
             
           
            </div>
          </div>`
 

         //  accessing all the Elements 
         let incremenetBtn=cartCard.querySelector(".increment-btn")
         let decremenetBtn=cartCard.querySelector(".decrement-btn")
         let quant=cartCard.querySelector(".quant-val")
         let DeleteBtn=cartCard.querySelector(".delete-btn")

         // adding the Functionalities for  increement decrement and delete
         incremenetBtn.addEventListener("click",()=>{
            //  function to handleincrement logic
            handleIncrement(ele,quant)

         })
         decremenetBtn.addEventListener("click",()=>{
            //  function to handledelete logic
           handleDecrement(ele,quant)

         })
         DeleteBtn.addEventListener("click",()=>{
            //  function to handledelete logic
            handleDelete(ele,quant)

         })


   //  appending the chid to parent  
    cartContainer.appendChild(cartCard)

    })
    CartTotal()
 }


 function handleIncrement(ele,quant){
     ele.quantity++
     quant.innerText=ele.quantity;

   //   updating the Local storage 
   localStorage.setItem("cartItem",JSON.stringify(cartItems));

   //   updating the ui
   updateCartUi()
   CartTotal()
 }
 function handleDecrement(ele,quant){

   if(ele.quantity>1){
      ele.quantity--
      quant.innerText=ele.quantity;
 
    //   updating the Local storage 
    localStorage.setItem("cartItem",JSON.stringify(cartItems));
 
   }
   updateCartUi()
   CartTotal()
 }
//  function to delete items
 function handleDelete(ele){
   cartItems=cartItems.filter((item)=>item.name !==ele.name)
   localStorage.setItem("cartItem",JSON.stringify(cartItems));
   updateCartUi()
   CartTotal()
 }

 function CartTotal(){
   let total=document.querySelector(".cart-total")
   let cartTotal=cartItems.reduce((total,ele)=>total+ele.quantity*ele.price,0)
   total.innerText=`cartTotal: ${cartTotal}`
 
 }