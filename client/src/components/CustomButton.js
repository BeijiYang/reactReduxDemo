import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const PRIMARY_COLOR = '#4CAF50';
const ACCENT_COLOR = '#FF5252';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: ACCENT_COLOR,
    },
  },
})
class CustomButton extends React.Component {

  render() {
    const { children, onClick, disabled, color, size, variant } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Button
          variant={variant}
          color={color}
          size={size}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </Button>
      </MuiThemeProvider>
    )
  }
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
}

CustomButton.defaultProps = {
  disabled: false,
  size: 'large',
  variant: "contained"
};


export default withStyles({ withTheme: true })(CustomButton)