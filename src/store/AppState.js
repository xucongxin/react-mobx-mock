/**
 * @file APP_NAME 用于
 * @author YOURNAME
 */

import {
    BaseModel,
    BaseAppView,
    bindView as bind,
    observable
} from 'util/index';

import HomeStore from './HomeStore';

import BaseState from 'layout/CommonLayoutVM/Base';
class AppState extends BaseState {
    @observable aAppState = 'app state';

    moduleCSSWrapper = 'main-module-wrapper';
}

export default AppState
