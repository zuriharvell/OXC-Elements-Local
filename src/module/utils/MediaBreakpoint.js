import React from 'react';
import MediaQuery from 'react-responsive';

export const Desktop = ({ children }) => {
    return <MediaQuery minWidth={992}>
        {children}
        </MediaQuery>
}

export const Tablet = ({ children }) => {
    return <MediaQuery minWidth={768} maxWidth={991}>
        {children}
    </MediaQuery>
}

export const Mobile = ({ children }) => {
    return <MediaQuery maxWidth={767}>
        {children}
    </MediaQuery>
}

export const MobileOrTablet = ({ children }) => {
    return <MediaQuery maxWidth={991}>
        {children}
    </MediaQuery>
}

export const TabletOrDesktop = ({ children }) => {
    return <MediaQuery minWidth={768}>
        {children}
    </MediaQuery>
}

export const Default = ({ children }) => {
    return <MediaQuery minWidth={768}>
        {children}
    </MediaQuery>
}