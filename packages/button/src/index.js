import React from 'react';
import PropTypes from 'prop-types';
import {
  COLORS,
  SPACING,
  lightOrDark
} from '@umich-lib/styles'

function getButtonColor(kind) {
  switch (kind) {
    case 'primary':
      return COLORS.maize
    case 'secondary':
    case 'tertiary':
      return COLORS.teal
    default:
      return COLORS.blue
  }
}

function getButtonKindCSS(kind, color) {
  switch (kind) {
    case 'tertiary':
      return {
        background: 'white',
        border: `solid 1px ${color['400']}`,
        color: color['400'],
        ':hover': {
          outline: `solid 1px ${color['400']}`,
          outlineOffset: '-2px'
        }
      }
    case 'subtle':
      return {
        background: COLORS.neutral['100'],
        ':hover': {
          background: COLORS.blue['200']
        }
      }
    default:
      return {
        background: color['400'],
        ':hover': {
          background: color['500']
        }
      }
  }
}

function getDisabledCSS(disabled) {
  if (disabled) {
    return {
      opacity: '0.5',
      ":hover": {},
      cursor: 'not-allowed'
    }
  }

  return {}
}

/**
 * Use buttons to move though a transaction, aim to use only one primary button per page.
 */
const Button = ({
  kind,
  disabled,
  ...rest
}) => {
  const color = getButtonColor(kind)

  return (
    <button
      css={{
        display: 'flex',
        alignItems: 'center',
        lineHeight: '1.25',
        borderRadius: '2px',
        padding: `${SPACING['S']} ${SPACING['M']}`,
        color: lightOrDark(color['400']) === 'light' || kind === 'subtle' ? 'inherit' : 'white',
        fontWeight: '700',
        ...getButtonKindCSS(kind, color, disabled),
        ':focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px #ffffff, 0 0 0 4px ${COLORS.neutral['400']}`
        },
        ...getDisabledCSS(disabled)
      }}
      {...rest}
    />
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf([
    'primary',
    'seconday',
    'tertiary',
    'subtle'
  ]).isRequired,
};

Button.defaultProps = {
  kind: 'secondary',
};

export default Button;
