import {GoogleLogin, GoogleLogout} from 'react-google-login'

const clientId = "524908122716-cme5p4ko8ui4hshl33vt46o9asga12cg.apps.googleusercontent.com"


function Logout() {
    const onSuccess = (res) => {
        console.log("Log out successfull!");
    }

    return(
        <div id ="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;
