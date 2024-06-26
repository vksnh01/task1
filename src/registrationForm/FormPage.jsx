import React, { useState } from "react";
import "./FormPage.css";

const FormPage = () => {
  const [guestInputStyle, setGestInputStyle] = useState("none");
  const [checkRadio, setCheckRadio] = useState(false);
  const [inputFieldData, setInputFieldData] = useState({
    name: "",
    email: "",
    age: "",
    guestName: "",
  });
  const [storeData, setStoreData] = useState([]);

  const showGuestInputFieldHandler = (val) => {
    if (val === "yes") {
      setGestInputStyle("block");
    } else {
      setGestInputStyle("none");
    }
  };
  const onChangeEventHandler = (e) => {
    setInputFieldData({ ...inputFieldData, [e.target.name]: e.target.value });
  };

  const formEventHandler = (e) => {
    e.preventDefault();
    if (
      inputFieldData.name === "" &&
      inputFieldData.email === "" &&
      inputFieldData.age === ""
    ) {
      alert("please fill to all input fields then submit to form.\nThank You");
    } else if (inputFieldData.name === "") {
      alert("please enter name");
    } else if (inputFieldData.email === "") {
      alert("please enter email");
    } else if (inputFieldData.age === "") {
      alert("please Enter Age");
    } else {
      if (inputFieldData.number < 18) {
        alert("Please enter valid Age");
      } else {
        setStoreData([inputFieldData]);
        alert("Data successfully store on temporary database");
        console.log(storeData);
        alert(
          `Name: ${inputFieldData.name} \nEmail-id: ${inputFieldData.email} \nNumber:  ${inputFieldData.age} \nGuest: ${inputFieldData.guestName}`
        );
        // alert("Name: "+inputFieldData.name)
      }
    }
  };
  return (
    <div className="main-div">
      <div className="form-main-div">
        <div className="title-div">
          <h1>Event Registration Form</h1>
        </div>
        <form action="" className="form-div" onSubmit={formEventHandler}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => {
              onChangeEventHandler(e);
            }}
          />
          <input
            type="email"
            placeholder="Enter Email-ID"
            name="email"
            onChange={(e) => {
              onChangeEventHandler(e);
            }}
          />
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            onChange={(e) => {
              onChangeEventHandler(e);
            }}
          />
          <label htmlFor="">Are you attending with a guest ?</label>
          <div className="option-main-div">
            <div
              className="option-div"
              onClick={() => {
                showGuestInputFieldHandler("yes");
              }}
            >
              <input
                type="radio"
                name="guest"
                value="yes"
                id="yesOption"
                checked={checkRadio}
                onClick={() => {
                  setCheckRadio(true);
                }}
                onChange={(e) => {
                  onChangeEventHandler(e);
                }}
              />
              <label htmlFor="yesOption">Yes</label>
            </div>
            <div
              className="option-div"
              onClick={() => {
                showGuestInputFieldHandler("no");
              }}
            >
              <input
                type="radio"
                name="guest"
                value="no"
                id="noOption"
                checked={!checkRadio}
                onClick={() => {
                  setCheckRadio(false);
                }}
                onChange={(e) => {
                  onChangeEventHandler(e);
                }}
              />
              <label htmlFor="noOption">No</label>
            </div>
          </div>
          <input
            type="text"
            id="guestInput"
            name="guestName"
            placeholder="Guest Name"
            style={{ display: guestInputStyle }}
            onChange={(e) => {
              onChangeEventHandler(e);
            }}
          />
          <button>Submit Now</button>
        </form>
      </div>
      {/* {
        storeData.map((e)=>{
          const {name,email,number,guestName} = e;
          alert("Name: "+name+"\nEmail-id: "+email+"\nNumber: "+number+"\nGuest: "+guestName)
        })} */}
    </div>
  );
};

export default FormPage;
