import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { RowFlex } from "./shared";
import Editor from "./Editor";
import Preview from "./Preview";

interface Props {
  theme: string;
}

const Main: React.FC<Props> = ({ theme }) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  return (
    <RowFlex
      css={css`
        padding: 32px;
        padding-top: 0px;
        height: calc(100vh - 170px);
      `}
    >
      <Editor
        theme={theme}
        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}
      />
      <Preview theme={theme} markdownContent={markdownContent} />
    </RowFlex>
  );
};

export default Main;
