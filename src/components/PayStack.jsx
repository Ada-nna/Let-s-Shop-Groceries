import React from 'react';
import { PaystackButton } from 'react-paystack';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000, 
  publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};

function Paystack() {
   const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="App">
      <PaystackButton {...componentProps} />
    </div>
  );
}

export default Paystack;