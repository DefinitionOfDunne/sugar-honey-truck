<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>


//import Homepage from './components/Homepage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
    name: 'App',
    methods: {
        destroyOverlay() {
            var element = document.getElementById('overlay-wrapper');
            element.remove();
        },
        linkToOrder() {
            var element = document.getElementById('overlay-wrapper');
            element.remove();
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center; 
}

#overlay-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 5;
    width: 100%;
    height: 100%;
}

#overlay-button {
    background-color: #ffc107;
    color: black;
    margin: 2rem;
}

#presale-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: #13361c;
    z-index: 1000;
}

.presale-header {
    font-size: 2rem;
    margin: 2rem 1rem;
    font-family: 'Courgette', cursive;
    color: #ffc107;
}

.presale-text {
    font-size: 1rem;
}

.presale-header2 {
    font-size: 1.4rem;
    color: #ffc107;
}

#x-button {
    text-align: center;
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    position: relative;
    margin: 0 auto;
    float: right;
    background: lightgray;
    color: white;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    font-weight: bold;
}

.presale-products {
    list-style: none;
    padding: 0;
    font-size: .8rem;
}

@media screen and (max-width: 500px) {

    #presale-overlay {
        margin-top: 20px;
    }

    .presale-header {
        font-size: 1rem;
        margin: 2rem 1rem;
        font-family: 'Courgette', cursive;
    }

    .presale-text {
        font-size: .75rem;
        padding: 5px;
    }

    .presale-header2 {
        font-size: .75rem;
    }

    .presale-products {
        font-size: .6rem;
    }
}
</style>