import { FormikErrors } from "formik";
import { ILogininInputValues, IForgetInputValues, IFileuploadInputValues } from "./types";

export const LoginInValidation = (values: ILogininInputValues): any => {
  const errors: FormikErrors<ILogininInputValues> = {};
  // email validation
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "This field is required";
  }

  return errors;
};

export const ForgetPassValidation = (values: IForgetInputValues): any => {
  const errors: FormikErrors<IForgetInputValues> = {};

  // email validation
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }

  return errors;
};
export const ResetPassValidation = (values: any): any => {
  const errors: FormikErrors<any> = {};
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

  if (!values.new_password) {
    errors.new_password = "This field is required";
  } else if (!strongRegex.test(values.new_password)) {
    errors.new_password =
      "Password must have at-least 8 characters with uppercase, lowercase, number & special characters included";
  }
  if (!values.confirm_password) {
    errors.confirm_password = "This field is required";
  } else if (values.new_password !== values.confirm_password) {
    errors.confirm_password = "Confirm password does not match with password";
  }

  return errors;
};

export const FileuploadValidation = (values: IFileuploadInputValues): any => {
  const errors: FormikErrors<IFileuploadInputValues> = {};

  // email validation
  if (!values.file_name) {
    errors.file_name = "This field is required";
  }

  return errors;
};
