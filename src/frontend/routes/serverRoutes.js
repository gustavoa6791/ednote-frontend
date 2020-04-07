
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import HomePage from '../containers/HomePage.jsx'
import RememberPage from '../containers/RememberPage.jsx'
import ChangePage from '../containers/ChangePage.jsx'
import ProfilePage from '../containers/ProfilePage.jsx'
import UnlockPage from '../containers/UnlockPage.jsx'
import SubjectPage from '../containers/SubjectPage'
import SubjectStudentPage from '../containers/SubjectStudentPage'
import ShowOrEditSubjectPage from '../containers/ShowOrEditSubjectPage.jsx'
import ShowSubjectPage from '../containers/ShowSubjectPage.jsx'


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
        path:'/Subjects/:option',
        component: SubjectPage,
        exact: true,
    },
    {
        exact: true, 
        path:"/StudentShow", 
        component:SubjectStudentPage,

    },
    {
        exact:true, 
        path: "ShowSubjectStudent/:subject", 
        component:ShowSubjectPage
    },
    {
        path:'/ShowSubject/:option/:subject',
        component: ShowOrEditSubjectPage ,
        exact: true,
    },
    {
        name: 'notFound',
        component: NotFound,
    }

]

export default serverRoutes