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
    setState(state) {
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                this[key] = state[key]
            }
        }
    },
    setSubTitle() {
        this.setState({
            'subTitle': '测试系统名称12312'
        })
    }
}


const methods = {
    setSubTitle() {
        this.setState({
            'subTitle': '测试系统名称12312'
        })
    }
};



// @bind(View)
class BaseState extends BaseModel {

    static injectKey = 'commonLayout'

    @observable subTitle = "***健康管理系统";

    constructor() {
        super();
        bindActions(this, handlers);
        extendMethods(BaseState, methods);
    }
    
    @computed get getSubTitle() {
        return this.subTitle;
    }

}

export default BaseState
