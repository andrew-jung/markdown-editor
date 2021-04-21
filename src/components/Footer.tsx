import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Footer: React.FC = () => {
  return (
    <footer>
      <div
        className="footer-description"
        css={css`
          padding: 16px 0px;
          overflow: hidden;
          position: absolute;
          width: 100%;
          text-align: center;
          bottom: 0px;
          color: #f89541;
          background: #000;
        `}
      >
        Bring your Markdown editor anywhere!
      </div>
    </footer>
  );
};

export default Footer;
