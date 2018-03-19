/**
 * @api {get} /post/:id 이것은 포스트를 읽는 API이다.
 * @apiName GetPost
 * @apiGroup Post
 *
 * @apiParam {Integer} id Posts unique ID.
 *
 * @apiSuccess {String} title 글의 제목이고
 * @apiSuccess {String} content 글의 내용이다
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "title": "아 정가빈 누워서 잔다",
 *       "content": "Lorem Ipsum Lorem Ipsum"
 *     }
 *
 * @apiError PostNotFound 아이디 값에 해당하는 포스트가 없습니다.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PostNotFound"
 *     }
 */

 /**
  * @api {post} /post 이것은 포스트를 작성하는 API이다.
  * @apiName PostPost
  * @apiGroup Post
  *
  * @apiParam {String} title 글의제목.
  * @apiParam {String} content 글의내용.
  *
  * @apiSuccess {Integer} id 쓴 글의 아이디
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "id": 486
  *     }
  *
  * @apiError PostNotCreated 글 작성에 실패했을 때
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "error": "PostNotCreated"
  *     }
  */
