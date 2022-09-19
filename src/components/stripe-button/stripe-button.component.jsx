import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_DZcFirtkex3eVGdZwttjQVPM00C218qiTE';

  const onToken = token => {
    console.log(token);
    alert('Payment is Successful!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CROWN Clothing GmbH'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
