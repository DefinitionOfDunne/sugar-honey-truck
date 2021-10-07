<template>
    <div>
        <!-- <header><a href="https://www.instagram.com/sugarhoneytruck/">
    <img style="text-decoration: none;" src="images/instagram-logo.png" alt="Instagram Logo" height="20" /></a><a href="mailto:sugarhoneytruck@gmail.com"> 
    <img style="text-decoration: none;" src="images/envelope.png" width="30" height="20" /> 
    </a>
    </header> -->
         <div class="top-bar">
            <p>THE BEST MOBILE MACARONS IN THE MITTEN!</p>
            <!-- <router-link to="/allergens">Go to Bar</router-link> -->
        </div>
        <header>
            <div>
                <b-navbar toggleable="lg" type="light" >
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
                            <b-nav-item href="#">Home</b-nav-item>
                            <b-nav-item  href="#products-wrapper">Our Products</b-nav-item>
                            <b-nav-item  href="#contact-wrapper">Order Inquiry</b-nav-item>
                            <b-nav-item  href="#contact-wrapper">
                            <router-link to="/events">Special Events</router-link>
                            </b-nav-item>
                            <b-nav-item  href="#contact-wrapper">
                            <router-link to="/allergens">Allergens</router-link>
                            </b-nav-item>
                            
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </header>
        <div id='background-photo'><img src="../assets/SHMAINLOGO1TRANSPARENT-01.png" alt="Sugar Honey Truck" />
        </div>
        <main-landing> </main-landing>
        <div id="order-breakpoint"></div>
        <products> </products> 
        <order-form></order-form>
        <footer></footer>
    </div>
</template>
<script>
import MainLanding from './MainLanding';
import OrderForm from './OrderForm';
import Products from './Products';
export default {
    name: 'Homepage',
    props: {
        msg: String
    },

    components: {
        OrderForm,
        MainLanding,
        Products
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap');

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