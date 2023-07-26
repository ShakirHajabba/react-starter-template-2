import { ThemeProvider } from '@mui/material';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import muiTheme from 'utils/muiTheme.utils';

type PropType = {
    children: JSX.Element | JSX.Element[];
};

export default function AppWrapper({ children }: PropType): JSX.Element {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={'loading...'} persistor={persistor}>
                    <ThemeProvider theme={muiTheme}>
                        <BrowserRouter>{children}</BrowserRouter>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </>
    );
}
