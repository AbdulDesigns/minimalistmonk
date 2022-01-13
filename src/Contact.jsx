import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    msg: "",
  });

  const InputEvent = (e) => {
    //object destructuring
    const { name, value } = e.target;
    //calling prev value
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname} congrats you are in!!`);
  };
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="eg:Abdul Razaq"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={InputEvent}
                  placeholder="eg:7569995548"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" classNae="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-4">
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
