import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => 
{
	console.log(token);
	alert("Pament successful");
};

const StripeCheckoutButton = ({price}) =>
{
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_51I6427HniGou3a0qDZN3F2u5FK9xB1sB0jzc7wnXKhdDBjjcF20d4Jpjt9eSfW87YYRVmY4UUnoHsbmXnC9bICSW00WChe3yqv";

	return(
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
