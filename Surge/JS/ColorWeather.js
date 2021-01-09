let obj = JSON.parse($response.body);
obj = {
  "result" : {
    "device_id" : "876CA4DC-6DA2-4464-A51A-2DAD23C61905",
    "_id" : "5ff9b070a1ca3b00102e734e",
    "created_at" : 1610199152.0191729069,
    "svip_given" : 0,
    "ranking_above" : 0,
    "platform_name" : "apple",
    "is_phone_verified" : false,
    "last_acted_at" : 1610199152.0191910267,
    "hasBeenInvited" : false,
    "is_xy_vip" : false,
    "vip_expired_at" : 0,
    "is_vip" : true,
    "score" : 2000,
    "xy_svip_expire" : 0,
    "auto_renewal_type" : "",
    "third_party_id" : null,
    "third_party_ids" : [

    ],
    "name" : "***1643",
    "free_trial" : 14,
    "wt" : {
      "vip" : {
        "is_auto_renewal" : false,
        "enabled" : true,
        "svip_auto_renewal_type" : "",
        "expired_at" : 0,
        "auto_renewal_type" : "",
        "svip_expired_at" : 2610806340.7131289005
      },
      "is_login" : true,
      "free_trial" : 14,
      "last_acted_at" : 1610199152.0191910267,
      "created_at" : 1610199152.0191910267
    },
    "is_auto_renewal" : false,
    "avatar" : "",
    "platform_id" : "000735.487ffd2d93f94780816e8bfcdafd7399.1332",
    "is_primary" : false,
    "phone_num" : "",
    "gender" : null,
    "xy_vip_expire" : 0,
    "is_xy_auto_renewal" : false,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWZmOWIwNzBhMWNhM2IwMDEwMmU3MzRlIiwic3ZpcF9leHBpcmVkX2F0IjoxNjEwODA2MzQwLjYxMzEyOSwidmlwX2V4cGlyZWRfYXQiOjB9.KN4PlYjiXBFjtJ3I3axxAXX1E3eCafuKmuXtvkgNP4o",
    "is_login" : true,
    "svip_expired_at" : 2610806340.7131289005,
    "vip_type" : "s",
    "bound_status" : {
      "qq" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "google" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "weixin" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "caiyun" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "twitter" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "facebook" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      },
      "apple" : {
        "id" : "5ff9b070a1ca3b00102e734e",
        "username" : "***1332",
        "is_bound" : true
      },
      "weibo" : {
        "id" : "",
        "username" : "",
        "is_bound" : false
      }
    }
  },
  "rc" : 0
};

$done({body: JSON.stringify(obj)});
