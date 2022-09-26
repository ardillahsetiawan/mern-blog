import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={35} />
        <Button title="login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title="Belum Punya Akun? Silahkan Daftar"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
