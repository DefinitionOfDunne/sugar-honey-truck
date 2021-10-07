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
        
        <div id="event-text-wrapper">
        <h1 id="events-title">Special Events & Weddings</h1>
            <p id="event-text-1">Looking to have a special treat at your wedding or special event? </p>
            <p id="event-text-1">You can rent our truck for your location and make your memories extra special!</p>
            <p id="event-text-1">Use our Order Form or message us on Instagram to get your reservation started!</p>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

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

#events-title {
    font-family: 'Playfair Display', sans-serif;
    margin: 2rem 2rem 4rem 2rem;
}

#event-text-wrapper {
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

.product-icon {
    height: 6rem;
    border-radius: 50%;

}

.navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: #F5F5F5 !important;
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

#event-text-1 {
    margin: 1rem 4rem;
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