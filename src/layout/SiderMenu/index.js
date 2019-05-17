import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import {
  toJS
} from 'util/index';

const { SubMenu } = Menu;

// import style from './style.less';

@withRouter
class SiderMenu extends Component {
  handleMenuClick = ({ key }) => {
    console.log(key)
    const { history } = this.props;
    if (key === '/project') {
      history.push(key);
    }
  }
  getLevelMeun(){
    console.log('getLevelMeun')
    const { levelTwoMenu} = this.props;
    var data = toJS(levelTwoMenu);
    var level = [];
    var defaultSelectedKeys = '/';
    var defaultOpenKeys = '/form';
    for(var i=0; i<data.length; i++){
      if('subResources' in data[i]){
        var SubMenuData = []
        var t = data[i].subResources;
        for(var l=0; l<t.length; l++){
          SubMenuData.push(<Menu.Item key={t[l].url}><Link to={t[l].url}>{t[l].name}</Link></Menu.Item>)
        }
        level.push(<SubMenu key={data[i].url} title={<span><Icon type="mail" /><span>{data[i].name}</span></span>}> {SubMenuData} </SubMenu>)
      }else{
        level.push( <Menu.Item key={data[i].name}> <Icon type="pie-chart" /><span>{data[i].name}</span></Menu.Item>)
      }
    }
    if('subResources' in data[0]){
      defaultSelectedKeys = data[0].subResources[0].url;
      defaultOpenKeys = data[0].url
    }

    console.log(toJS(level));
    const { collapsed, location } = this.props;

    return (<Menu
      defaultSelectedKeys={[defaultSelectedKeys]}
      selectedKeys={[location.pathname]}
      defaultOpenKeys={[defaultOpenKeys]}
      mode="inline"
      // theme="dark"
      inlineCollapsed={collapsed}
      onClick={this.handleMenuClick}
      key="MenuLeft"
    >
    {level}
    </Menu>);
  }


  render() {
   
    var levelInit = this.getLevelMeun();
    return levelInit;
  }
}

export default SiderMenu;
