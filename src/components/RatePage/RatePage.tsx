import { useState } from "react";
import Rate from "../Rate/Rate";
import "./RatePage.scss";
import RateSuccess from "../RateSuccess/RateSuccess";

function RatePage() {
  const [rating, setRating] = useState<number>(0);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);

  return (
    <main className="wrapping-container">
      {!didSubmit ? (
        <Rate setDidSubmit={setDidSubmit} rating={rating} setRating={setRating} />
      ) : (
        <RateSuccess rating={rating} />
      )}
    </main>
  );
}

export default RatePage;
