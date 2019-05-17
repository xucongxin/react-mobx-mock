import {
  observable,
  action,
  BaseModel,
  computed,
  bindView as bind,
  // wrapDefaultComps,
  bindActions,
  bindMethods,
  extendMethods,
  toJS,
  ReactionManager,
  agent,
  ServerConfig
} from  'util/index';


// action 操作
const handlers = {
  setState(state) {
      for (let key in state) {
          if (state.hasOwnProperty(key)) {
              this[key] = state[key]
          }
      }
  }
}

// 拓展方法
const methods = {
  // 获取用户信息
  getUserInfo() {
    agent('post', ServerConfig.host + ServerConfig.permission, {
      data: {'a':1}
    }).then(result => {
      var data = result.data;
      this.setState({
          'subTitle': data.resources[0].name,
          'levelOneMenu': data.resources[0].subResources,
          'sysUserInfo': data,
      })
    }) 
  },
  // 设置二级菜单项
  setLevelTwoMenu(id = 0){
    var data = this.getLevelOneMenu[id].subResources;
    this.setState({
        'levelTwoMenu':data == null ? [] : data,
    })
    console.log(toJS(this.getLevelTwoMenu))
  }
  
};


class HomeStore extends BaseModel {

  static injectKey = 'commonLayout'
  // 系统名称
  @observable subTitle = "测试系统名称";
  // 面包屑
  @observable breadcrumbData = [];
  // 一级菜单
  @observable levelOneMenu = [];
  // 二级菜单
  @observable levelTwoMenu = [];
  // 系统权限数据
  @observable sysUserInfo = null;


  constructor(props) {
      super(props);
      bindActions(this, handlers);
      bindMethods(this, methods);
      this.init(props);
  }


  @action
  init(props) {
    this.getUserInfo()
  }

  @computed get getSubTitle() {
      return this.subTitle;
  }
  @computed get getLevelTwoMenu() {
      return this.levelTwoMenu;
  }
  @computed get getLevelOneMenu() {
    return this.levelOneMenu;
}

}

export default HomeStore
