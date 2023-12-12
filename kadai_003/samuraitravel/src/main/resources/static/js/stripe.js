 const stripe = Stripe('pk_test_51OHnVWEeZNnC0ZM1qU4VhuwcGA31uBlSO1OsdqVgLtuWE3Ypq470dSwsJY1CEJ3HwJzU6GtOOhtyk98n43RvBS5m00zpMk76nR');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });