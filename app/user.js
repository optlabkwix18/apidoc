/**
 * @api {get} /user/:id 회원가입에 필요한 ID이다.
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} id Users unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "정가빈안녕"
 *     }
 *
 * @apiError UserNotFound User ID를 찾을 수 없습니다.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
