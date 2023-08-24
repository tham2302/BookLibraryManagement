import { useState } from 'react';
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { dangNhap, dangKi } from '../components/Function/User';

function ClientLogin() {
  const [luaChon, setLuaChon] = useState(0);

  const [ten, setTen] = useState("");
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");

  const [errors, setErrors] = useState({ email: false, matKhau: false });

  const afterLogin = () => {
    window.location.reload();
  };

  const login = () => {
    if (validateInputs()) {
      dangNhap(email, matKhau, afterLogin);
    }
  };

  const signUp = () => {
    if (validateInputs()) {
      dangKi(ten, email, matKhau, afterLogin);
    }
  };

  const validateInputs = () => {
    let isValid = true;
    const newErrors = { email: false, matKhau: false };

    if (luaChon === 1 && ten.trim() === "") {
      newErrors.ten = true;
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = true;
      isValid = false;
    }

    if (matKhau.trim() === "") {
      newErrors.matKhau = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: '#00aeff',
    padding: '10px 405px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
    boxShadow: isHovered ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => setLuaChon(0)} active={luaChon === 0}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => setLuaChon(1)} active={luaChon === 1}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={luaChon === 0}>
            <ul>
              <div>
              <label htmlFor="form1">Tên người dùng/Email</label>
              <MDBInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                wrapperClass='mb-4'
                id='form1'
                type='text'
                required
              />
              {errors.email && <span style={{ color: 'red' }}>Vui lòng điền Tên người dùng/email của bạn.</span>}
              </div>
              <div>
              <label htmlFor="form2">Mật Khẩu</label>
              <MDBInput
                value={matKhau}
                onChange={(e) => setMatKhau(e.target.value)}
                wrapperClass='mb-4'
                id='form2'
                type='password'
                required
              />
              {errors.matKhau && <span style={{ color: 'red' }}>Vui lòng điền mật khẩu của bạn.</span>}
              </div>
            </ul>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <button onClick={login} className="mb-4" style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Đăng nhập
            </button>
          </MDBTabsPane>

          <MDBTabsPane show={luaChon === 1}>
            <div>
            <label htmlFor="ten">Tên</label>
            <MDBInput
            style={{ marginBottom: '-10px'}}
              value={ten}
              onChange={(e) => setTen(e.target.value)}
              wrapperClass='mb-4'
              id='ten'
              type='text'
              required
            />
            {errors.ten && <span style={{ color: 'red' }}>Vui lòng điền tên của bạn.</span>}
            </div>
            <div>
            <label htmlFor="email">Tên người dùng/email</label>
            <MDBInput
            style={{ marginBottom: '-10px'}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              wrapperClass='mb-4'
              id='email'
              type='text'
              required
            />
            </div>
            {errors.email && <span style={{ color: 'red' }}>Vui lòng điền Tên người dùng/email của bạn.</span>}
            <div>
            <label htmlFor="pass">Mật Khẩu</label>
            <MDBInput
            style={{ marginBottom: '-10px'}}
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              wrapperClass='mb-4'
              id='pass'
              type='password'
              required
              
            />
            {errors.matKhau && <span style={{ color: 'red' }}>Vui lòng điền mật khẩu của bạn.</span>}
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <button onClick={signUp} className="mb-4" style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Đăng kí
            </button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
}

export default ClientLogin;
