import { useState } from "react";
import Rate from "../Rate/Rate";
import "./RatePage.scss";
import RateSuccess from "../RateSuccess/RateSuccess";

function RatePage() {
  const [rating, setRating] = useState<number>(0);

  return (
    <main className="wrapping-container">
      {!rating ? (
        <Rate setRating={setRating} />
      ) : (
        <RateSuccess rating={rating} />
      )}
    </main>
  );
}

export default RatePage;
