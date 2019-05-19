import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import config from '../config/config'

// const {
//   colors: { ACCENT_COLOR }
// } = config
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
    const { children, onClick, disabled, color, large } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color={color}
          size={large}
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
  large: PropTypes.string,
}

CustomButton.defaultProps = {
  disabled: false,
  large: 'large',
};


export default withStyles({ withTheme: true })(CustomButton)