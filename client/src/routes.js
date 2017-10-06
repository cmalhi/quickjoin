import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Match from './components/Match';
import GameForm from './components/GameForm';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/signup',
        component: Signup
      },
      { path: '/login',
        component: Login
      },
      { path: '/gameform',
        component: GameForm
      },
      { path: '/match',
        component: Match
      },
    ]
  }
];

export default routes;