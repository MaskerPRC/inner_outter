var client1_info_demo = {
    client_id: 1,
}
var item_info_demo = {
    item_id: 1,
}
var item_info_ip_port_demo = {
    item_id: 1,
}
var deploy_server_ip = "39.98.113.76";
var model = {
    // 穿透列表
    deploy_server_ip: deploy_server_ip,
    through_list: {
        // ip+端口映射
        type_ip_port: {
            [client1_info_demo.client_id]: {
                [item_info_ip_port_demo.item_id]: {
                    // __offset_key便于查找到这个key和删除这个key
                    __offset_key: item_info_ip_port_demo.item_id,
                    // 备注
                    remark: "数据建模阶段测试ip+端口映射",
                    // proxy_port: deploy_server_ip:8081 -> 127.0.0.1:8080
                    proxy_port: "8081",
                    // target ip+:+port
                    target: "127.0.0.1:8080",
                }
            }

        },
        // 域名映射
        type_domain: {
            [client1_info_demo.client_id]: {
                [item_info_demo.item_id]: {
                    // __offset_key便于查找到这个key和删除这个key
                    __offset_key: item_info_demo.item_id,
                    // 备注
                    remark: "数据建模阶段测试",
                    // host: test.inner.whaty.dev
                    pre_host: "test",
                    // target ip+:+port
                    target: "127.0.0.1:8080",
                    // path: 路径  test.inner.whaty.dev/testapi
                    path: "/testapi",
                }
            }
        }
    },
    // 穿透客户端
    through_client_list: {
        [client1_info_demo.client_id] : {
            __offset_key: client1_info_demo.client_id,

            remark: "数据建模阶段测试-npc客户端",
            machine_mac_arr: [],
            alloc_key: "vej3c03gn9lfsixa",
        }
    }
}
