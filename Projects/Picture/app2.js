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


