/*
脚本作者：**
更新时间：2024-4.19
电报频道：https://t.me/HelloWorld_1024
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]
#彩虹组件
https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Hello-Fly/qx/main/Pro.js

[mitm]
hostname = buy.itunes.apple.com

*/

var obj = JSON.parse($response.body); 
 

obj = {    "\x73\x74\x61\x74\x75\x73": 0,    "\x65\x6e\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74": "\x50\x72\x6f\x64\x75\x63\x74\x69\x6f\x6e",    "\x72\x65\x63\x65\x69\x70\x74": {        "\x72\x65\x63\x65\x69\x70\x74\x5f\x74\x79\x70\x65": "\x50\x72\x6f\x64\x75\x63\x74\x69\x6f\x6e",        "\x61\x64\x61\x6d\x5f\x69\x64": 1000000000,        "\x61\x70\x70\x5f\x69\x74\x65\x6d\x5f\x69\x64": 1000000000,        "\x62\x75\x6e\x64\x6c\x65\x5f\x69\x64": "\x63\x6f\x6d\x2e\x6d\x65\x64\x69\x61\x65\x64\x69\x74\x6f\x72\x2e\x76\x69\x64\x65\x6f",        "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e": "\x34\x33\x37",        "\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x5f\x69\x64": 88888899999999,        "\x76\x65\x72\x73\x69\x6f\x6e\x5f\x65\x78\x74\x65\x72\x6e\x61\x6c\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72": 999999999,        "\x72\x65\x63\x65\x69\x70\x74\x5f\x63\x72\x65\x61\x74\x69\x6f\x6e\x5f\x64\x61\x74\x65": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x45\x74\x63\x2f\x47\x4d\x54",        "\x72\x65\x63\x65\x69\x70\x74\x5f\x63\x72\x65\x61\x74\x69\x6f\x6e\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x37\x39\x35\x36\x38\x31\x34\x39\x34\x32\x30\x30\x30",        "\x72\x65\x63\x65\x69\x70\x74\x5f\x63\x72\x65\x61\x74\x69\x6f\x6e\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x45\x74\x63\x2f\x47\x4d\x54",        "\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",        "\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x45\x74\x63\x2f\x47\x4d\x54",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e": "\x34\x33\x33",        "\x69\x6e\x5f\x61\x70\x70": [{            "\x71\x75\x61\x6e\x74\x69\x74\x79": "\x31",            "\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64": "\x79\x65\x61\x72\x61\x75\x74\x6f\x72\x65\x6e\x65\x77",            "\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",            "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",            "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": "\x32\x30\x31\x31\x2d\x31\x31\x2d\x31\x31 \x31\x31\x3a\x31\x31\x3a\x31\x31 \x45\x74\x63\x2f\x47\x4d\x54",            "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",            "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",            "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x45\x74\x63\x2f\x47\x4d\x54",            "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",            "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",            "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x45\x74\x63\x2f\x47\x4d\x54",            "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x37\x39\x35\x36\x38\x31\x34\x39\x34\x32\x30\x30\x30",            "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",            "\x77\x65\x62\x5f\x6f\x72\x64\x65\x72\x5f\x6c\x69\x6e\x65\x5f\x69\x74\x65\x6d\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",            "\x69\x73\x5f\x74\x72\x69\x61\x6c\x5f\x70\x65\x72\x69\x6f\x64": "\x74\x72\x75\x65",            "\x69\x73\x5f\x69\x6e\x5f\x69\x6e\x74\x72\x6f\x5f\x6f\x66\x66\x65\x72\x5f\x70\x65\x72\x69\x6f\x64": "\x66\x61\x6c\x73\x65"        }]    },    "\x6c\x61\x74\x65\x73\x74\x5f\x72\x65\x63\x65\x69\x70\x74\x5f\x69\x6e\x66\x6f": [{        "\x71\x75\x61\x6e\x74\x69\x74\x79": "\x31",        "\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64": "\x79\x65\x61\x72\x61\x75\x74\x6f\x72\x65\x6e\x65\x77",        "\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",        "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x45\x74\x63\x2f\x47\x4d\x54",        "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",        "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x45\x74\x63\x2f\x47\x4d\x54",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x31\x36\x30\x32\x32\x39\x35\x38\x31\x30\x30\x30\x30",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x30\x32\x30\x2d\x31\x30\x2d\x31\x30 \x31\x30\x3a\x31\x30\x3a\x31\x30 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x45\x74\x63\x2f\x47\x4d\x54",        "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x6d\x73": "\x37\x39\x35\x36\x38\x31\x34\x39\x34\x32\x30\x30\x30",        "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x70\x73\x74": "\x32\x32\x32\x32\x2d\x31\x2d\x32\x32 \x32\x32\x3a\x32\x32\x3a\x32\x32 \x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73",        "\x77\x65\x62\x5f\x6f\x72\x64\x65\x72\x5f\x6c\x69\x6e\x65\x5f\x69\x74\x65\x6d\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",        "\x69\x73\x5f\x74\x72\x69\x61\x6c\x5f\x70\x65\x72\x69\x6f\x64": "\x74\x72\x75\x65",        "\x69\x73\x5f\x69\x6e\x5f\x69\x6e\x74\x72\x6f\x5f\x6f\x66\x66\x65\x72\x5f\x70\x65\x72\x69\x6f\x64": "\x66\x61\x6c\x73\x65",        "\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72": "\x39\x39\x39\x39\x39\x39\x39\x39"    }],    "\x6c\x61\x74\x65\x73\x74\x5f\x72\x65\x63\x65\x69\x70\x74": "\x35\x4c\x32\x63\x36\x49\x43\x46\x51\x47\x74\x70\x62\x6d\x63\x3d",    "\x70\x65\x6e\x64\x69\x6e\x67\x5f\x72\x65\x6e\x65\x77\x61\x6c\x5f\x69\x6e\x66\x6f": [{        "\x61\x75\x74\x6f\x5f\x72\x65\x6e\x65\x77\x5f\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64": "\x79\x65\x61\x72\x61\x75\x74\x6f\x72\x65\x6e\x65\x77",        "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64": "\x38\x38\x38\x38\x38\x36\x36\x36\x36\x36\x39\x39\x39\x39\x39",        "\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64": "\x79\x65\x61\x72\x61\x75\x74\x6f\x72\x65\x6e\x65\x77",        "\x61\x75\x74\x6f\x5f\x72\x65\x6e\x65\x77\x5f\x73\x74\x61\x74\x75\x73": "\x31"    }]}

$done({body:JSON.stringify(obj)});
