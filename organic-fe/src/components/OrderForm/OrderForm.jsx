import "./OrderForm.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import InputMask from 'react-input-mask';
import {useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {initialValues, validationSchema} from "./validation-rules.js";

export default function OrderForm() {
  const cartArr = useSelector((state) => state.cart.cartArr);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = ({fullName, email, address, phone, message}) => {
    const order = {
      customer: fullName,
      addInfo: message,
      email,
      address,
      phone,
      orderList: [...cartArr]
    }
    console.log(order);
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    navigate("/session-timed-out");
  }
  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form" noValidate>
          <div className="form__field">
            <label htmlFor="fullName">Full Name*</label>
            <Field type="text" id="fullName" name="fullName" placeholder="Your Email Address" />
            <ErrorMessage className="form__error" name="fullName" component="div" />
          </div>

          <div className="form__field">
            <label htmlFor="email">Your Email*</label>
            <Field type="text" id="email" name="email" placeholder="example@yourmail.com" />
            <ErrorMessage className="form__error" name="email" component="div" />
          </div>

          <div className="form__field">
            <label htmlFor="address">Address*</label>
            <Field type="text" id="address" name="address" placeholder="your company  address" />
            <ErrorMessage className="form__error" name="address" component="div" />
          </div>

          <div className="form__field">
            <label htmlFor="phone">Phone number*</label>
            <Field
              type="text"
              id="phone"
              name="phone"
              as={InputMask}
              mask="+38(099)-999-99-99"
              pattern="[0-9]*"
              placeholder="Enter your phone"
            />
            <ErrorMessage className="form__error" name="phone" component="div" />
          </div>

          <div className="form__field">
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" placeholder="some extra information" />
            <ErrorMessage className="form__error" name="message" component="div" />
          </div>

          <button type="submit">Confirm</button>
        </Form>
      </Formik>
  );
}