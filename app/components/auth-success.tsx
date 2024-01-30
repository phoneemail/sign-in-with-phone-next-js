import React from "react";

// AuthSuccess component that displays a success message
export default function AuthSuccess(props: any) {
    return (
        <div className="auth-card"><div className="container">
            <div className="icon-container">
                <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 9l-6 6-3-3" />
                    </svg>
                </div>
            </div>
            <div className="text-container">
                <h3 className="primary-text">Sign In Successful</h3>
                <small className="secondary-text">
                    You&apos;re logged in with
                    <span>
                        <br />
                        {props.message}
                    </span>
                </small>
            </div>
        </div></div>
    );
};
