/**
@api {post} /api/auth/twitter 1. 트위터 인증 로그인
@apiName PostAuthTwitter
@apiGroup 1 Auth

@apiParam {String} oauth_token OAuth Token
@apiParam {String} oauth_verifier OAuth Verifier

@apiSuccess {[String]} keywords 관심사 키워드
@apiSuccess {Boolean} is_analyzing 현재 분석중인지 여부
@apiSuccess {Number} get_tweets_count 가져온 트윗 개수
@apiSuccess {Number} get_retweets_count 가져온 리트윗 개수
@apiSuccess {String} id_str 계정 숫자ID
@apiSuccess {String} name 계정 이름
@apiSuccess {String} screen_name 계정 영문ID
@apiSuccess {String} location 프로필 위치
@apiSuccess {String} description 프로필 자기소개
@apiSuccess {String} url 프로필 위치
@apiSuccess {Number} followers_count 팔로워 수
@apiSuccess {Number} friends_count 팔로잉 수
@apiSuccess {Number} statuses_count 작성 트윗 개수
@apiSuccess {String} lang 언어
@apiSuccess {String} profile_image_url_https 계정 이미지
@apiSuccess {String} access_token Access Token
@apiSuccess {String} access_token_secret Access Token Secret
@apiSuccess {String} created_at 가입일
 
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
  "keywords": [
    "컴퓨터통신",
    "하드웨어",
    "소프트웨어",
    "여행"
  ],
  "is_analyzing": false,
  "get_tweets_count": 0,
  "get_retweets_count": 0,
  "id_str": "983165089724252160",
  "name": "PW486",
  "screen_name": "ooqwe486",
  "location": "",
  "description": "",
  "url": null,
  "followers_count": 0,
  "friends_count": 4,
  "statuses_count": 0,
  "lang": "ko",
  "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile.png",
  "access_token": "qfmwnFZb3Y9XHn4Hcy4vuQssPRSQD5m3CnBpmkGu6q",
  "access_token_secret": "KtfcbcVzD8CWvEnFXDxSEkYSTNNtXd86p2f6sTrDN4",
  "created_at": "2018-04-09T02:09:58.000Z"
}
*/

/**
@api {get} /api/auth/profile 2. 사용자 프로필 확인
@apiName GetAuthProfile
@apiGroup 1 Auth

@apiHeader {String} authorization Access Token
@apiHeaderExample {json} Header-Example:
{
  "authorization": "Bearer f98fAhBVT5s7dmaYEZNKDGB7AyXHyUGBrYakqQzxySjZradxEk"
}
*/

/**
@api {patch} /api/auth/profile 3. 사용자 프로필 수정
@apiName PatchAuthProfile
@apiGroup 1 Auth

@apiHeader {String} authorization Access Token
@apiHeaderExample {json} Header-Example:
{
  "authorization": "Bearer f98fAhBVT5s7dmaYEZNKDGB7AyXHyUGBrYakqQzxySjZradxEk"
}

@apiParam {[String]} keywords 새로운 관심사 키워드
@apiParamExample {json} Request-Example:
{
  "keywords": [
    "컴퓨터통신",
    "소프트웨어",
    "여행",
    "식품"
  ],
}
*/