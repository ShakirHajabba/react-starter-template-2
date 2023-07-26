import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'utils/routes.utils';

//pages
import Home from '../../pages/Home';

export default function AppRouter(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
            </Routes>
        </>
    );
}
