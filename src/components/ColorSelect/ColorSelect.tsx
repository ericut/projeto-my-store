import { memo, useState } from 'react';
import { ColorSelectContainer } from './ColorSelect.styles';
import { IProductData } from '../../interfaces/IProductData';

interface IColorSelect {
  productData: IProductData | undefined;
}

const ColorSelect = ({ productData }: IColorSelect) => {
  const productColors = productData?.colors;
  const [selectedColor, setSelectedColor] = useState(productData?.colors[0].name);

  const colorsContent = () => {
    function handleSelectColor(e: any) {
      setSelectedColor(e.currentTarget.value);
    }

    return productColors?.map(({ name, hex }, index) => {
      return (
        <label key={index} className={'colorRadio ' + (selectedColor === name ? 'selected' : '')}>
          <span className="colorRadioHex" style={{ background: hex }}></span>
          <input
            type="radio"
            className="colorRadioInput"
            name="colorSelect"
            value={name}
            onChange={(e) => handleSelectColor(e)}
          ></input>
          {selectedColor === name ? <span className="colorRadioLabel">{name}</span> : ''}
        </label>
      );
    });
  };

  return (
    <ColorSelectContainer>
      <span className="productControlTitles">Cor</span>
      <div className="radioGroup">{colorsContent()}</div>
    </ColorSelectContainer>
  );
};

export default memo(ColorSelect);
