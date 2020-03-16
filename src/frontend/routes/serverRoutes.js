
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import HomePage from '../containers/HomePage.jsx'
import RememberPage from '../containers/RememberPage.jsx'
import ChangePage from '../containers/ChangePage.jsx'
import ProfilePage from '../containers/ProfilePage.jsx'
import UnlockPage from '../containers/UnlockPage.jsx'
import SubjectPage from '../containers/SubjectPage'
import EditSubjectPage from '../containers/EditSubjectPage.jsx'

const serverRoutes = [
    {
        path:'/',
        component: LoginPage,
        exact: true,
    },
    {
        path:'/Home',
        component: HomePage,
        exact: true,
    },
    {
        path:'/Remember',
        component: RememberPage,
        exact: true,
    },
    {
        path:'/Profile',
        component: ProfilePage,
        exact: true,
    },
    {
        path:'/Unlock',
        component: UnlockPage,
        exact: true,
    },
    {
        path:'/Change',
        component: ChangePage,
        exact: true,
    },
    {
        path:'/Subjects',
        component: SubjectPage,
        exact: true,
    },
    {
        path:'/EditSubject',
        component: EditSubjectPage,
        exact: true,
    },
    {
        name: 'notFound',
        component: NotFound,
    }

]

export default serverRoutes