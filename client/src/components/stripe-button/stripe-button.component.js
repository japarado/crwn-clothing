import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const StripeCheckoutButton = ({price}) =>
{
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_51I6427HniGou3a0qDZN3F2u5FK9xB1sB0jzc7wnXKhdDBjjcF20d4Jpjt9eSfW87YYRVmY4UUnoHsbmXnC9bICSW00WChe3yqv";

	const onToken = (token) => 
	{
		axios({
			url: "payment",
			method: "POST",
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(() => 
			{
				alert("Payment Successful");
			})
			.catch(((error) => 
			{
				console.log(`Payment error: ${JSON.parse(error)}`);
				alert("There was in issue with your payment. Please make sure you use the provided credit card");
			}));
	};

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
