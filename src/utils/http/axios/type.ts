// 返回res.data的interface
export interface IResponse {
  code: number | string
  result: any
  message: string
  status: string | number
}

/**用户登录 */
export interface ILogin {
  /** 账户名称 */
  username: string
  /** 账户密码 */
  password: string
}
