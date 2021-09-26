import { useState, memo } from 'react';
import { ProductRatingContainer } from './ProductRating.styles';
import { IProductData } from '../../../interfaces/IProductData';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IProductInfo {
  productData: IProductData | undefined;
}

const ProductRating = ({ productData }: IProductInfo) => {
  const [score, setScore] = useState<any>(productData?.score);
  const [hover, setHover] = useState(0);

  return (
    <ProductRatingContainer>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              key={index}
              onClick={() => setScore(index)}
              className={'starButton'}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(score)}
            >
              {index <= (hover || score) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          );
        })}
      </div>
      <div className="rating">Valiações ({productData?.rates})</div>
    </ProductRatingContainer>
  );
};

export default memo(ProductRating);
