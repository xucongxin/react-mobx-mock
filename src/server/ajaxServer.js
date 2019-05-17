import agent from './lib/ajax-agent';
import {ServerConfig} from './config';

/**
 *  ajaxServer 方法
 *
 * @param {string} method get/post
 * @param {string} api 地址
 * @param {Object} options 选项
 * @return {Promise<TResult>}
 */
    // return requestHandler;

export const ajaxServer = {

    getData(method, api, options = {}) {
        let requestHandler = null;
        let url = (api.indexOf('test/') === -1) ? (ServerConfig.host + api) : api;
        console.log('接口访问地址:' + url);
        if (method === 'get') {
            requestHandler = agent.get(url, options);
        } else if (method === 'post') {
            requestHandler = agent.post(url, {
                data: options
            }).then(result => {
                return result;
            })
        } else {
            error('请设置请求方式')
        }
        return requestHandler;

    }


}
