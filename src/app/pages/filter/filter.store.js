import { observable } from "mobx";

export class FilterStore {
//   @observable data;

  constructor() {
     let data = {
      filters: {
        proxyIp: [
          {
            id: null,
            name: "null"
          }
        ],
        hostLocation: [
          {
            id: null,
            name: "null"
          },
          {
            id: "武汉光谷天地",
            name: "武汉光谷天地"
          },
          {
            id: "11222111",
            name: "11222111"
          },
          {
            id: "武汉",
            name: "武汉"
          },
          {
            id: "222",
            name: "222"
          }
        ],
        chargeName: [
          {
            id: "张楠111",
            name: "张楠111"
          },
          {
            id: "meigen",
            name: "meigen"
          },
          {
            id: "xin.hu ",
            name: "xin.hu "
          },
          {
            id: "555",
            name: "555"
          },
          {
            id: "111",
            name: "111"
          },
          {
            id: "青藤",
            name: "青藤"
          },
          {
            id: null,
            name: "null"
          },
          {
            id: "",
            name: ""
          }
        ],
        hostTag: [
          {
            id: "fff",
            name: "fff"
          },
          {
            id: "fast",
            name: "fast"
          },
          {
            id: "hello world",
            name: "hello world"
          },
          {
            id: "testaa",
            name: "testaa"
          },
          {
            id: "联系",
            name: "联系"
          },
          {
            id: "aa",
            name: "aa"
          },
          {
            id: "为所欲为之为父不接",
            name: "为所欲为之为父不接"
          },
          {
            id: "风向",
            name: "风向"
          },
          {
            id: "fasfd",
            name: "fasfd"
          },
          {
            id: "test-test000",
            name: "test-test000"
          }
        ],
        platform: [
          {
            id: "Ubuntu 16.04.4 LTS",
            name: "Ubuntu 16.04.4 LTS"
          },
          {
            id: "CentOS release 5.11 (Final)",
            name: "CentOS release 5.11 (Final)"
          },
          {
            id: "Red Hat Enterprise Linux Server release 5.4 (Tikanga)",
            name: "Red Hat Enterprise Linux Server release 5.4 (Tikanga)"
          },
          {
            id: "CentOS release 6.5 (Final)",
            name: "CentOS release 6.5 (Final)"
          },
          {
            id: "Ubuntu 16.04 LTS",
            name: "Ubuntu 16.04 LTS"
          },
          {
            id: "CentOS release 6.7 (Final)",
            name: "CentOS release 6.7 (Final)"
          },
          {
            id: "UBUNTU 16.04.2 LTS\nUbuntu 16.04.2 LTS",
            name: "UBUNTU 16.04.2 LTS\nUbuntu 16.04.2 LTS"
          },
          {
            id: "UBUNTU 16.04 LTS\nUbuntu 16.04 LTS",
            name: "UBUNTU 16.04 LTS\nUbuntu 16.04 LTS"
          },
          {
            id: "CentOS Linux release 7.0.1406 (Core)",
            name: "CentOS Linux release 7.0.1406 (Core)"
          },
          {
            id: "CentOS release 5.10 (Final)",
            name: "CentOS release 5.10 (Final)"
          },
          {
            id: "CentOS release 6.4 (Final)",
            name: "CentOS release 6.4 (Final)"
          },
          {
            id: "Ubuntu 16.04.2 LTS",
            name: "Ubuntu 16.04.2 LTS"
          },
          {
            id: "CentOS release 6.9 (Final)",
            name: "CentOS release 6.9 (Final)"
          },
          {
            id: "CentOS release 6.8 (Final)",
            name: "CentOS release 6.8 (Final)"
          },
          {
            id: "Ubuntu 16.04.3 LTS",
            name: "Ubuntu 16.04.3 LTS"
          },
          {
            id:
              "UBUNTU BIONIC BEAVER (DEVELOPMENT BRANCH)\nUbuntu Bionic Beaver (development branch)",
            name:
              "UBUNTU BIONIC BEAVER (DEVELOPMENT BRANCH)\nUbuntu Bionic Beaver (development branch)"
          },
          {
            id: "CentOS release 6.6 (Final)",
            name: "CentOS release 6.6 (Final)"
          },
          {
            id: "Ubuntu 14.04.5 LTS",
            name: "Ubuntu 14.04.5 LTS"
          },
          {
            id: "Debian GNU/Linux stretch/sid",
            name: "Debian GNU/Linux stretch/sid"
          }
        ],
        group: [
          {
            id: {
              id: 1,
              parentId: 0,
              allowed: true
            },
            name: "未分组主机（Linux）"
          },
          {
            id: {
              id: 4,
              parentId: 0,
              allowed: true
            },
            name: "zhangrui"
          },
          {
            id: {
              id: 5,
              parentId: 0,
              allowed: true
            },
            name: "zhangrui"
          },
          {
            id: {
              id: 6,
              parentId: 4,
              allowed: true
            },
            name: "zi"
          },
          {
            id: {
              id: 7,
              parentId: 4,
              allowed: true
            },
            name: "group2"
          },
          {
            id: {
              id: 8,
              parentId: 0,
              allowed: true
            },
            name: "group3"
          },
          {
            id: {
              id: 13,
              parentId: 0,
              allowed: true
            },
            name: "&_test"
          },
          {
            id: {
              id: 14,
              parentId: 7,
              allowed: true
            },
            name: "rui-2-2"
          },
          {
            id: {
              id: 16,
              parentId: 4,
              allowed: true
            },
            name: "abc_0"
          },
          {
            id: {
              id: 19,
              parentId: 0,
              allowed: true
            },
            name: "tianxianhu"
          },
          {
            id: {
              id: 20,
              parentId: 8,
              allowed: true
            },
            name: "group3-level2"
          },
          {
            id: {
              id: 21,
              parentId: 20,
              allowed: true
            },
            name: "group3-level-3"
          },
          {
            id: {
              id: 22,
              parentId: 21,
              allowed: true
            },
            name: "group-level-4"
          },
          {
            id: {
              id: 23,
              parentId: 21,
              allowed: true
            },
            name: "group3-level-4-2"
          },
          {
            id: {
              id: 24,
              parentId: 21,
              allowed: true
            },
            name: "group3-level-4-3"
          },
          {
            id: {
              id: 25,
              parentId: 21,
              allowed: true
            },
            name: "group3-level-4-4"
          },
          {
            id: {
              id: 34,
              parentId: 0,
              allowed: true
            },
            name: "test_2"
          },
          {
            id: {
              id: 35,
              parentId: 19,
              allowed: true
            },
            name: "tt"
          },
          {
            id: {
              id: 37,
              parentId: 34,
              allowed: true
            },
            name: "test"
          },
          {
            id: {
              id: 39,
              parentId: 0,
              allowed: true
            },
            name: "namei"
          },
          {
            id: {
              id: 41,
              parentId: 0,
              allowed: true
            },
            name: "heyanyan"
          },
          {
            id: {
              id: 42,
              parentId: 0,
              allowed: true
            },
            name: "docker - 忠阳"
          },
          {
            id: {
              id: 44,
              parentId: 0,
              allowed: true
            },
            name: "bingxian.wu"
          },
          {
            id: {
              id: 65,
              parentId: 4,
              allowed: true
            },
            name: "222"
          }
        ]
      },
      total: 46
    };
  }

  handleChange(item){

  }

  handleClick(value){

  }
}
 