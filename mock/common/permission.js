var Mock = require('mockjs')

module.exports = {
        "status": "ok",
        "message": null,
        "data": {
            "user": {
                "id": "1",
                "tenantId": 1,
                "fullName": "用户1",
                "employeeNumber": "S123",
                "userAccount": "momo03",
                "uid": 139193,
                "imageUrl": "https://www.s.com/",
                "departmentName": "部门",
                "language": "zh_CN",
                "currentRoleCode": "admin",
                "roles": [
                    {
                        "id": 1022059916410490900,
                        "name": "管理员",
                        "nameEn": "",
                        "code": "admin"
                    }
                ]
            },
            
            "resources": [
                {
                    "id": 1011554904587206700,
                    "name": "**管理平台",
                    "nameEn": "IDC",
                    "code": "idc",
                    "type": 1,
                    "applicationId": 1011554904587206700,
                    "order": 0,
                    "status": 1,
                    "subResources": [
                        {
                            "id": 1022056982534262800,
                            "name": "首页",
                            "nameEn": "",
                            "code": "index",
                            "parentId": 1011554904587206700,
                            "type": 4,
                            "applicationId": 1011554904587206700,
                            "sequence": 1,
                            "url": "/index",
                            "order": 0,
                            "status": 1,
                            "authorityUrls": [ ]
                        },
                        {
                            "id": 1022057179720859600,
                            "name": "系统管理",
                            "nameEn": "系统管理",
                            "code": "systemmanagement",
                            "parentId": 1011554904587206700,
                            "type": 4,
                            "applicationId": 1011554904587206700,
                            "sequence": 9,
                            "url": "/system",
                            "order": 0,
                            "status": 1,
                            "subResources": [
                                {
                                    "id": 1022057340744433700,
                                    "name": "数据统计",
                                    "nameEn": "",
                                    "code": "systemdictionary",
                                    "parentId": 1022057179720859600,
                                    "type": 4,
                                    "applicationId": 1011554904587206700,
                                    "sequence": 1,
                                    "url": "/system/charts",
                                    "order": 0,
                                    "status": 1,
                                    "authorityUrls": [ ]
                                },
                                {
                                    "id": 1022057434977812500,
                                    "name": "表单页",
                                    "nameEn": "",
                                    "code": "dataaccess",
                                    "parentId": 1022057179720859600,
                                    "type": 4,
                                    "applicationId": 1011554904587206700,
                                    "sequence": 2,
                                    "url": "/system/form",
                                    "order": 0,
                                    "status": 1,
                                    "authorityUrls": [ ],
                                    "subResources":[
                                        {
                                            "id": 1022057340744433700,
                                            "name": "基础表单",
                                            "nameEn": "",
                                            "code": "systemdictionary",
                                            "parentId": 1022057179720859600,
                                            "type": 4,
                                            "applicationId": 1011554904587206700,
                                            "sequence": 1,
                                            "url": "/system/form/base",
                                            "order": 0,
                                            "status": 1,
                                            "authorityUrls": [ ]
                                        },{
                                            "id": 1022057340744433700,
                                            "name": "查询表格",
                                            "nameEn": "",
                                            "code": "systemdictionary",
                                            "parentId": 1022057179720859600,
                                            "type": 4,
                                            "applicationId": 1011554904587206700,
                                            "sequence": 1,
                                            "url": "/system/form/search",
                                            "order": 0,
                                            "status": 1,
                                            "authorityUrls": [ ]
                                        },
                                    ]
                                }
                            ],
                            "authorityUrls": [ ]
                        }
                    ],
                    "authorityUrls": [ ]
                }
            ],
            "authorityUrls": [ ]
        }
}
