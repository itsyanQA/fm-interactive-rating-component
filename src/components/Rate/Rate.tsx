import "./Rate.scss";
import { ReactComponent as StarIcon } from "../../assets/icon-star.svg";
import RateOption from "../RateOption/RateOption";
import { Dispatch, SetStateAction } from "react";
import Card from "../UI/Card";

type RateProps = {
  setRating: Dispatch<SetStateAction<number>>;
};

function Rate({ setRating }: RateProps) {
  type RateOptions = [number, number, number, number, number];
  const RATE_OPTIONS: RateOptions = [1, 2, 3, 4, 5];

  return (
    <Card props={{ className: "rate" }}>
      <div className="rate__star-container">
        <StarIcon />
      </div>
      <div className="rate__text-container">
        <h1 className="rate__title">How did we do?</h1>
        <p className="rate__description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rate__options">
        {RATE_OPTIONS.map((option) => (
          <RateOption rating={option} setRating={setRating} key={option} />
        ))}
      </div>
      <button className="rate__button">SUBMIT</button>
    </Card>
  );
}

export default Rate;
