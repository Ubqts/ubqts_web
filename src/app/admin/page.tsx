import "./page.css";


export default function Admin() {
    return (
        <div>
            <div className="loginBox prevent-select">
                <p style={{ margin: "0 auto 25px auto", fontWeight: "bold" }}>管理員登入</p>
                <input
                    type="text"
                    className="userName"
                    placeholder='帳號'
                />
                <input
                    type="password"
                    className="userPwd"
                    placeholder='密碼'
                />
                <div className='loginBtn'>登入</div>
            </div>
        </div>
    )
}