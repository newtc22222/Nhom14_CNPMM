const headerLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    paddingLeft: '10px',
    // fontSize: '0.8rem'
};

const headerButtonStyle = {
    color: '#ffffff',
    "&:hover": {
        background: '#FF6C00'
    }
};

const headerButtonPostStyle = {
    background: '#ff7e00',
    "&:hover": {
        background: 'orangered'
    },
};

const gridItemProperties = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
};

const additionalMenuLink = { 
    ...headerLinkStyle, 
    color: '#222',
    fontSize: '0.8rem'
}

const additionalMenuSpan = {
    background: '#ddd', 
    color: '#777', 
    fontSize: '0.8rem',
    fontWeight: 'bold',
    padding: '10px'
}

export {
    headerLinkStyle,
    headerButtonStyle,
    headerButtonPostStyle,
    gridItemProperties,
    additionalMenuLink,
    additionalMenuSpan
};