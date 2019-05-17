/**
 * @file 统一转发文件
 * @author xcx
 */
module.exports = [
    // 统一做的转发, 根据相应需求修改.
    {test: '/mock/table', mock: 'common/table'},
    {test: '/mock/permission', mock: 'common/permission'},
];
