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
      const {originalUrl='',query} = ctx
      const isDeleted=originalUrl.indexOf('isDeleted=true')>=0
      const isStar = originalUrl.indexOf('isStar=true')>=0
      const pageSize = parseInt(query.pageSize)||10

      return {
        code:'S001',
        message:'请求成功',
        data:{
          list:getQuestionList({len:pageSize,isDeleted,isStar}),//当前页
          total:100//总数
        }
      }
    }
  },
  {
    //更新问卷
    url:'/api/question/:id',
    method:'patch',
     response(){
      return {
        code:'S001',
      }
    }
  },
  {
    //复制问卷
    url:'/api/question/duplicate/:id',
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
  {
    //批量彻底删除
    url:'/api/question',
    method:'delete',
    response(){
      return {
        code:'S001'
      }
    }
  }
]