const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList=require('./data/getQuestionList')
module.exports=[
  {
    //获取单个问卷
    url:'/api/question/:id',
    method:'get',
    response(){
      return {
        code:'S001',
        data:{
          id:Random.id(),
          title:Random.ctitle()
        }
      }
    }
  },{
    // 创建问卷
    url:'/api/question',
    method:'post',
    response(){
      return {
        code:'S001',
        data:{
          id:Random.id()
        }
      }
    }
  },
  //获取（查询）问卷列表
  {
    url:'/api/question',
    method:'get',
    response(ctx){
      console.log('ctx is:',ctx)
      const {originalUrl=''} = ctx
      const isDeleted=originalUrl.indexOf('isDeleted=true')>=0
      const isStar = originalUrl.indexOf('isStar=true')>=0
      return {
        code:'S001',
        data:{
          list:getQuestionList({isDeleted,isStar}),//当前页
          total:100//总数
        }
      }
    }
  }
    
  
]