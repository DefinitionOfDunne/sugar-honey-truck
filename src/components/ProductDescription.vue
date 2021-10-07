<template>
    <div id="macaron-item">
        <p id="product_name">{{ this.productName }} </p>
        <div id="product-body">
            <img id="macaron-img" :src="require('@/assets/product-photos/' + productImage + '')" />
            <ul>
                <li v-for="(item, index) in ingredients" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductDescription',
    props: {
        productName: String,
        ingredients: Array,
        productImage: String
    }

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Antic&display=swap');

#product_name {
    color: black;
    margin: 10px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 20px;
}

#macaron-item {
    /*max-width: 500px;*/
    margin: 0 auto;
    position: relative;
    border-style: solid;
    border-radius: 12px;
    border-color: #F5F5F5;
    background-color: #F5F5F5;
    z-index: 1;
    width: 60%;
    margin-top: 20px;
}

#macaron-img {
    width: 25vh;
    height: 25vh;
    float: left;
    padding: 10px;
    margin: 10px;
}

#product-body {
    display: flex;
    background-color: white;
    padding: 1rem 0rem;
}

ul {
    list-style-type: none !important;
    text-align: left;
    margin: 2rem 0;
}

li {
    margin: 5px 0;
    font-family: 'Antic', sans-serif;
}

@media screen and (max-width: 760px) {
    #product-body {
        display: block;
    }

    ul {
        width: 100%;
        padding: 0;
    }

    #macaron-img {
        width: 25vh;
        height: 25vh;
        padding: 10px;
        float: none;
    }

    li {
        text-align: center;
    }
}
</style>