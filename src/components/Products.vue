<template>
<div>

    <div id="products-wrapper">
    <h1 id="products-title">Our Products</h1>

    <p >
    Find our macarons at special events! Or, contact us directly to make a special order or event catering!
    <br><br>
    Our bestselling <b>Classic Pack</b> is a combination box of our 6 most popular flavors:
    <ul id="products-list">
      <li class="products-list-item">* Sugar Honey *</li>
      <li class="products-list-item">* Coffee &amp; Cream *</li>
      <li class="products-list-item">* Cocoa Malt *</li>
      <li class="products-list-item">* Cherry Almond Poppy *</li>
      <li class="products-list-item">* Vanilla Cream *</li>
      <li class="products-list-item">* Raspberry Pistachio *</li>
    </ul>
    </p>
    <router-link to="/allergens">Click here to see ingredient and allergy info!</router-link>
    <div>
      
    </div>
    <p id="product-text">
      We also specialize in <b>Holiday</b> and <b> Seasonal flavors</b>! So be sure to follow our social media to see what special sweet flavors we're baking this week! <br><br>And visit our Instagram to see where you can find the <b>Sugar Honey Team</b> today!
    </p>
    
    

    <div id="product-image" class="">
        <div class="menu-item">
            <a href="https://www.instagram.com/sugarhoneytruck/">
                <img src="../assets/SUGAR-HONEY-MONOGRAM2-TRANSPARENT-01.png" alt="Instagram Logo" class="product-icon" />
            </a>
        </div>
    </div>

    </div>

   
</div>

</template>

<script>

export default {
  name: 'Products',
  
}
</script>




<style scoped>
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #4CAF50;
}

a {
  color: darkgoldenrod;
}


.product-icon {
    height: 6rem;
    border-radius: 50%;

}

#product-text {
  margin-top: 1rem;
}

#products-wrapper {
  max-width: 500px;
  width: 80%;
  margin: 10rem auto;
  position: relative;
  background-color: white;
  z-index: 1;
  background: #F9F9F9;
  padding: 25px;
  box-shadow: 0 0 20px 0 #dfa98a, 0 5px 5px 0 rgb(0 0 0 / 24%);
}

#products-title {
  font-family: 'Playfair Display', sans-serif;
  margin: 2rem;
}

#products-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

.products-list-item {
  padding: 5px 0;
}

</style>