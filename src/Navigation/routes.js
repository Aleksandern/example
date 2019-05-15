
import _ from 'lodash';

import * as screens from 'src/Screens';

import {
  noHeader,
  signOptions,
  tabCardOptions,
} from './navigationOptions';

import routeNames from './routeNames';

const formatRoutes = (routesInp) => {
  const routes = routesInp;

  Object.keys(routes).forEach((key) => {
    const item = routes[key];
    const { params } = item;
    let navigationOptions;

    if (params && !_.isNil(params.noHeader) && params.noHeader) {
      navigationOptions = noHeader;
    } else {
      navigationOptions = signOptions;
    }

    routes[key].navigationOptions = navigationOptions;
  });

  return routes;
};

const signRoutes = formatRoutes({
  [routeNames.APP_LANDING]: {
    screen: screens.AppLanding,
    params: {
      noHeader: true,
    },
  },
  [routeNames.BUILD_YOUR_SAVING]: {
    screen: screens.BuildYourSaving,
  },
  [routeNames.BUILD_YOUR_IMPACT]: {
    screen: screens.BuildYourImpact,
    params: {
      noHeader: true,
    },
  },
  [routeNames.BUILD_MOVEMENT]: {
    screen: screens.BuildMovement,
    params: {
      noHeader: true,
    },
  },
  [routeNames.SIGN_UP_LOGIN]: {
    screen: screens.SignUpLogin,
  },
  [routeNames.SMS_CODE]: {
    screen: screens.SmsCode,
  },
});

const mainRoutes = formatRoutes({
  Accounts: {
    screen: screens.Accounts,
  },
});

const mainModalRoutes = {
  example: {
    screen: screens.Example,
  },
};

const tabRoutes = {
  [routeNames.TAB_HOME]: {
    screen: screens.TabHome,
  },
  [routeNames.TAB_ACTIVITY]: {
    screen: screens.TabActivity,
  },
  [routeNames.TAB_PROFILE]: {
    screen: screens.TabProfile,
  },
};

const tabModalRoutes = {
  [routeNames.DEPOSIT_WITHDRAW]: {
    screen: screens.DepositWithdraw,
  },
};

const tabCardRoutes = {
  [routeNames.ARTICLE]: {
    screen: screens.Article,
    params: {
      routeReset: true,
    },
    ...tabCardOptions,
  },
  [routeNames.MANAGE_ACCOUNTS]: {
    screen: screens.ManageAccounts,
    params: {
      routeReset: true,
      title: 'Manage Accounts',
    },
    ...tabCardOptions,
  },
  [routeNames.MANAGE_ACCOUNT_DETAILS]: {
    screen: screens.ManageAccountDetails,
    ...tabCardOptions,
  },
  [routeNames.PERSONAL_DETAILS]: {
    screen: screens.PersonalDetails,
    params: {
      title: 'Personal details',
      routeReset: true,
    },
    ...tabCardOptions,
  },
  [routeNames.REFER_FRIEND]: {
    screen: screens.ReferFriend,
    params: {
      routeReset: true,
    },
    ...tabCardOptions,
  },
  [routeNames.TALK_US]: {
    screen: screens.TalkUs,
    params: {
      routeReset: true,
    },
    ...tabCardOptions,
  },
};

const tmpRoutes = {
  [routeNames.FIRST_PAGE]: {
    screen: FirstPage,
  },
};

const routes = {
  signRoutes,
  mainRoutes,
  mainModalRoutes,
  tabRoutes,
  tabCardRoutes,
};

const getRouteInfo = (findScreenKey) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const keyRoute in routes) {
    if ({}.hasOwnProperty.call(routes, keyRoute)) {
      const routeInfo = routes[keyRoute];

      // eslint-disable-next-line no-restricted-syntax
      for (const keyScreen in routeInfo) {
        if ({}.hasOwnProperty.call(routeInfo, keyScreen)) {
          let screenInfo = routeInfo[keyScreen];

          if (findScreenKey === keyScreen) {
            screenInfo = _.omit(screenInfo, ['screen', 'navigationOptions']);
            if (!screenInfo.params) screenInfo.params = {};

            return screenInfo;
          }
        }
      }
    }
  }

  return null;
};

export {
  routes,
  getRouteInfo,
  signRoutes,
  mainRoutes,
  mainModalRoutes,
  tabRoutes,
  tabModalRoutes,
  tabCardRoutes,
  tmpRoutes,
};
