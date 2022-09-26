import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full name" />
        <Gap height={10} />
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={35} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link title="Kembali Ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
