import { useState } from 'react';
import { adminlogin } from './adminFunc/AdminControl';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);

  const afterLogin = () => {
    setEmail('');
    setPass('');
    navigate('/admin');
  };

  const login = () => {
    if (email === '') {
      setIsEmailError(true);
    }
    if (pass === '') {
      setIsPassError(true);
    }
    if (email !== '' && pass !== '') {
      setIsEmailError(false);
      setIsPassError(false);
      adminlogin(email, pass, afterLogin);
    }
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
    padding: '10px 20px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    boxShadow: isHovered ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <label htmlFor="email">Email</label>
        <MDBInput
         style={{ marginBottom: '-10px'}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperClass='mb-4'
          id='email'
          type='email'
          required
          invalid={isEmailError}
        />
        {isEmailError && <div className="text-danger">Vui lòng điền vào email của bạn</div>}
        <label htmlFor="password">Mật Khẩu</label>
        <MDBInput
        style={{ marginBottom: '-10px'}}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          wrapperClass='mb-4'
          id='password'
          type='password'
          required
          invalid={isPassError}
        />
        {isPassError && <div className="text-danger">Vui lòng điền vào password của bạn</div>}

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        </div>

        <button onClick={login} className="mb-4" style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Login
        </button>
      </MDBContainer>
    </div>
  );
}

export default AdminLogin;
