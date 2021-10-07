<template>
<div>
    <img src="../assets/SH-MOCKUP1.jpg" class="img-fluid" alt="Responsive image">

    <div id="about-wrapper">
    <h1 id="about-title">Welcome, Sugar!</h1>

    <p >
    <b>Sugar Honey</b> is a traveling food trailer creating quality French macarons to customers throughout Michigan. 
    <br><br>
    Our subtely sweet and chewy cookie shells with perfectly balanced filling are in a class of their own!
    <br><br>
    Check out our social media pages for daily updates on seasonal specials and upcoming events!
    </p>

    <div id="social-media" class="">
        <div class="menu-item">
            <a href="https://www.instagram.com/sugarhoneytruck/" target="_blank">
                <img src="../assets/instagram-logo.png" alt="Instagram Logo" class="ig-icon" />
            </a>
        </div>
        <div class="menu-item">
            <a href="mailto:info@sugarhoneytruck.com" target="_blank">
                <img src="../assets/envelope.png" alt="Email Logo" class="email-icon" />
            </a>
        </div>
        <div class="menu-item">
            <a href="https://twitter.com/sugar_truck" target="_blank">
                <img src="../assets/black-twitter-icon.jpg" alt="Twitter Logo" class="email-icon" />
            </a>
        </div>
        <div class="menu-item">
            <a href="https://facebook.com/SugarHoneyTruck" target="_blank">
                <img src="../assets/logo-facebook-.png" alt="Facebook Logo" class="email-icon" />

            </a>
        </div>
    </div>

    </div>

   
</div>

</template>
<script>
export default {


}
</script>
<style>
@import url('http://fonts.cdnfonts.com/css/aerotis');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


.landing-title {
    font-family: 'Aerotis', sans-serif;
}

#about-title {
	font-family: 'Playfair Display', sans-serif;
	margin: 2rem;
}

#about-wrapper {
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

.img-fluid {
	position: relative;
	z-index: 1;
}

.ig-icon {
    height: 4em;
    border-radius: 50%;
    border-style: solid;
    background-color: white;
    border-color: white;
    transition: all .2s ease-in-out;
}

.email-icon {
    height: 4rem;
    border-radius: 50%;
    border-style: solid;
    background-color: white;
    border-color: white;
    transition: all .2s ease-in-out;
}


.ig-icon .email-icon img {
    background: black;
    border-radius: 50%;
    display: block;
    height: 32px;
    line-height: 1;
    padding: 7px;
    width: 32px;
}

.logo-icon {
    height: 6rem;
    border-radius: 50%;

}

.ig-icon:hover {
    background-color: #ffffff;
    border-color: #dfa98a;
    border-width: 2px;
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    transform: scale(1.1);

}


.email-icon:hover {
    background-color: #ffffff;
    border-color: #dfa98a;
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    transform: scale(1.1);
    border-width: 2px;
}



.menu ul {
    margin-bottom: 0;
}

#social-media {
	flex-direction: row !important;
    margin: 25px 0;
}

.nav-item  {
    padding-right: 2rem;
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

.menu-item {
	display: inline-block;
    margin: 5px 24px;
}
</style>