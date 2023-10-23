/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9a104cd61d643490',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '71a1ac69a61f746d3e4fd79cb50a6a22',

  PROVINCE: '北京',
  CITY: '朝阳区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osUGF6k1bwGShcIiUujt__xKiyI8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '03gX9BRP0TpP936lrj2HIOCE8Gu0Y0-1Fdks7UHTMeU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小十亿', year: '2023', date: '05-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '纠正胎龄', year: '2023', date: '07-15',
        },
        {
          type: '*生日', name: '小凑宝', year: '1991', date: '06-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-05-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2019-05-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'dRC8MiYoujjOez63_wKmh36RoPUan9rclwCZXYjU8WE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osUGF6k1bwGShcIiUujt__xKiyI8',
    }
  ],

}

module.exports = USER_CONFIG

