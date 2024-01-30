'use client'

import React from "react";

export default function EmailButton(props: any) {
  const openEmail = () => {
    if (typeof window !== 'undefined') { window.open('https://web.phone.email', '_blank'); }
  }
  return (
    <React.Fragment>
      <div className="email-container">
        <button type="button" className="email-button" onClick={openEmail}>
          <span><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.4594 0H1.60313C0.734767 0 0 0.734767 0 1.60313V20.7071C0 21.5754 0.734767 22.3102 1.60313 22.3102H30.3926C31.261 22.3102 31.9958 21.5754 31.9958 20.7071V1.60313C32.0626 0.734767 31.3278 0 30.4594 0ZM16.0313 14.7621L2.2711 1.33594H29.7915L16.0313 14.7621ZM10.4871 11.2219L1.33594 20.1059V2.2711L10.4871 11.2219ZM11.4223 12.1571L15.5637 16.1649C15.8309 16.4321 16.2317 16.4321 16.4989 16.1649L20.6403 12.0903L29.7247 20.9743H2.3379L11.4223 12.1571ZM21.5754 11.2219L30.7266 2.2711V20.1059L21.5754 11.2219Z"
              fill="#024430" />
          </svg></span>
          {props.count != '0' ? (<span className="email-button-badge" id="btn_view_email">{props.count}</span>) : <></>}
        </button>
      </div>
    </React.Fragment>
  );
};
