import React from "react";

import marked from "marked";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ColumnFlex } from "./shared";

interface Props {
  markdownContent: string;
  theme: string;
}

const Preview: React.FC<Props> = ({ markdownContent, theme }) => {
  const mardownFormattedContent = marked(markdownContent);

  return (
    <ColumnFlex
      id="preview"
      css={css`
        flex: 1;
        padding: 16px;
      `}
    >
      <h2>Preview</h2>
      <div
        css={
          theme === "dark"
            ? css`
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                background: #000;
                color: #fff;
              `
            : css`
                box-shadow: 2px 2px 10px #999;
                background: #fff;
                color: #000;
              `
        }
        dangerouslySetInnerHTML={{ __html: mardownFormattedContent }}
      ></div>
    </ColumnFlex>
  );
};

export default Preview;
