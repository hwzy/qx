/*
脚本作者：**
更新时间：2024-4.19
电报频道：https://t.me/HelloWorld_1024
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/hwzy/qx/refs/heads/main/Pro.js

[mitm]
hostname = buy.itunes.apple.com

*/

var obj = JSON.parse($response.body); 
 

obj = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1000000000,
    "app_item_id": 1000000000,
    "bundle_id": "com.mediaeditor.video",
    "application_version": "437",
    "download_id": 88888899999999,
    "version_external_identifier": 999999999,
    "receipt_creation_date": "2222-02-22 22:22:22 Etc/GMT",
    "receipt_creation_date_ms": "7956814942000",
    "receipt_creation_date_pst": "2222-02-22 22:22:22 America/Los_Angeles",
    "request_date": "2020-10-10 10:10:10 Etc/GMT",
    "request_date_ms": "1602295810000",
    "request_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "original_purchase_date_ms": "1602295810000",
    "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_application_version": "433",
    "in_app": [{
      "quantity": "1",
      "product_id": "elongpt.yearly_2",
      "transaction_id": "888886666699999",
      "original_transaction_id": "888886666699999",
      "purchase_date": "2011-11-11 11:11:11 Etc/GMT",
      "purchase_date_ms": "1602295810000",
      "purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
      "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
      "original_purchase_date_ms": "1602295810000",
      "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
      "expires_date": "2222-02-22 22:22:22 Etc/GMT",
      "expires_date_ms": "7956814942000",
      "expires_date_pst": "2222-02-22 22:22:22 America/Los_Angeles",
      "web_order_line_item_id": "888886666699999",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "elongpt.yearly_2",
    "transaction_id": "888886666699999",
    "original_transaction_id": "888886666699999",
    "purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "purchase_date_ms": "1602295810000",
    "purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "original_purchase_date_ms": "1602295810000",
    "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "expires_date": "2222-02-22 22:22:22 Etc/GMT",
    "expires_date_ms": "7956814942000",
    "expires_date_pst": "2222-02-22 22:22:22 America/Los_Angeles",
    "web_order_line_item_id": "888886666699999",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "99999999"
  }],
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "pending_renewal_info": [{
    "auto_renew_product_id": "03",
    "original_transaction_id": "888886666699999",
    "product_id": "03",
    "auto_renew_status": "1"
  }]
};

$done({body:JSON.stringify(obj)});
