// Function to read data from Cart.json

export function readCartData() {
  try {
    const jsonString = localStorage.getItem("cartData");
    console.log("reading from local");
    return jsonString ? JSON.parse(jsonString) : null;
  } catch (error) {
    console.error("Error reading cart data from local storage:", error);
    return null;
  }
}

// Function to write data to Cart.json
export async function writeCartData(data) {
  try {
    localStorage.setItem("cartData", JSON.stringify(data));
    console.log("Cart data saved to localStorage");
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Function to increase the quantity of a product by its ID
export function increaseQuantity(productId, quantityToAdd) {
  const cartData = readCartData();

  if (cartData) {
    const product = cartData.products.find((p) => p.id === productId);

    if (product) {
      product.quantity += quantityToAdd;
      if (product.quantity === 0) {
        removeProduct(productId, cartData);
      } else {
        updateTotal(cartData);
        writeCartData(cartData);
      }
    } else {
      console.log("Product not found in the cart.");
    }
  }
}

// Function to decrease the quantity of a product by its ID
export function decreaseQuantity(productId, quantityToSubtract) {
  const cartData = readCartData();

  if (cartData) {
    const product = cartData.products.find((p) => p.id === productId);

    if (product) {
      if (product.quantity >= quantityToSubtract) {
        product.quantity -= quantityToSubtract;
        if (product.quantity === 0) {
          removeProduct(productId, cartData);
        } else {
          updateTotal(cartData);
          writeCartData(cartData);
        }
      } else {
        console.log("Cannot decrease quantity below 0.");
      }
    } else {
      console.log("Product not found in the cart.");
    }
  }
}

// Function to add a new product to the cart
export function addNewProduct(newProduct) {
  const cartData = readCartData();

  if (cartData) {
    cartData.products.push(newProduct);
    updateTotal(cartData);
    writeCartData(cartData);
  }
}

// Function to remove a product from the cart by its ID
export function removeProduct(productId, cartData) {
  cartData.products = cartData.products.filter((p) => p.id !== productId);
  updateTotal(cartData);
  writeCartData(cartData);
}

// Function to update the total based on product quantities
export function updateTotal(cartData) {
  cartData.total = cartData.products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  cartData.totalProducts = cartData.products.length;
  cartData.totalQuantity = cartData.products.reduce(
    (total, product) => total + product.quantity,
    0
  );
}

// Example usage:
// increaseQuantity(88, 1); // Increase quantity of product with ID 88 by 1
// decreaseQuantity(18, 1); // Decrease quantity of product with ID 18 by 1

// Example usage to add a new product
// const newProduct = {
//   "id": 123,
//   "title": "New Product",
//   "price": 50,
//   "quantity": 1,
//   "thumbnail": "https://example.com/new-product-thumbnail.jpg"
// };
// addNewProduct(newProduct);
