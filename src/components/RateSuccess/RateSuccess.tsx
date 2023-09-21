import Card from "../UI/Card";
import "./RateSuccess.scss";
import { ReactComponent as ThankYouIllustration } from "../../assets/illustration-thank-you.svg";

type RateSuccessProps = {
  rating: number;
};

function RateSuccess({ rating }: RateSuccessProps) {
  return (
    <Card props={{ className: "success", style: { alignItems: "center" } }}>
      <ThankYouIllustration />
      <div className="success__selection-container">
        <span className="success__selection-container__text">{`You selected ${rating} out of 5`}</span>
      </div>
      <div className="success__thank-you-description-container">
        <h1 className="success__thank-you">Thank you!</h1>
        <p className="success__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
}

export default RateSuccess;
