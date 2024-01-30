import React from "react";
import EmailButton from "../components/email-button";
import AuthSuccess from "../components/auth-success";

// Function to make a POST request to the server for token verification
async function verifyToken(token: string, appUrl: string): Promise<TokenVerificationResponse> {
    try {
        // Make a POST request to the token verification API
        const response = await fetch(`${appUrl}/api/token-verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phtoken: token }),
        });

        // Check if the HTTP status is within the success range (200-299)
        if (!response.ok) {
            throw new Error(`Failed to verify token. HTTP status: ${response.status}`);
        }

        // Parse the JSON response
        const responseData = await response.json();

        // Return the successful result
        return responseData;
    } catch (error) {
        // Handle specific network error
        if (error instanceof TypeError && error.message.includes('NetworkError')) {
            return { status: 'failure', error: 'Network error: Unable to connect to the server.' };
        }
        // Handle other errors
        return { status: 'failure', error: 'An error occurred while verifying the token.' };
    }
}


async function getEmailCount(accessToken: string, apiUrl: string): Promise<EmailCountResponse> {
    try {
        // Create FormData payload with meaningful field name
        const formData = new FormData();
        formData.append('merchant_phone_email_jwt', accessToken);

        // Make a POST request to the specified API endpoint
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
        });

        // Check if the HTTP status is within the success range (200-299)
        if (!response.ok) {
            throw new Error(`Failed to fetch email count. HTTP status: ${response.status}`);
        }

        const count = await response.text() || '0';

        // Return the successful result
        return { status: "success", count };
    } catch (error) {
        // Handle specific network error
        if (error instanceof TypeError && error.message.includes('NetworkError')) {
            return { status: 'failure', error: 'Network error: Unable to connect to the server.' };
        }
        // Handle other errors
        return { status: 'failure', error: 'An error occurred while fetching email count.' };
    }
}


// React component that uses the verifyToken function to render content based on the API response
export default async (props: any) => {
    // Get the app URL from the environment variable or set it to an empty string if not available
    const appUrl = process.env.APP_URL || '';
    const emailCountAPI = process.env.EMAIL_COUNT_API_URL || '';

    // Make the API request to verify the token
    const tokenResponse: TokenVerificationResponse = await verifyToken(props.searchParams.phtoken, appUrl);

    // Make the API request to get the email count
    const emailCountResponse = await getEmailCount(props.searchParams.phtoken, emailCountAPI);

    return (
        <React.Fragment>
            {tokenResponse.status === "success" ? (
                <React.Fragment>
                    <EmailButton count={emailCountResponse.count}></EmailButton>
                    <AuthSuccess message={tokenResponse.message}></AuthSuccess>
                </React.Fragment>
            ) : (
                <React.Fragment>{tokenResponse.error}</React.Fragment>
            )}
        </React.Fragment>
    );
};
