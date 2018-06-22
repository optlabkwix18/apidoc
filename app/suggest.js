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
    "user": {
      "id_str": "62755629",
      "name": "YOUNHA",
      "screen_name": "younhaholic"
    },
    "keyword": "음식",
    "created_at": "2018-03-21T15:14:25.000Z",
    "id_str": "976477134641246208",
    "text": "던킨이스말랍 #먹윤 #먹짤 #시청해주셔서감사합니다 https://t.co/tmQFG50IwN",
    "retweet_count": 45,
    "favorite_count": 108,
    "lang": "ko"
  },
  {
    "user": {
      "id_str": "1115674652",
      "name": "XSFM",
      "screen_name": "XSFM25"
    },
    "keyword": "정치",
    "created_at": "2018-06-07T05:24:53.000Z",
    "id_str": "1004595028679770112",
    "text": "성공적으로, 부종학생회장, Justice League, 메롱- 난 구청장할거다, 과식투쟁, 요식업, 신체검사박물관, 사람이 살 곳...",
    "retweet_count": 3,
    "favorite_count": 2,
    "lang": "ko"
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