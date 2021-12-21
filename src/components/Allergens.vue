<template>
    <div>
    <div class="top-bar">
            <p>THE BEST MOBILE MACARONS IN THE MITTEN!</p>
            <!-- <router-link to="/allergens">Go to Bar</router-link> -->
        </div>
        <header>
            <div>
                <b-navbar toggleable="lg" type="light">
                    <b-navbar-nav>
                        <ul class="">
                            <li class="menu-item" id="nav-logo-container">
                                <img src="../assets/SUGAR-HONEY-SUB-LOGO-TRANSPARENT-01.png" class="logo-icon" />
                            </li>
                        </ul>
                    </b-navbar-nav>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="/">Home</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </header>
        <h1 id="products-title">Ingredients & Allergens</h1>

        <ProductDescription 
        productName="Signature Sugar Honey" 
        productImage="Sugar-Honey.png"
        v-bind:ingredients="['Natural Almond Flour Shell', 'Gold Leaf', 'Brown Butter Buttercream', 'Salted Honey Caramel']">
        </ProductDescription>

        <ProductDescription productName="Vanilla Cream" 
        productImage="Vanilla-Cream.png"
        v-bind:ingredients="['Spirulina Dyed Shell', 'Natural Dyed Sprinkles', 'Vanilla Bean Buttercream', 'Toasted Sugar Custard']">
        </ProductDescription>

        <ProductDescription productName="Raspberry Pistachio" 
        productImage="Pistachio-Rasp.png"
        v-bind:ingredients="['Pistchio Flour & Raspberry Powder Shell', 'Roasted Brittle Buttercream', 'House Raspberry Jam']">
        </ProductDescription>

        <ProductDescription productName="Coffee & Cream" 
        productImage="Coffee-N-Cream.png"
        v-bind:ingredients="['Espresso Shell', 'Espresso Buttercream', 'Mascarpone Cream Custard']">
        </ProductDescription>

        <ProductDescription 

        productName="Cherry Almond Poppy" 
        productImage="Sour-Cherry.png"
        v-bind:ingredients="['Cherry Powder Shell', 'Toasted Poppy Seed', 'Almond Poppyseed Buttercream' , 'Michigan Dried Cherry Jam']">
        </ProductDescription>

        <ProductDescription productName="Elderflower Citrus" 
        productImage="Elderflower-Cirus.png"
        v-bind:ingredients="['Goldenberry Shell', 'Edible Flower Petals', 'Citrus Buttercream', 'Grapefruit Elderflower Jam']">
        </ProductDescription>

        <!-- seasonals -->

        <ProductDescription 
        productName="Chocolate Truffle" 
        productImage="Chocolate-Malt.png"
        v-bind:ingredients="['Cocoa Shell', 'Semi-Sweet Chocolate Ganache', 'Salted Almond Gianduja']">
        </ProductDescription>

        <ProductDescription 
        productName="Peppermint Mallow" 
        productImage="Peppermint-Mallow.png"
        v-bind:ingredients="['Sugar Crystals', 'Pink Peppermint Mallow Buttercream', 'Marshmallow Ganache']">
        </ProductDescription>

        <ProductDescription 
        productName="Cranberry Cheesecake" 
        productImage="Cran-Cheesecake.png"
        v-bind:ingredients="['Natural Pink Shell', 'Cheesecake Buttercream', 'Sour Cranberry Jam']">
        </ProductDescription>

        <ProductDescription 
        productName="Coconut Caramel | Non-Dairy" 
        productImage="Coconut-Caramel.png"
        v-bind:ingredients="['Toasted Coconut Shell', 'Coconut Buttercream', 'Spiced Date Caramel']">
        </ProductDescription>

        <ProductDescription 
        productName="Vanilla Sugar Cookie" 
        productImage="Van-Sugar-Cookie.png"
        v-bind:ingredients="['Natural Green Sprinkle', 'Vanilla Bean Buttercream', 'Sweet Sugar Cookie Ganache']">
        </ProductDescription>


        <div id="note-wrapper">
        <h1 id="products-title">About Our Ingredients</h1>
            <p id="event-text-1">At Sugar Honey, we use as many natural flavors & colors as possible for our shells and fillings.</p>
            <p id="event-text-1">Macarons & fillings are made in a facility that does have gluten and major allergens present. We do our very best to keep all macarons gluten-free friendly.</p>
            <p id="event-text-1">All macarons contain almond & egg. Most macarons contains dairy, unless otherwise noted.</p>
        </div>
    </div>
</template>
<script>
import ProductDescription from './ProductDescription';
export default {
    name: 'Allergens',

    components: {
        ProductDescription
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap');
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);

#background-photo img {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    opacity: .1;
    position: fixed;
}

.selector-for-some-widget {
    box-sizing: content-box;
}

body {
    font-family: 'Josefin Sans', sans-serif !important;
    padding-top: 50px;
    background-color: #dfdfdf !important;
}
#note-wrapper {
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
.navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: #F5F5F5!important;
    margin-top: 57px;
}

.main-banner {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin-top: 58px !important;
    position: fixed;
    height: 6rem !important;
    width: 100vw !important
}

#nav-logo-container {
    margin: 0 2rem 0rem 1rem;
}

.top-bar {
    background-color: #13361c;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    padding: 20px;
    letter-spacing: .15em;
    z-index: 999999999999999999;
    position: fixed;
    margin-top: 0;
    top: 0;
    width: 100vw;
}

.top-bar p {
    color: white !important;
}

.ig-icon {
    height: 3em;
    border-radius: 50%;
    border-style: solid;
    background-color: white;
    border-color: white;
}

.email-icon {
    height: 3rem;
    border-radius: 50%;
    border-style: solid;
    background-color: white;
    border-color: white;
}

.logo-icon {
    height: 6rem;
    border-radius: 50%;

}

router-link {
    color: black;
}

.menu-bar {
    position: absolute;
    top: 20px;
    left: 50%;
    height: 14px;
    margin-left: -10px;
}

.bars {
    display: block;
    width: 20px;
    height: 3px;
    background-color: #333;
    box-shadow: 0 5px 0 #333, 0 10px 0 #333;
}

.menu {
    display: none;
    width: 100%;
    padding: 30px 10px 50px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
}

.menu ul {
    margin-bottom: 0;
}

.nav-item {
    margin: 0 2rem;
}

.nav-item a {
    color: #cc9a48 !important;
}

.menu a {
    color: #333;
    text-transform: uppercase;
    opacity: 0.8;
}

.menu a:hover {
    text-decoration: none;
    opacity: 1;
}

.bg-info {
    width: 100%;
}

#event-text-1 {
    margin: 1rem 4rem;
}

#products-title {
  font-family: 'Playfair Display', sans-serif;
  margin: 2rem;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

/*display: block; max-width: 100%; max-height: 100vh; height: auto; margin-left: auto; margin-right: auto;" */
</style>