import React from 'react';
import loadable from 'react-loadable';
import Loading from 'components/Loading';
import E403 from 'components/403';
import E404 from 'components/404';
import E500 from 'components/500';
import { hot } from 'react-hot-loader';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
// import App from 'layout/CommonLayoutVM/View';
import App from 'layout/App';
import store from 'store';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import indexPage from 'pageModule/IndexPageVM/View';
import 'antd/dist/antd.css';

function getComponentAsync(loader) {
  return loadable({
    loader: () => loader ,
    loading: Loading,
    timeout: 10000
  });
}


const Root = () => (
  <Provider {...store}>
    <LocaleProvider locale={zh_CN}>
      <HashRouter>
        <React.Fragment>
              <Switch>
                (<App>
                  <Route exact path="/" component={indexPage} />
                  <Route exact path="/test" component={getComponentAsync(import('pageModule/SystemManagementPageVM/DictionaryPageVM'))} />
                  <Route exact path="/system/form/search" component={indexPage} />
                  <Route exact path="/system/form/base" component={getComponentAsync(import('pageModule/SystemManagementPageVM/DictionaryPageVM'))} />
                  <Route
                    exact
                    path="/403"
                    component={E403}
                  />
                  <Route
                    exact
                    path="/404"
                    component={E404}
                  />
                  <Route
                    exact
                    path="/500"
                    component={E500}
                  />
                </App>)
              </Switch>
            
        </React.Fragment>
      </HashRouter>
    </LocaleProvider>
  </Provider>
);

export default hot(module)(Root);
