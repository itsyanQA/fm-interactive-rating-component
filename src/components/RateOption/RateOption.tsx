import { Dispatch, SetStateAction } from "react";
import "./RateOption.scss";

type RateOptionProps = {
  rating: number;
  selectedRating: number;
  setRating: Dispatch<SetStateAction<number>>;
};

function RateOption({ rating, selectedRating, setRating }: RateOptionProps) {
  return (
    <div
      className={`rate-option ${rating === selectedRating ? "selected" : ""}`}
      onClick={() => setRating(rating)}
    >
      <span className="rate-option__rating">{rating}</span>
    </div>
  );
}

export default RateOption;
