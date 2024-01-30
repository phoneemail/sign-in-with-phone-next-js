// Define the SingUrlProps interface to represent the expected shape of the properties
// when constructing a URL for signing up.
interface SignUpUrlProps {
    countryCode: string | undefined;  // Country code for phone number, e.g., '+1' for the United States.
    phoneNo: string | undefined;     // User's phone number for sign-up.
    redirectUrl: string | undefined; // URL to redirect the user after sign-up.
}

// Define the TokenVerificationResponse interface to represent the expected structure
// of the response from the token verification API.
interface TokenVerificationResponse {
    status: string;                // Status of the token verification, e.g., 'success' or 'error'.
    message?: string;              // Optional message providing additional information.
    error?: string;                // Optional error message in case of failure.
}

// Define the EmailCountResponse interface to represent the expected structure
// of the response from an API that provides the count of emails.
interface EmailCountResponse {
    status: string;                // Status of the response, e.g., 'success' or 'error'.
    message?: string;              // Optional message providing additional information.
    count?: string;                // Optional count of emails, if applicable.
    error?: string;                // Optional error message in case of failure.
}
