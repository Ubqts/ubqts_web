import "./page.css";

import { useState } from "react";

export default function Admin() {
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const handleLogin = () => {
    }

    return (
        <div>
            <div className="loginBox prevent-select">
                <p style={{ margin: "0 auto 25px auto", fontWeight: "bold" }}>管理員登入</p>
                <input
                    type="text"
                    className="userName"
                    placeholder='帳號'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    className="userPwd"
                    placeholder='密碼'
                    onChange={(e) => setUserPwd(e.target.value)}
                />
                <div className='loginBtn' onClick={() => handleLogin()}>登入</div>
            </div>
        </div>
    )
}