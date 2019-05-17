
import React from 'react';
import { /* Link, */ withRouter } from 'react-router-dom';
// import cssModules from 'react-css-modules';
import {
  Layout, 
  Menu, 
  Breadcrumb, 
  Icon,
  DatePicker,
  Avatar,
  Badge,
} from 'antd';

import {
  Component,
  observable,
  computed,
  inject,
  observer,
  Provider,
  agent,
  ServerConfig
} from 'util/index';


import SiderMenu from 'layout/SiderMenu';

import 'stylesheet/global.less';
import { toJS } from 'mobx';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;




@inject('homeStore')
@withRouter
@observer
class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // this.props.homeStore.getUserInfo();
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    console.log('点击事件', key)
    if (key === 'logout') {
      this.props.history.push('/login');
    }
    this.props.homeStore.setLevelTwoMenu(key)
  }
  

  render() {
    const { collapsed} = this.state;
    const {
      getSubTitle,
      levelOneMenu,
      getLevelTwoMenu,
    } = this.props.homeStore;
    // 一级菜单
    var items = [];
    if(levelOneMenu.length > 0){
      for (var i = 0; i < levelOneMenu.length; i++) {
          items.push(<Menu.Item key={i} onClick={this.handleMenuClick}>{levelOneMenu[i].name}</Menu.Item>);
      }
    }
    // 二级菜单
     var levelTwoMenu = []
     if(toJS(getLevelTwoMenu).length > 0){
      levelTwoMenu.push(
        <Sider width={200} style={{ background: '#fff' }}>
          <SiderMenu key="Sider" collapsed={collapsed} levelTwoMenu ={getLevelTwoMenu}/>
        </Sider>
      );
     }else{
      levelTwoMenu.push(
        <Sider  key="Sider" width={0} style={{ background: '#fff' }}></Sider>
      );
     }

    return (
      <Layout>
    <Header className="header">
      <div className="logo" >{getSubTitle}</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['8']}
        style={{ lineHeight: '64px' }}
      >
        {items}
        
        <Menu.Item key="test"></Menu.Item>

        <span style={{ float: 'right'}}>
          <Badge count={1} size={12}>
            <Avatar size={36} style={{ backgroundColor: '#87d068' }} icon="user" />
          </Badge>
          <span style={{ marginLeft: '10px'}}>超级管理员</span>
        </span>
      </Menu>
    </Header>
    <Layout>
      
      {levelTwoMenu}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, border: '1px solid #e8e8e8', overflow: 'auto', }} >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default App;
