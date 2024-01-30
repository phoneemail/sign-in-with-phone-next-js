import React from "react";
import SignInButton from "./components/signin-button";

export default function Home() {
  const SignUpUrlProps: SignUpUrlProps = {
    countryCode: process.env.COUNTRY_CODE, // Replace with your country code
    phoneNo: process.env.PHONE_NO, // Replace with your phone number
    redirectUrl: process.env.REDIRECT_URL, // Replace with your redirect URL
  }
  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignInButton signUpUrlProps={SignUpUrlProps}></SignInButton>
    </div>

  )
}
