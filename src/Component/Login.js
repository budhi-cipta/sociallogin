import React,{ useState } from 'react'

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';


const Login = () => {
  
  const [statusLogin, setstatusLogin] = useState(false);

  //Arrow Function
    const responseGoogle = (response) => {
        console.log(response)
        localStorage.setItem('name',response.profileObj.name);
        localStorage.setItem('email',response.profileObj.email);
        localStorage.setItem('image',response.profileObj.imageUrl);
        setstatusLogin(true);
    }

//Arrow function

      const responseFacebook = (response) => {
        console.log(response);
      }
      const componentClicked = () => {
        console.log('click')
      }
        return(
            <div>
               <GoogleLogin
                    clientId="792322689592-vnl2i9uuaob8sjqdk90sjn633ceo97h4.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                <FacebookLogin
                    appId="287832209216564"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} 
                    />


                  {
                    statusLogin ? (
                      <Redirect
                      to={{
                        pathname:"/profile",
                      }}
                      />
                    ) : (
                      <Redirect
                      to={{
                        pathname:"/"
                      }}
                      />
                    )
                  }
            </div> 
         );  
}
export default Login;





