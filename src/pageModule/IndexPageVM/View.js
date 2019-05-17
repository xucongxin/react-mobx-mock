
  /**
 * @file PAGE_NAME 页面入口组件
 * @author xcx
 */
import React from 'react';

import {
  Component,
  observable,
  computed,
  inject,
  observer,
  Provider,
} from 'util/index';

@inject('appState')
// @observer
export default class indexPage extends Component{
    componentWillMount(){
        console.log(this.props)
    }
  render(){
      return(
              <div onClick={this.props.appState.setSubTitle}>
                  查询表格
              </div>
      )
  }
}