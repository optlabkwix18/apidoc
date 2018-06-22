/**
@api {post} /api/analysis 1. 사용자 분석 요청
@apiName PostAnalysis
@apiGroup 2 Analysis

@apiHeader {String} authorization Access Token
@apiHeaderExample {json} Header-Example:
{
  "authorization": "Bearer f98fAhBVT5s7dmaYEZNKDGB7AyXHyUGBrYakqQzxySjZradxEk"
}

@apiParam {String} tweet_count 가져올 트윗 개수
@apiParam {String} retweet_count 가져올 리트윗 개수

@apiSuccess {String} msg Response Message
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
  "msg": "분석 요청 완료!"
}
@apiSuccessExample {json} Accept-Response:
HTTP/1.1 202 Accepted
{
  "msg": "아직 분석 중입니다..."
}
*/