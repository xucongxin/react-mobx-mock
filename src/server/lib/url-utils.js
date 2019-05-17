import {hashHistory} from 'react-router';
import _ from 'lodash';
import {stringify, parse} from 'qs'

// path 的 mapping 还得考虑不同模块下的跳转问题
let pathMappings = {};

let context = window.APP_CONTEXT || '';

/**
 * 用于处理 url 的 utils 集合
 *
 * @start-def: UrlUtils: {}
 */
let urlUtils = {
    paramStr(params = {}) {
        delete params[''];
        // for (let k in params) {
        //     if (typeof params[k] === 'object') {
        //         params[k] = OBJ_PREFIX + JSON.stringify(params[k]) + OBJ_SUFFIX;
        //     }
        //     if (params[k] === undefined) {
        //         delete params[k];
        //     }
        // }

        let res = stringify(params);
        let arr = res.split('&');
        let keyIndex = arr.findIndex(x => x.startsWith('_k='));
        if (keyIndex >= 0 && keyIndex !== arr.length - 1) {
            let tmp = arr[keyIndex];
            arr.splice(keyIndex, 1);
            arr.push(tmp);
        }

        let q = arr.join('&');

        return q ? ('?' + q) : '';
    },
    linkPrivate(path, params) {
        params = params || {};
        path = pathMappings[path] ? pathMappings[path] : path;
        return location.search + (path.substr(0, 1) === '/' ? '#' : '#/') + path + urlUtils.paramStr(params);
    },

    /**
     * 获得符合 router 入口 + router path 的一个合法 url
     *
     * @def: .link: (path, params, module, extraContext) => string
     *  path: string
     *  params: {any}
     *  module: string
     *
     *  // 需要以  '/' 起始
     *  extraContext: string | undefined
     */
    link(path, params, module, extraContext) {
        if (typeof module === 'undefined') {
            return urlUtils.linkPrivate(path, params);
        }
        params = params || {}
        return context + (extraContext ? extraContext : '')
            + '/pages/' + module + '.html' + urlUtils.linkPrivate(path, params);
    },

    parseQuery(query) {
        let i = query.indexOf('?')
        if (i >= 0) {
            query = query.substr(i + 1)
        }
        let res = parse(query);

        delete res[''];
        return res;
    },

    parse(parseQuery = true) {
        const obj = {}
        if (/\/pages\/(.+)\.html/.exec(location.pathname) && RegExp.$1) {
            obj.module = RegExp.$1
        }
        if (/#(?:\/?)([^\?]+)/.exec(location.hash) && RegExp.$1) {
            obj.path = RegExp.$1
        }
        if (/#(?:\/?)(?:[\s\S]+?)\?([\s\S]+)/.exec(location.hash)) {
            const str = RegExp.$1
            if (str) {
                obj.query = parseQuery ? this.parseQuery(str) : str
            } else {
                obj.query = parseQuery ? {} : ''
            }
        }
        obj.query = obj.query || {};
        return obj
    },

    api(path) {
        // 如果是完整的地址就不需要拼接context了
        if (/^https?:\/\/[^/]/.test('path')) {
            return path
        }
        return context + path;
    },
    /**
     * 使用 #@~.link 获得对应的跳转 url, 并做跳转
     *
     * @def: .jump:(path, params, module, extraContext) =>. undefined
     */
    jump(path, params, module, extraContext) {
        location.href = urlUtils.link(path, params, module, extraContext);
    },

    // 用于从 state sync 到 url 中
    seqTimestamp: 0,
    SYNC_TIMEOUT: 50,
    isSeqInSyncCycle(seq) {
        if (!!this.seqTimestamp && new Date().getTime() - this.seqTimestamp < this.SYNC_TIMEOUT) {
            return true;
        }
        return false;
    },

    innerPushLink(link) {
        this.seqTimestamp = new Date().getTime();
        hashHistory.push(link);
    },

    syncParams(path, params, module) {
        if (!path) {
            path = this.location.pathname;
        }
        let newParams = Object.assign({}, this.location.query);

        for (let key in params) {
            newParams[key] = params[key];
        }
        this.location.query = newParams;
        let link = urlUtils.link(path, newParams, module, true);

        this.innerPushLink(link);
    },

    open(options) {
        let {
            showBlankWaiting = false,
            waitingUrl,

            path,
            params,
            module,

            targetPopup
        } = options;

        if (targetPopup) {
            targetPopup.location.href = urlUtils.link(path, params, module);
            return targetPopup;
        }
        else {
            let popup;
            if (waitingUrl) {
                popup = window.open(waitingUrl);
            }
            else if (showBlankWaiting) {
                popup = window.open('');
            }
            else {
                popup = window.open(urlUtils.link(path, params, module));
            }

            return popup;
        }
    },

    /**
     * 返回页面顶部, 页面跳转时需要调用
     */
    backToTop() {
        window.scrollTo(0, 0);
    },

    /**
     * modal内部跳至顶部, 这个可能需要根据实际的 modal 情况改写
     * @param {string} className 类名称
     */
    modalToTop(className) {
        const modal = document.querySelector(className ? '.' + className + ' .modal-body' : '.modal-body');
        if (modal) {
            modal.scrollTop = 0;
        }
    },

    getContextRootPath() {
        const contextLength = context.length;
        return contextLength && context.lastIndexOf('/') === contextLength - 1
            ? context : context + '/';
    },

    setContext(ctx) {
        context = ctx
    }
};

urlUtils.innerPushLink = _.debounce(urlUtils.innerPushLink, 30);

// hashHistory.listen(function (location) {
//     urlUtils.location = location;
// });

const formalizeContextPath = contextPath => {
    if (contextPath) {
        if (/\/$/.exec(contextPath)) {
            contextPath = contextPath.substr(0, contextPath.length - 1);
        }
        if (!/^\//.exec(contextPath)
            && !/^http/.exec(contextPath) /* in case of context of `http://domain.com/context` */
        ) {
            contextPath = '/' + contextPath;
        }
    }
    if (contextPath === '/') {
        return '';
    }
    return contextPath;
};

if (context === '${CONTEXT}') {
    context = '';
} else {
    context = formalizeContextPath(context);
}

export default urlUtils;
