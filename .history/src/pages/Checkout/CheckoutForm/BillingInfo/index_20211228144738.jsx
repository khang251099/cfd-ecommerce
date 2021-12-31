import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./style.scss";
BillingInfo.propTypes = {};

function BillingInfo(props) {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name."),
    lastName: yup.string().required("Please enter your last name"),

    phone: yup
      .number()
      .max(11, "Must be less than 10 characters")
      .required("Please enter your phone"),
    email: yup
      .string()
      .email("Incorrect format email is @")
      .required("Please enter your email"),
    address: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    town: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    state: yup.string().required("Please select your option"),
    ship: yup
      .boolean()
      .oneOf([true], "Required terms of use")
      .required("Required terms of use"),
    zip: yup.string().required("Please enter your postal code"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="billing-info-form">
        <div className="billing-form-item">
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            margin="dense"
            {...register("firstname")}
            error={errors.firstname ? true : false}
          />
          <p>{errors.firstname?.message}</p>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last Name"
            fullWidth
            margin="dense"
            {...register("lastname")}
            error={errors.lastname ? true : false}
          />
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="email"
            name="email"
            label="Email address"
            fullWidth
            margin="dense"
            {...register("email")}
            error={errors.email ? true : false}
          />
        </div>

        <div className="billing-form-item">
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            margin="dense"
            {...register("phone")}
            error={errors.phone ? true : false}
          />
          <p></p>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            margin="dense"
            {...register("address")}
            error={errors.address ? true : false}
          />
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="town"
            name="town"
            label="Town / City"
            fullWidth
            margin="dense"
            {...register("town")}
            error={errors.town ? true : false}
          />
        </div>

        <div className="billing-form-item">
          <InputLabel id="demo-simple-select-label">State / Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            name="state"
            label="State / Country"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            margin="dense"
            {...register("zip")}
            error={errors.zip ? true : false}
          />
        </div>
        <div className="billing-form-item">
          <FormControlLabel
            value="ship"
            control={<Checkbox color="primary" />}
            label="Ship to a different address"
            labelPlacement="Ship to a different address"
            name="ship"
            {...register("ship")}
            error={errors.ship ? true : false}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BillingInfo;
