import React from "react";

const Footer = (props) => {
    return(
        <div className="footer">
        <div className="footer__content">
          <strong>{props.content.title}</strong>
          <div>
            {props.content.body}
          </div>
        </div>
      </div>
    )
}

export default Footer