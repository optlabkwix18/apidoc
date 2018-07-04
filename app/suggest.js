/**
@api {get} /api/suggest/keywords 1. 전체 관심사 얻기
@apiName GetSuggestKeywords
@apiGroup 3 Suggest

@apiSuccessExample {json} Success-Response:
HTTP/1.1 304 Not Modified
["컴퓨터통신", "컴퓨터", "하드웨어", "소프트웨어", "운영체제", "프로그래밍"]
*/

/**
@api {get} /api/suggest/trends 2. 랜덤 트렌드 얻기
@apiName GetSuggestTrends
@apiGroup 3 Suggest

@apiSuccess {String} user 트윗 작성 유저
@apiSuccess {String} keyword 관심사 키워드
@apiSuccess {String} created_at 작성일
@apiSuccess {String} id_str 트윗 ID
@apiSuccess {String} test 트윗 내용
@apiSuccess {String} retweet_count 리트윗 수
@apiSuccess {String} favorite_count 좋아요 수
@apiSuccess {Number} followers_count 팔로워 수
@apiSuccess {String} lang 언어
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
[
  {
    "_id": "5b3be6428418550578dd677f",
    "creatat": "2018-07-02T09:20:22.000Z",
    "searchKeywordId": "5b3be5578418550578dd6778",
    "searchKeyword": "잉글랜드",
    "statusid": "1013713982861946880",
    "tweet": "RT💕) 리트윗을 해주신 분께 7월 5일에 개봉하는 <잉글랜드 이즈 마인>을 예매해드려요😍 제가 사는 지역에서 상영한다면 한 분만, 그렇지 않다면 두 분을 뽑아드리려고 합니다! <잉글랜드 이즈 마인>을 보고… https://t.co/3v9QBisDlu",
    "retweetnum": 122,
    "favoritenum": 5,
    "language": "ko",
    "user_statusid": "826839030260125696",
    "user_screenname": "E_G_Agggggggggg",
    "user_name": "🌈💀🖤",
    "user_tweetcount": 3124,
    "user_favcount": 5530,
    "user_following": 112,
    "user_follower": 35,
    "utfoffset": 0,
    "cate_keyword": "영화",
    "isAnalyzing": true
  },
  {
    "_id": "5b3c472b8418550578dd69d1",
    "creatat": "2018-07-02T04:26:14.000Z",
    "searchKeywordId":"5b3b73f08418550578dd6448",
    "searchKeyword": "#KAI",
    "statusid": "1013639962225332224",
    "tweet": "개인적으로 제일 좋아하는 날 중 하루인 가요대제전 구사즈 얼빡으로,,❣\n\n#EXO #SEHUN #KAI #세훈 #종인 @weareoneEXO https://t.co/OBT4L24DCB",
    "retweetnum": 769,
    "favoritenum": 810,
    "language": "ko",
    "user_statusid": "875491895895445504",
    "user_screenname": "Ciel_94s",
    "user_name": "CIEL",
    "user_tweetcount": 946,
    "user_favcount": 187,
    "user_following": 5,
    "user_follower": 11355,
    "utfoffset": 0,
    "cate_keyword": "가요",
    "isAnalyzing": true,
  }
]
*/

/**
@api {get} /api/suggest/tweets 3. 나를 위한 트윗 추천
@apiName GetSuggestTweets
@apiGroup 3 Suggest

@apiHeader {String} authorization Access Token
@apiHeaderExample {json} Header-Example:
{
  "authorization": "Bearer f98fAhBVT5s7dmaYEZNKDGB7AyXHyUGBrYakqQzxySjZradxEk"
}
*/

/**
@api {get} /api/suggest/users 4. 관심사 기반 유저 매칭
@apiName GetSuggestUsers
@apiGroup 3 Suggest

@apiHeader {String} authorization Access Token
@apiHeaderExample {json} Header-Example:
{
  "authorization": "Bearer f98fAhBVT5s7dmaYEZNKDGB7AyXHyUGBrYakqQzxySjZradxEk"
}

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
[
  {
    "keywords": [
      "인테리어",
      "건강",
      "시장",
      "살림",
      "미용"
    ],
    "is_analyzing": true,
    "id_str": "971641476470882304",
    "name": "정가빈",
    "screen_name": "15nBOdi4JNTVEJ1",
    "location": "",
    "description": "코딩코딩",
    "url": null,
    "followers_count": 0,
    "friends_count": 5,
    "statuses_count": 270,
    "lang": "ko",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1002200418447863809/taVpIAI6.jpg",
    "get_retweets_count": 100,
    "get_tweets_count": 100,
    "created_at": "2018-04-09T02:09:58.000Z"
  },
  {
    "keywords": [
      "컴퓨터통신",
      "TV"
    ],
    "is_analyzing": false,
    "id_str": "768768696823786",
    "name": "1209fj",
    "screen_name": "f3uhf2398jf",
    "location": "San Francisco",
    "description": "Jfjadksf fjakdsjf ajdkjs",
    "url": "https://t.co/4pFPAyszSe",
    "followers_count": 33,
    "friends_count": 222,
    "statuses_count": 12523,
    "lang": "ko",
    "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile.png",
    "get_retweets_count": 50,
    "get_tweets_count": 100,
    "created_at": "2018-04-19T07:15:43.000Z"
  }
]
*/