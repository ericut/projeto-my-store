import { useState } from 'react';
import { ShippingContainer } from './Shipping.styles';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Shipping = () => {
  const [shippingNumber, setShippingNumber] = useState('');

  const shippingMask = (value: string) => {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
  };

  function handleShippingCalcuator() {
    alert(`CEP ${shippingNumber}`);
  }

  return (
    <ShippingContainer>
      <span className="shippingTitle">Simular Frete</span>
      <div className="shippingCalculator">
        <Input
          placeholder="Digite seu CEP"
          maxLength={9}
          value={shippingNumber}
          onChange={(e) => setShippingNumber(shippingMask(e.target.value))}
        />
        <Button onClick={() => handleShippingCalcuator()}>Ok</Button>
      </div>
      <span className="shippingNumberFinder">Não sei meu CEP</span>
    </ShippingContainer>
  );
};

export default Shipping;
