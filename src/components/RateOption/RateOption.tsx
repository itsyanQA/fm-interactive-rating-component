import { Dispatch, SetStateAction } from "react";
import "./RateOption.scss";

type RateOptionProps = {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
};

function RateOption({ rating, setRating }: RateOptionProps) {
  return (
    <div className="rate-option" onClick={() => setRating(rating)}>
      <span className="rate-option__rating">{rating}</span>
    </div>
  );
}

export default RateOption;
