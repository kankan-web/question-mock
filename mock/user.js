const Mock = require('mockjs')
const Random = Mock.Random
module.exports=[
  {
    //获取用户信息
    url:'/api/user/info',
    method:'get',
    response(){
      return {
        code:'S001',
        data:{
          username:Random.title(),
          nickname:Random.cname()
        }
      }
    }
  },
  {
    //注册
    url:'/api/user/register',
    method:'post',
    response(){
      return {
        code:'S001'
      }
    }
  },
  {
    //登录
    url:'/api/user/login',
    method:'post',
    response(){
      return {
        code:'S001',
        data:{
          token:Random.guid()
        }
      }
    }
  }
]