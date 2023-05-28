import { useState } from "react";

const Navbar = () => {

  const [displayLogin,setDisplayLogin]=useState("none");
  const [displayRegister,setDisplayRegister]=useState("none");

  const setRegister=()=>{
    setDisplayRegister('block');
    setDisplayLogin('none');
  }

  const setLogin=()=>{
    setDisplayLogin('block');
    setDisplayRegister('none');
  }

  const closeModal=()=>{
    setDisplayLogin('none');
    setDisplayRegister('none');
  }

  return (
    <div>
        <nav className="nav">
        <div className="logo">
          <img src="./images/whole.png" alt="logo" />
        </div>
        <div className="nav_search_box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="auth" onClick={setRegister}>
          Create account.
          <span style={{color: "#4c6ff5", fontWeight: "bold"}}>Its free!!</span>
        </div>

        <div id="registerModal" style={{display:displayRegister}} className="modal">
          <div className="modal-content">
            <p style={{backgroundColor: "#effff4"}}>
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal_header">
              <h2>Create Account</h2>
              <p>
                Already have an account?
                <span
                  onClick={setLogin}
                  style={{color: "#2f6ce5", cursor: "pointer"}}
                  >Sign In</span
                >
              </p>
            </div>
            <div className="modal_grid_container">
              <div className="modal_grid_item">
                <div className="form-container">
                  <form>
                    <div
                      className="form_grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '3px',
                      }}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <button className="button-blue" type="submit">
                      Create Account
                    </button>
                    <button className="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign up with Facebook
                    </button>
                    <button className="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign up with
                      Google
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal_grid_item">
                <img src="/images/login_heart.png" alt="" />
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
            <div className="modal_grid_container_mobile">
              <div className="modal_grid_item">
                <div className="form-container">
                  <form>
                    <div
                      className="form_grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3px',
                      }}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <button className="button-blue" type="submit">
                      Create Account
                    </button>
                    <button className="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign up with Facebook
                    </button>
                    <button className="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign up with
                      Google
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="loginModal" style={{"display":displayLogin}} className="modal">
          <div className="modal-content">
            <p style={{backgroundColor: "#effff4"}}>
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal_header">
              <h2>Sign In</h2>
              <p>
                Don’t have an account yet?
                <span
                  onClick={setRegister}
                  style={{color: "#2f6ce5", cursor: "pointer"}}
                  >Create new for free!</span
                >
              </p>
            </div>
            <div className="modal_grid_container">
              <div className="modal_grid_item">
                <div className="form-container">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <button className="button-blue" type="submit">Sign In</button>
                    <button className="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign in with Facebook
                    </button>
                    <button className="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign in with
                      Google
                    </button>
                    <p>Forgot Password?</p>
                  </form>
                </div>
              </div>
              <div className="modal_grid_item">
                <img src="./images/login_heart.png" alt="" />
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
            <div className="modal_grid_container_mobile">
              <div className="form-container">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button className="button-blue" type="submit">Sign In</button>
                  <button className="button-facebook" type="button">
                    <img src="./images/fb.png" alt="" /> Sign in with Facebook
                  </button>
                  <button className="button-google" type="button">
                    <img src="./images/google.png" alt="" /> Sign in with Google
                  </button>
                  <p style={{color: "black", fontSize: "11px"}}>Forgot Password?</p>
                </form>
              </div>
            </div>
          </div>
        </div>



        <div className="nav_icons">
          <ul>
            <i className="fas fa-square"></i>
            <i className="fa fa-search"></i>
            <i className="fas fa-sign-in" style={{cursor: "pointer"}} onClick={setRegister}></i>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar