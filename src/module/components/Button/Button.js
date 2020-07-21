import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import Icon from './Icon';
import { Desktop, Tablet, Mobile } from '../utils/MediaBreakpoint';

const defaultStyle = {
    minWidth: '150px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    color: '#6C3B96',
    textAlign: 'center',
    textAlignLast: 'center',
    marginRight: '20px',
    borderRadius: '3px',
    borderColor: '#6C3B96',
    borderTopColor: '#6C3B96',
    borderBottomColor: '#6C3B96',
    borderLeftColor: '#6C3B96',
    borderRightColor: '#6C3B96',
    borderStyle:'solid',
    fontFamily: 'Lato',
    fontType: 'Semibold',
    borderWidth: '2px',
    cursor: 'pointer'
};

const desktopStyle = {
    ...defaultStyle,
    minWidth: '150px',
    height: '40px'
};

const tabletStyle = {
    ...defaultStyle,
    minWidth: '150px',
    height: '40px'
};

const mobileStyle = {
    ...defaultStyle,
    width: '150px',
    height: '40px',
    marginBottom:'20px',
    minWidth:0,
}

const Button = ({ children, onClick, style, disabled, loading, dark = false, ...props }) => (
     <React.Fragment>
        <Desktop>
            <button
                type="button"
                {...props}
                disabled={loading || disabled}
                aria-busy={loading}
                aria-disabled={disabled}
                onClick={onClick}
                style={merge({}, desktopStyle, style)}>
                {loading ? <Icon name={(dark) ? 'spinner-dark' : 'spinner'} /> : children}
            </button>
        </Desktop>

        <Tablet>
            <button
                type="button"
                {...props}
                disabled={loading || disabled}
                aria-busy={loading}
                aria-disabled={disabled}
                onClick={onClick}
                style={merge({}, tabletStyle, style)}>
                {loading ? <Icon name={(dark) ? 'spinner-dark' : 'spinner'} /> : children}
            </button>
        </Tablet>

        <Mobile>
            <button
                type="button"
                {...props}
                disabled={loading || disabled}
                aria-busy={loading}
                aria-disabled={disabled}
                onClick={onClick}
                style={merge({}, mobileStyle, style)}>
                {loading ? <Icon name={(dark) ? 'spinner-dark' : 'spinner'} /> : children}
            </button>
        </Mobile>
    </React.Fragment>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default Button;
