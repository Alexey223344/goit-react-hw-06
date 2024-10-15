import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum  50 characters")
      .required("Must be filled"),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .min(3, "Minimum 3 digits")
      .max(50, "Maximum 50 digits")
      .required("Must be filled"),
  });
  const handleForm = (values, options) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );
    options.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        <Form>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="p" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
