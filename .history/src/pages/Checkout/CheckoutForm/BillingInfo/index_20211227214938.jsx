import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../componens/InputField";
import Select from "@material-ui/core/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
BillingInfo.propTypes = {};

function BillingInfo(props) {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name."),
    lastName: yup.string().required("Please enter your last name"),
    password: yup.string().required("Please enter your password"),
    phone: yup
      .number()
      .min(10, "Must be more than 10 characters")
      .required("Please enter your phone"),
  });
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      town: "",
      address: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <InputField name="firstName" label="First name" form={form} />
      <InputField name="lastName" label="Last name" form={form} />
      <InputField name="email" label="Email address" form={form} />
      <InputField name="phone" label="Phone number" form={form} />
      <InputField name="address" label="Address" form={form} />
      <InputField name="town" label="Town / City" form={form} />
      <InputLabel id="demo-simple-select-label">State / Country</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <InputField name="postal" label="ZIP / Postal Code" form={form} />
      <FormControlLabel
        value="ship"
        control={<Checkbox color="primary" />}
        label="Ship to a different address"
        labelPlacement="Ship to a different address"
      />
    </div>
  );
}

export default BillingInfo;
