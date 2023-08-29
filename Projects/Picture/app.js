let rightJS = {
    init: function () {
      rightJS.Tags = document.querySelector(".rightJS");
      // for (var i = 0; i < rightJS.Tags.length; i++) {
      //   rightJS.Tags[i].style.overflow = "hidden";
      // }
      rightJS.Tags = document.querySelectorAll(".rightJS");
      for (var i = 0; i < rightJS.Tags.length; i++) {
        rightJS.Tags[i].style.position = "relative";
        rightJS.Tags[i].style.right =
          "-" + rightJS.Tags[i].parentElement.offsetWidth + "px";
      }
      rightJS.loop();
    },
    loop: function () {
      for (var i = 0; i < rightJS.Tags.length; i++) {
        var x = parseFloat(rightJS.Tags[i].style.right);
        x++;
        var W = rightJS.Tags[i].parentElement.offsetWidth;
        var w = rightJS.Tags[i].offsetWidth;
        if ((x / 1500) * W > w) x = -W;
        if (
          rightJS.Tags[i].parentElement.parentElement.querySelector(
            ":hover"
          ) !== rightJS.Tags[i].parentElement
        )
          rightJS.Tags[i].style.right = x + "px";
      }
      requestAnimationFrame(this.loop.bind(this));
    },
  };
  window.addEventListener("load", rightJS.init);


  let shop = document.getElementById("shop")
  console.log(shop)
 


  function decrement() {
    const quantityInput = document.getElementById("shop");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      quantity--;
      quantityInput.value = quantity;
    }
  }

  function increment() {
    const quantityInput = document.getElementById("shop");
    let quantity = parseInt(quantityInput.value);
    if (quantity < 10) {
      quantity++;
      quantityInput.value = quantity;
    }
  }




