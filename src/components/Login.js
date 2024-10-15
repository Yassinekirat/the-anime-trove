import { GoogleLogin } from 'react-google-login';

const clientId = "524908122716-cme5p4ko8ui4hshl33vt46o9asga12cg.apps.googleusercontent.com";

function Login({ onSuccess, onFailure }) {
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
