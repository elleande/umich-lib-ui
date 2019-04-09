import React from 'react'
import styled from '@emotion/styled';
import { INTENT_COLORS, FONT_COLOR, base } from '@umich-lib/styles'

const StyledInput = styled('input')(
  base,
  {
    fontSize: '1rem',
    color: FONT_COLOR,
    margin: '0',
    border: 'solid 1px rgba(0,0,0,0.5)',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    width: '100%',
    appearance: 'textfield',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  ({ invalid }) => ({
    borderColor: invalid && INTENT_COLORS.error,
    borderWidth: invalid && '2px'
  })
)


export default ({
  className,
  ...other
}) => (
  <StyledInput className={className} {...other} />
)