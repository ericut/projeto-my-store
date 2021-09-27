import { memo, useState, useEffect } from 'react';
import { RadioComboContainer } from './RadioCombo.styles';

interface IRadioCombo {
  radioData?: string[];
  title: string;
  handleChanger: (value: string) => void;
}

const RadioCombo = ({ title, radioData, handleChanger }: IRadioCombo) => {
  const [selectedRadio, setSelectedRadio] = useState(radioData?.[0]);

  useEffect(() => {
    handleChanger(selectedRadio ? selectedRadio : '');
  }, [handleChanger, selectedRadio]);

  const radiosContent = () => {
    return radioData?.map((item, index) => {
      return (
        <label key={index} className={'radioCombo ' + (selectedRadio === item ? 'selected' : '')}>
          <input
            type="radio"
            className="radioComboInput"
            name={`radioCombo${title}`}
            value={item}
            onChange={(e) => setSelectedRadio(e.currentTarget.value)}
          ></input>
          <span className="radioComboLabel">{item}</span>
        </label>
      );
    });
  };

  return (
    <RadioComboContainer>
      <span className="productControlTitles">{title}</span>
      <div className="radioGroup">{radiosContent()}</div>
    </RadioComboContainer>
  );
};

export default memo(RadioCombo);
