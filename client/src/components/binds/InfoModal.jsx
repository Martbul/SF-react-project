import { useState, useEffect } from "react";

import * as bindsService from "../../services/bindsService";
import useForm from "../../hooks/useForm";

const bindDetailsFormKeys = {
  Name: "name",
  Email: "email",
  PhoneNumber: "phoneNumber",
  DayAndTimeForDelivery: "dayAndTimeForDelivery",
  City: "city",
  StreetAndNumber: "streetAndNumber",
  Order: "order",
};

export default function InfoModal({ hideModal, bindId }) {
  const [bindDetails, setBindDetails] = useState({});

  useEffect(() => {
    bindsService.getOne(bindId).then((result) => setBindDetails(result));
  }, [bindId]);

  const logger = () => {
    console.log(bindDetails);
  };
  const { formValues, onChange, onSubmit } = useForm(logger, {
    [bindDetailsFormKeys.Name]: "",
    [bindDetailsFormKeys.Email]: "",
    [bindDetailsFormKeys.PhoneNumber]: "",
    [bindDetailsFormKeys.DayAndTimeForDelivery]: "",
    [bindDetailsFormKeys.City]: "",
    [bindDetailsFormKeys.StreetAndNumber]: bindDetails.address,
    [bindDetailsFormKeys.Order]: bindDetails.order,
  });

  return (
    <div className="overlay">
      <div className="backdrop" onClick={hideModal}></div>
      <div className="modal11">
        <div className="user-container">
          <header className="headers">
            <h2>Order Info</h2>
            <button className="btn close" onClick={hideModal}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.Name]}
                  />
                </div>
                {/* <p className="form-error">
                  First name should be at least 3 characters long!
                </p> */}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.Email]}
                  />
                </div>
                {/* <p className="form-error">Email is not valid!</p> */}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.PhoneNumber]}
                  />
                </div>
                {/* <p className="form-error">Phone number is not valid!</p> */}
              </div>

              <div className="form-group">
                <label htmlFor="coudayAndTimeForDeliveryntry">
                  Day and time for delivery
                </label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="dayAndTimeForDelivery"
                    name="dayAndTimeForDelivery"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.dayAndTimeForDelivery]}
                  />
                </div>
                {/* <p className="form-error">
                  Country should be at least 2 characters long!
                </p> */}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city"></i>
                  </span>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.City]}
                  />
                </div>
                {/* <p className="form-error">
                  City should be at least 3 characters long!
                </p> */}
              </div>
              <div className="form-group">
                <label htmlFor="streetAndNumber">Street</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="streetAndNumber"
                    name="streetAndNumber"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.StreetAndNumber]}
                  />
                </div>
                {/* <p className="form-error">
                  Street should be at least 3 characters long!
                </p> */}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="order">Order</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="order"
                    name="order"
                    type="text"
                    onChange={onChange}
                    value={formValues[bindDetailsFormKeys.Order]}
                  />
                </div>
                {/* <p className="form-error">
                  Last name should be at least 3 characters long!
                </p> */}
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={hideModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
