import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./url";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KjBqNA9KCn8yVMOEG2TF4LAS9CZwMVfMuAIHu1opMaabVxmgUri9qkETyQ9Q7DGyB6g9bNxEg62zf6dsqQZGdij00t1hmBwwH"
);

const Stripe = () => {
  const [clientSecret, setClientSecret] = useState("");

  const fetchPaymentIntent = async () => {
    const response = await axios.post(`${url}/api/stripe`, {
      amount: 1000, // set the amount you want to charge in cents
      currency: "mxn",
    });
    setClientSecret(response.data.clientSecret);
  };
  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  return (
    <div>
      <div className="btn">here</div>

      <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
};

export default Stripe;
