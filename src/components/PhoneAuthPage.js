import { useState } from "react";
import classes from "./PhoneAuthPage.module.css";
import { MdModeEdit } from "react-icons/md";
import Url from "../store/Url";
import useHttp from "../hooks/use-http";

const PhoneAuthPage = (props) => {
  const [isContinuedFromPhone, setIsContinuedFromPhone] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [phoneExt, setPhoneExt] = useState("");
  const [phone, setPhone] = useState("");
  const [OTP, setOTP] = useState("");
  const fullphone = "+" + phoneExt + phone;

  const { isLoading, error, sendRequest: sendPhoneRequest } = useHttp();

  const handlephoneextInput = (e) => {
    setPhoneExt(e.target.value);
  };

  const handlephoneInput = (e) => {
    setPhone(e.target.value);
  };
  const handleOTPInput = (e) => {
    setOTP(e.target.value);
  };

  const createTask = (phoneNumber, phoneData) => {
    // const generatedId = phoneData.name;
    // const response = { id: generatedId, text: phoneData };
    console.log(phoneData);
    // props.onAddTask(response);
  };

  const enterPhoneHandler = async (phoneNumber) => {
    sendPhoneRequest(
      {
        url: Url + "phone_number_login",
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { number: phoneNumber },
      },
      createTask.bind(null, phoneNumber)
    );
  };

  const continuePhoneButtonhandler = (e) => {
    e.preventDefault();
    if (
      phoneExt.length === 0 ||
      phone.length === 0 ||
      phoneExt.length > 3 ||
      phoneExt.length < 2 ||
      phone.length > 10 ||
      phone.length < 10
    ) {
      setIsError(true);
    } else {
      setIsError(false);
      if (!isContinuedFromPhone) {
        enterPhoneHandler(fullphone);
      }
      setIsContinuedFromPhone(true);
    }
  };

  const editPhoneHandler = () => {
    setIsContinuedFromPhone(false);
  };

  const continueOTPButtonhandler = (e) => {
    e.preventDefault();
    if (OTP.length === 0 || OTP.length < 4 || OTP.length > 4) {
      setIsError(true);
    } else {
      setIsError(false);
      // console.log(fullphone + OTP);
      props.authData();
    }
  };

  return (
    <>
      <section className={classes.container}>
        {!isContinuedFromPhone && (
          <div>
            <h2>Get OTP</h2>
            <h1>Enter Your</h1>
            <h1>Phone Number</h1>
            <form onSubmit={continuePhoneButtonhandler}>
              <input
                onChange={handlephoneextInput.bind()}
                type="number"
                name="ext"
                value={phoneExt}
              />
              <input
                onChange={handlephoneInput.bind()}
                type="number"
                name="phone"
                value={phone}
              />
              {isError && <label>Please enter correctly</label>}
              <button type="submit">Continue</button>
            </form>
          </div>
        )}

        {isContinuedFromPhone && (
          <div>
            <h2>
              {"+" + phoneExt + " " + phone}
              <MdModeEdit
                className={classes.symbol}
                onClick={editPhoneHandler}
              />
            </h2>
            <h1>Enter The</h1>
            <h1>OTP</h1>
            <form onSubmit={continueOTPButtonhandler}>
              <input
                type="number"
                name="otp"
                value={OTP}
                onChange={handleOTPInput.bind()}
              />
              {isError && <label>Please enter OTP correctly</label>}
              <div>
                <button type="submit">Continue</button>
                <p>00:69</p>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default PhoneAuthPage;
