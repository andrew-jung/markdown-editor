import React from 'react';

import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import {HeaderWrapper} from "./shared/index";


interface Props {
    toggleTheme: () => void;
    theme: string
}

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <HeaderWrapper
    css={theme === 'dark' ?
    css`
      background-color: #f89541;
    `:css`
      background-color: #f8f541;
  `}>
      <div className="header-title">
        Take Notes
      </div>
      <div css={
        css`
          cursor: pointer;
        `}
        onClick={toggleTheme}
      >
       {
         theme === 'dark'?
         <FaMoon />:
         <FiSun />
       }</div>
    </HeaderWrapper>
  )
}

export default Header;
