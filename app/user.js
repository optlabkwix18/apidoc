/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
  * @api {post} /user Request User Create
  * @apiName PostUser
  * @apiGroup User
  *
  * @apiParam {String} email user email
  * @apiParam {String} firstname firstname
  * @apiParam {String} lastname lastname
  *
  * @apiSuccess {String} id user의 고유번호
  * @apiSuccess {String} email 유저의 이메일
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {,
  *       "id": "23194",
  *       "email": "ooee@gmail.com"
  *     }
  *
  * @apiError UserNotCreated 회원가입 실패했을 때
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "error": "UserNotCreated"
  *     }
  */
