import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignOutContainer } from './auth.styles';

const SignInAndSignOutPage = () => (
  <SignInAndSignOutContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignOutContainer>
);

export default SignInAndSignOutPage;
