import { createTheme } from '@mui/material';

const muiTheme = createTheme({
    typography: {
        body1: {
            fontFamily: 'Montserrat, sans-serif',
        },
        body2: {
            fontFamily: 'Montserrat, sans-serif',
        },
        h1: {
            fontFamily: 'Work-Sans, sans-serif',
        },
        h2: {
            fontFamily: 'Work-Sans, sans-serif',
            fontSize: '24px',
        },
        h3: {
            fontFamily: 'Work-Sans, sans-serif',
        },
        h4: {
            fontFamily: 'Work-Sans, sans-serif',
        },
        h5: {
            fontFamily: 'Work-Sans, sans-serif',
        },
        button: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: '1rem',
        },
    },
});

export default muiTheme;
