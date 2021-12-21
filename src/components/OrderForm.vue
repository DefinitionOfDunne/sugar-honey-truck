<template>
    <div id="order">
        <form id="contact">
            <h3>Submit An Order Request</h3>
            <h4>Please note, this is not an official order. You will be contacted within 48 hours to finalize your order! <br><br> Please allow a minimum of 2 weeks for custom orders. </h4>
            <p v-if="orderType == 'presale'" class="presale-text">Each Autumn Holiday Presale Box Includes:</p>
                <ul v-if="orderType == 'presale'" class="presale-products">
                    <li>2 Sugar Honey </li>
                    <li>2 Blood Orange Honey Caramel </li>
                    <li>2 Dirty Chai Tea </li>
                    <li>2 Pumpkin Brown Butter </li>
                    <li>2 Cranberry Sage </li>
                    <li>2 Peach Old Fashion | Non-Dairy </li>
                </ul>
            <fieldset>
                <input v-model="from_name" placeholder="Your name" type="text" tabindex="1" required>
            </fieldset>
            <div v-if="orderType == 'presale'">
                <select name="pickup_option" @change="onPickupChange($event)" v-model="pickup_selection" class="form-select form-control">
                    <option value="" disabled>Select Pickup Option</option>
                    <option value="congregation">Sunday, 11/21, @ The Congregation, Detroit, 11AM-4PM</option>
                    <option value="drifter">Wednesday, 11/24, @ Drifter Coffee, Ferndale, 11AM-3PM</option>
                </select>
            </div>
            <div v-if="orderType == 'presale'">
                <select name="cars_id" @change="onAmountChange($event)" class="form-select form-control" v-model='amount_selection'>
                    <option value="" disabled>Select Box Amount</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <fieldset>
                <input v-model="from_email" placeholder="Your Email Address" type="email" tabindex="2" required @change="validateEmail">
                <span class="floating-placeholder" v-if="msg">{{msg}} </span>
            </fieldset>
            <fieldset>
                <input v-model="from_phone" placeholder="Your Phone Number" type="tel" tabindex="3" required>
            </fieldset>
            <fieldset v-if="orderType == 'standard'">
                <fieldset>
                    <textarea v-model="from_message" placeholder="Please describe your order, including amount and flavor preferences if applicable!" tabindex="5" required></textarea>
                </fieldset>
                <p id="date-label">Enter Order Pickup/Delivery Date Below:</p>
                <input v-model="from_date" type="date" tabindex="4" required>
            </fieldset>
            <div>
                <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
                    Please fill out all required fields to submit your order!
                </b-alert>
            </div>
            <div>
                <b-alert :show="dismissCountDown2" dismissible variant="success" @dismissed="dismissCountDown2=0" @dismiss-count-down="countDownChanged2">
                    Your submission was successful!
                </b-alert>
            </div>
            <fieldset>
                <div v-if="orderType == 'standard'">
                    <b-button id="submit-order-button" @click="submitOrder(from_name, from_message, from_email, from_phone, from_date)">Submit </b-button>
                </div>
                <div v-if="orderType == 'presale'">
                    <b-button id="submit-order-button" @click="submitPresaleOrder(from_name, from_email, from_phone, amount_selection, pickup_selection)">Submit </b-button>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    name: 'OrderForm',
    data() {
        return {
            from_name: '',
            from_email: '',
            from_message: '',
            from_phone: '',
            from_date: '',
            dismissSecs: 5,
            dismissCountDown: 0,
            dismissSecs2: 5,
            dismissCountDown2: 0,
            preSaleCheckbox: false,
            pickup_selection: '',
            amount_selection: '',
            msg: '',
            orderType: 'standard'
        }
    },
    methods: {
        validateEmail() {
            //eslint-disable-next-line
            if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.from_email) === false) {
                this.msg = 'Please enter a valid email address';
            } else {
                this.msg = '';
            }
        },
        onPickupChange(e) {
            this.pickup_selection = e.target.value;
        },
        onAmountChange(e) {
            this.amount_selection = e.target.value;
        },
        submitOrder(name, message, email, phone, date) {

            if (name == "" || message == "" || email == "" || phone == "" || date == "" || this.msg != "") {
                this.showAlert()
                return
            }
            var templateParams = {
                from_name: name,
                from_message: message,
                from_email: email,
                from_phone: phone,
                from_date: date
            };
            emailjs.send('service_b2xh42w', 'template_ex5504m', templateParams, 'user_TxPB31k8KlfyutvvvjmpF')
                .then((result) => {
                    this.showSuccessAlert()
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });

            // Reset form field
            this.from_name = ''
            this.from_email = ''
            this.from_message = ''
            this.from_phone = ''
        },

        submitPresaleOrder(name, email, phone, amount, pickup) {
            if (name == "" || email == "" || phone == "" || amount == "" || pickup == "" || this.msg != '') {
                this.showAlert()
                return
            }
            var templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                amount_selection: amount,
                pickup_selection: pickup
            };
            emailjs.send('service_b2xh42w', 'template_yjq5w7a', templateParams, 'user_TxPB31k8KlfyutvvvjmpF')
                .then((result) => {
                    this.showSuccessAlert()
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });

            // Reset form field
            this.from_name = ''
            this.from_email = ''
            this.from_phone = ''
            this.amount_selection = ''
            this.pickup_selection = ''
        },


        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showSuccessAlert() {
            this.dismissCountDown2 = this.dismissSecs2
        },
        countDownChanged2(dismissCountDown2) {
            this.dismissCountDown2 = dismissCountDown2
        }
    }
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

#order {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: white;
    z-index: 1;
    width: 80%;
}

.presale-cb-div {
    margin: 10px 0;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact input[type="date"],
#contact select,
#date-label,
#contact textarea,
#contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 #dfa98a, 0 5px 5px 0 rgb(0 0 0 / 24%);
}

#contact h3 {
    font-family: 'Playfair Display', sans-serif;
    display: block;
    font-size: 35px;
    font-weight: 300;
    margin: 25px 0;
}

#contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
}

.btn-primary {
    color: #fff;
    background-color: #13361c !important;
    border-color: #13361c;
}

fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact input[type="date"],
#contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
}

#contact select {
    margin: 0 0 5px;
    color: gray;
    margin: 0 0 10px;
}

.form-control {
    padding: 0.375rem .3rem;
    border-radius: 0;
    height: 38px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
}

#contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
}

#submit-order-button {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #dfa284;
    color: #524d4d;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
}

#submit-order-button:hover {
    background: #dfdfdf;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
}

#submit-order-button:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
    text-align: center;
}

#contact input:focus,
#contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
}

::-webkit-input-placeholder {
    color: #888;
}

:-moz-placeholder {
    color: #888;
}

::-moz-placeholder {
    color: #888;
}

:-ms-input-placeholder {
    color: #888;
}
</style>