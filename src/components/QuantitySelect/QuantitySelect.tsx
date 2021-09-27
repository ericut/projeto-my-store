import { useState, useEffect } from 'react';
import { QuantitySelectContainer } from './QuantitySelect.styles';
import IconButton from '../IconButton/IconButton';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface IQuantitySelect {
  handleChanger: (value: number) => void;
  maxQuantity?: number;
}

const QuantitySelect = ({ handleChanger, maxQuantity }: IQuantitySelect) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    handleChanger(quantity);
  }, [handleChanger, quantity]);

  const quantitySelector = () => {
    let getMaxQuantity = maxQuantity ? maxQuantity : 20;

    function handleQuantityIncrement() {
      if (quantity < getMaxQuantity) {
        setQuantity(quantity + 1);
      } else {
        alert(`Quantidade máxima de ${getMaxQuantity} unidades.`);
      }
    }

    function handleQuantityDecrement() {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(1);
      }
    }

    return (
      <>
        <IconButton onClick={() => handleQuantityIncrement()}>
          <AiOutlinePlus />
        </IconButton>
        <span className="quantityCounter">{quantity}</span>
        <IconButton onClick={() => handleQuantityDecrement()}>
          <AiOutlineMinus />
        </IconButton>
      </>
    );
  };

  return (
    <QuantitySelectContainer>
      <span className="productControlTitles">Quantidade</span>
      <span className="quantitySelectorContainer">{quantitySelector()}</span>
    </QuantitySelectContainer>
  );
};

export default QuantitySelect;
