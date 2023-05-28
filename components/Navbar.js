
const Navbar = () => {
  return (
    <div>
        <nav class="nav">
        <div class="logo">
          <img src="./images/whole.png" alt="logo" />
        </div>
        <div class="nav_search_box">
          <i class="fas fa-search"></i>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div class="auth" onclick="openModal()">
          Create account.
          <span style={{color: "#4c6ff5", fontWeight: "bold"}}>It's free!!</span>
        </div>

        <div id="registerModal" class="modal">
          <div class="modal-content">
            <p style={{backgroundColor: "#effff4"}}>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="modal_header">
              <h2>Create Account</h2>
              <p>
                Already have an account?
                <span
                  onclick="displayLoginModal()"
                  style={{color: "#2f6ce5", cursor: "pointer"}}
                  >Sign In</span
                >
              </p>
            </div>
            <div class="modal_grid_container">
              <div class="modal_grid_item">
                <div class="form-container">
                  <form>
                    <div
                      class="form_grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '3px',
                      }}
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <button class="button-blue" type="submit">
                      Create Account
                    </button>
                    <button class="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign up with Facebook
                    </button>
                    <button class="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign up with
                      Google
                    </button>
                  </form>
                </div>
              </div>
              <div class="modal_grid_item">
                <img src="./images/login_heart.png" alt="" />
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
            <div class="modal_grid_container_mobile">
              <div class="modal_grid_item">
                <div class="form-container">
                  <form>
                    <div
                      class="form_grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3px',
                      }}
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <button class="button-blue" type="submit">
                      Create Account
                    </button>
                    <button class="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign up with Facebook
                    </button>
                    <button class="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign up with
                      Google
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="loginModal" class="modal">
          <div class="modal-content">
            <p style={{backgroundColor: "#effff4"}}>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="modal_header">
              <h2>Sign In</h2>
              <p>
                Don’t have an account yet?
                <span
                  onclick="openModal()"
                  style={{color: "#2f6ce5", cursor: "pointer"}}
                  >Create new for free!</span
                >
              </p>
            </div>
            <div class="modal_grid_container">
              <div class="modal_grid_item">
                <div class="form-container">
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <button class="button-blue" type="submit">Sign In</button>
                    <button class="button-facebook" type="button">
                      <img src="./images/fb.png" alt="" /> Sign in with Facebook
                    </button>
                    <button class="button-google" type="button">
                      <img src="./images/google.png" alt="" /> Sign in with
                      Google
                    </button>
                    <p>Forgot Password?</p>
                  </form>
                </div>
              </div>
              <div class="modal_grid_item">
                <img src="./images/login_heart.png" alt="" />
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
            <div class="modal_grid_container_mobile">
              <div class="form-container">
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button class="button-blue" type="submit">Sign In</button>
                  <button class="button-facebook" type="button">
                    <img src="./images/fb.png" alt="" /> Sign in with Facebook
                  </button>
                  <button class="button-google" type="button">
                    <img src="./images/google.png" alt="" /> Sign in with Google
                  </button>
                  <p style={{color: "black", fontSize: "11px"}}>Forgot Password?</p>
                </form>
              </div>
            </div>
          </div>
        </div>



        <div class="nav_icons">
          <ul>
            <i class="fas fa-square"></i>
            <i class="fa fa-search"></i>
            <i class="fas fa-sign-in" style={{cursor: "pointer"}} onclick="openModal()"></i>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar