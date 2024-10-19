// ✌Loading all the Items (html elements in the js) when browser is loaded✌
document.addEventListener("DOMContentLoaded", () => {
  let addtoCartBtn = document.querySelectorAll(".addtocart");
  // console.log(addtoCartBtn) // optional
  // 📌adding the functionalities for addtocart btn
  addtoCartBtn.forEach((button) => {
    //  console.log(button) //optional

    //  🚩adding the Event to Each button
    button.addEventListener("click", (e) => {
      //   console.log(e.target.parentElement.parentElement.parentElement); //optional

      // 😜Gathering all product information when an user Click on an product to add items to cart
      let ProductInfo = button.parentElement.parentElement.parentElement;
      let Pname = ProductInfo.querySelector(".product-title").innerText;
      let Pprice = ProductInfo.querySelector(".price").innerText;
      let Pdescription = ProductInfo.querySelector(".product-des").innerText;
      let PimageUrl = ProductInfo.querySelector(".product-img").src;

      //   console.log(PimageUrl,Pdescription,Pname,Pprice) // optional

      // Creating an Object for Selected Product
      let selectedProd = {
        name: Pname,
        ImageUrl: PimageUrl,
        price: parseFloat(Pprice.replace(/[^0-9]/g, "")),
        description: Pdescription,
        quantity: 1,
      };

      addtoCart(selectedProd);
    });
  });
});

// adding items to the cart

let cartItems = [];


function addtoCart(product) {
// checking weather the Items Exists in the cart Or not 
  let existingItems = cartItems.find((item) => item.name == product.name);
  console.log(existingItems);

  if (existingItems) {
    existingItems.quantity++;
  } else {
    cartItems.push(product);
  }
}


// updating the cartPage

// increment the cartIcon value
