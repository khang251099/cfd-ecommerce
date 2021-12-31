import React, { useState } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

BillingMethod.propTypes = {};

function BillingMethod(props) {
  const [value, setValue] = useState(["Fedex", "DHL"]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h4 className="checkout-heading">Billing method</h4>
      <p className="checkout-desc">Please enter your payment method</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          {/* <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          /> */}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default BillingMethod;
