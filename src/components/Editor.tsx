import React, { ChangeEvent } from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ColumnFlex, TextArea } from './shared'

interface Props {
  markdownContent: string;
  setMarkdownContent: (value: string) => void,
  theme: string
}

const Editor: React.FC<Props> = ({ markdownContent, setMarkdownContent, theme }) => {
    const generateFileName = () => {
        const now = new Date();

        const year = now.getUTCFullYear();
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = now.getUTCDate().toString().padStart(2, '0')
        const hour = now.getHours().toString()
        const minutes = now.getMinutes().toString()
        const seconds = now.getSeconds().toString()
        const fileDate = `${year}-${month}-${day}-${hour}-${minutes}-${seconds}`

        return fileDate
    }

    const downloadFile = () => {
        const element = document.createElement("a");
        const file = new Blob([markdownContent], {type: 'text/plain'});
        const fileName = generateFileName();

        element.href = URL.createObjectURL(file);
        element.download = `${fileName}.md`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <ColumnFlex
        id="editor"
        css={css`
            flex: 1;
            padding: 16px;
          `}>
        <h2>
        Editor
        </h2>
        <TextArea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMarkdownContent(e.target.value)}
          css={theme === 'dark'?
          css`
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
            background: #000;
            color: #fff;
          `
          : css`
            box-shadow: 2px 2px 10px #999;
          `}
          rows={9}
          value={markdownContent}
          />
        <button onClick={downloadFile}>Export</button>
      </ColumnFlex>
    )
}

export default Editor;
