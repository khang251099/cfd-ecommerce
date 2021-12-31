import React, { useState } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import fedex from "../../../../assets/images/fedex.png";
import dhl from "../../../../assets/images/dhl.png";
import "./style.scss";
BillingMethod.propTypes = {};

function BillingMethod(props) {
  const [value, setValue] = useState(["Fedex", "DHL"]);
  //   const radioOptions = [
  //     { label: "Apples", value: "apples" },
  //     { label: "Bananas", value: "bananas" },
  //     { label: "Cherries", value: "cherries" }
  //   ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h4 className="checkout-heading">Billing method</h4>

      <div className="desc-step">
        <p className="checkout-desc">Please enter your payment method</p>
        <p className="step">Step 2 of 5</p>
      </div>

      <div className="method-payment">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        />
        <FormControlLabel value="Fedex" control={<Radio />} label="Fedex" />
        <div className="additional-price">
          <p>+32 USD</p>
          <a href="#">
            <p>Additional price</p>
          </a>
        </div>
        <div className="shipping-name">
          <img src={fedex} />
        </div>
      </div>
      <div className="method-payment">
        <FormControlLabel value="DHL" control={<Radio />} label="DHL" />
        <div className="additional-price">
          <p>+32 USD</p>
          <a href="#">
            <p>Additional price</p>
          </a>
        </div>
        <div className="shipping-name">
          <img src={dhl} />
        </div>
      </div>

      {/* <button className="order">
        <p>Submit</p>
      </button> */}
    </>
  );
}

export default BillingMethod;
