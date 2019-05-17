/**
 * @file: <%= $d.moduleName %>VM/index.js
 * @author: <%= $d.userName %>
 * @date: <%= $d.env.today %>
 * @description: <%= $d.moduleDescription %>
 */

import {
    observable,
    action,
    BaseModel,
    computed,
    bindView as bind,
    // wrapDefaultComps,
    bindActions,
    extendMethods,
    toJS,
    ReactionManager
  } from  'util/index';
  
  import View from './View';
  const handlers = {
      ceshi(){
          console.log('ceshi')
      }
  }
  
  
  const methods = {
  };
  
  @bind(View)
  class HomeStore extends BaseModel {
    static shouldInjectApp = true;
    static injectKey = 'commonLayout'
  
    @observable subTitle = "测试系统名称";
  
    constructor(props) {
        super(props);
        bindActions(this, handlers);
        extendMethods(HomeStore, methods);
    }
    
  
  }
  
  export default HomeStore
  