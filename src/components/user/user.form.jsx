import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickButton = () => {
    //console.log(">>>>>>>> check state: ", { fullname, email, password })
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = { fullName, email, password, phone }
    axios.post(URL_BACKEND, data)
  }

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(evt) => setFullName(evt.target.value)} />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(evt) => setEmail(evt.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(evt) => setPassword(evt.target.value)} />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)} />
        </div>
        <div>
          <Button
            type="primary"
            onClick={handleClickButton}
          >Create User</Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;