import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { url } from "./url";

function CheckoutForm() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("mxn");
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      setPaymentSuccess(true);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePaymentIntent = async () => {
    const response = await fetch(`${url}/api/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        currency: currency,
      }),
    });
    const { client_secret } = await response.json();
    setClientSecret(client_secret);
  };

  return (
    <>
      {!paymentSuccess && (
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
            />
          </label>
          <label>
            Currency:
            <select value={currency} onChange={handleCurrencyChange}>
              <option value="mxn">MXN</option>
              <option value="usd">USD</option>
            </select>
          </label>
          <CardElement />
          <button onClick={handlePaymentIntent}>Pay with Stripe</button>
        </form>
      )}
      {paymentSuccess && <div>Payment Successful!</div>}
    </>
  );
}

export default CheckoutForm;
