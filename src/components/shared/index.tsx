import React from "react"

import styled from "@emotion/styled"

export const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
`
export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 32px;
    font-size: 16px;
`
export const TextArea = styled.textarea`
    height: 100%;
    border-radius: 4px;
    border: none;
    font-size: 100%;
    line-height: inherit;
    padding: 8px 16px;
    resize: none;
    overflow: auto;
    &:focus {
        outline: none;
    }
`
export const PreviewDiv = styled.div`
    height: 100%;
    border-radius: 4px;
    border: none;
    font-size: 100%;
    line-height: inherit;
    overflow: auto;
    padding: 8px 16px;
`
