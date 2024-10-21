import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { gapi } from 'gapi-script';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
  elevation: 1,
}));

const StyledToolbar = styled(Toolbar)( {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  padding: 0,
  height: '64px',
});

const StyledButtonContainer = styled(Box)( {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  position: 'absolute',
  right: '10px',
  top: '-140px',
});

const StyledSignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkred',
  },
}));

const StyledLogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'red',
  border: '1px solid red',
  marginLeft: '10px',
  '&:hover': {
    backgroundColor: 'darkgray',
  },
}));

const clientId = "524908122716-cme5p4ko8ui4hshl33vt46o9asga12cg.apps.googleusercontent.com";

const Navbar = () => {
  // State to track if the user is logged in and user information
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Google API client for authentication
    const initClient = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          clientId: clientId,
          scope: 'email',
        }).then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          const isSignedIn = authInstance.isSignedIn.get();
          setLoggedIn(isSignedIn);
          if (isSignedIn) {
            const currentUser = authInstance.currentUser.get();
            setUser(currentUser.getBasicProfile());
          }
        });
      });
    };

    initClient();
  }, []);

  // Callback for successful login
  const onSuccessLogin = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setUser(res.profileObj);
    setLoggedIn(true);
  };

  // Callback for failed login
  const onFailureLogin = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  // Callback for successful logout
  const onSuccessLogout = () => {
    console.log("LOGOUT SUCCESSFUL!");
    setUser(null);
    setLoggedIn(false);
  };

  // Handle Sign In button click
  const handleSignInClick = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then(onSuccessLogin).catch(onFailureLogin);
  };

  // Handle Logout button click
  const handleLogoutClick = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signOut().then(onSuccessLogout).catch(err => {
      console.error("Logout failed: ", err);
    });
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledButtonContainer>
          {loggedIn && user ? (
            <>
              <Typography style={{ color: 'white' }}>
                {user.getName()}
              </Typography>
              <StyledLogoutButton onClick={handleLogoutClick}>
                Logout
              </StyledLogoutButton>
            </>
          ) : (
            <Grid container justifyContent="flex-end" alignItems="center">
              <Grid item>
                <StyledSignUpButton onClick={handleSignInClick}>
                  Sign In
                </StyledSignUpButton>
              </Grid>
              <Grid item>
                <StyledLogoutButton>
                  Logout {/* Keep Logout button even when not logged in */}
                </StyledLogoutButton>
              </Grid>
            </Grid>
          )}
        </StyledButtonContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
