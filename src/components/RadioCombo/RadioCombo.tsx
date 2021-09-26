import { memo, useState } from 'react';
import { RadioComboContainer } from './RadioCombo.styles';

interface IRadioCombo {
  radioData?: string[];
  title: string;
}

const RadioCombo = ({ title, radioData }: IRadioCombo) => {
  const [selectedRadio, setSelectedRadio] = useState(radioData?.[0]);

  const radiosContent = () => {
    function handleSelectRadioValue(e: any) {
      setSelectedRadio(e.currentTarget.value);
    }
    return radioData?.map((item, index) => {
      return (
        <label key={index} className={'radioCombo ' + (selectedRadio === item ? 'selected' : '')}>
          <input
            type="radio"
            className="radioComboInput"
            name={`radioCombo${title}`}
            value={item}
            onChange={(e) => handleSelectRadioValue(e)}
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
