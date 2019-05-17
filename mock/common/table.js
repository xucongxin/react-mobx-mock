var Mock = require('mockjs')
const datatest = Mock.mock({
    'data|10-11': [{
        "id|+1": 1,
        "machineCode|1-1000000000":1000000001,
        "machineName|1-1": "机房名称",
        "computeRoomAbb|1-1": '机房缩写',
        "region": '中国',
        "machineWhere|1": ["中国-北京-海淀", "中国-福建-厦门", "中国-浙江-杭州"],
        "machineAttribute|1": ["CDN", "IDC", "SSL"],
        "machineRoomUser|1": ["万超14", "万成13", "万程12", "万春辉10", "1Wang Yuxian8", "和田彩美5", "万超"],
        "createUser|1": ["万超14", "万成13", "万程12", "万春辉10", "1Wang Yuxian8", "和田彩美5", "万超"],
        "createUserDepartment|1": ["部门1", "部门2", "部门3", "部门4", "部门5", "部门6", "部门7"],
        "rmsRoomAbb|1-1": "rms机房缩写",
        "rmsRoomCode|1-1": "rms机房编号",
        "machineAddress|1": ["中国-北京-海淀", "中国-福建-厦门", "中国-浙江-杭州"],
        "rmsRoomOperator|1": ["移动", "联通", "电信", "第三方"],
        "rmsDescribe|1-3": "rms描述",
        "valid": '@integer(0, 1)',
        "remark|1-3": "备注"
    }]
})

// 'id': 主键
// 'machineCode:机房编号,
// 'machineName: 机房名称,
// 'computeRoomAbb: 机房缩写,
// 'region: 区域,
// 'machineWhere: 机房所在城市,
// 'machineRoomUser': 机房所有者
// 'machineAttribute: 机房属性,
// 'createUser: 创建人,
// 'createUserDepartment: 创建人部门,
// 'rmsRoomAbb: rms机房缩写,
// 'rmsRoomCode: rms机房编号,
// 'machineAddress: 机房地址,
// 'rmsRoomOperator: "rms机房运营商,
// 'rmsDescribe: rms描述,
// 'valid': 状态,
// 'createTime': 创建时间,
// 'update_time': 修改时间,
// ’status: 数据状态
// ‘remark: 备注
module.exports = {
    status: 'ok',
    data:{
        total: datatest.data.length,
        t: datatest.data
    }
}
