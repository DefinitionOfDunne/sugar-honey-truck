<template>
  <div id="contact-wrapper">  
    <form id="contact">
    <h3>Submit An Order Request</h3>
    <h4>Please note, this is not an official order. One of us will contact you within 48 hours to finalize your order! <br><br> Please allow a minimum of 2 weeks for custom orders. </h4>
    <fieldset>
      <input v-model="from_name" placeholder="Your name" type="text" tabindex="1" required>
    </fieldset>
    <fieldset>
      <input v-model="from_email" placeholder="Your Email Address" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input v-model="from_phone" placeholder="Your Phone Number" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
    <fieldset>
      <textarea v-model="from_message" placeholder="Please describe your order, including amount and flavor preferences if applicable!" tabindex="5" required></textarea>
    </fieldset>
    <p id="date-label">Enter Order Pickup/Delivery Date Below:</p>
      <input v-model="from_date" type="date" tabindex="4" required>
    </fieldset>
    <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Please fill out all required fields to submit your order!
    </b-alert>
  </div>
  <div>
    <b-alert
      :show="dismissCountDown2"
      dismissible
      variant="success"
      @dismissed="dismissCountDown2=0"
      @dismiss-count-down="countDownChanged2"
    >
      Your submission was successful!
    </b-alert>
  </div>
    <fieldset>
      <b-button id="submit-order-button" @click="submitOrder(from_name, from_message, from_email, from_phone, from_date)">Submit </b-button>
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
      dismissSecs2:5,
      dismissCountDown2: 0
    }
  },
  methods: {
    submitOrder(name, message, email, phone, date) {

      if (name == "" || message == "" || email == "" || phone == "" || date == "") {
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
      emailjs.send('dillydecor', 'template_ex5504m', templateParams, 'user_TxPB31k8KlfyutvvvjmpF')
        .then((result) => {
            this.showSuccessAlert()
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });

      // Reset form field
      this.from_name= ''
      this.from_email= ''
      this.from_message= ''
      this.from_phone= ''
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showSuccessAlert(){
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

#contact-wrapper {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: white;
  z-index: 1;
  width: 80%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact input[type="date"],
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

#submit-order-button{
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