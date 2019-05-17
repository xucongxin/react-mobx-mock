/**
 * @file ServerConfig
 * @author xcx
 */

var ServerConfig = {
    'host': 'http://localhost:8088',
    'permission': '/mock/permission', // 模拟数据获取用户登陆信息
    'logout': '/logout',
    // 系统管理接口
    'system': {
        'getUserInfo': '/mock/user/name', // 根据用户名查询用户
    },
    
};

module.exports = ServerConfig
