/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:05:33
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:13:50
 * @FilePath: /typescript/第二天/05.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Cat = { breed: string; yearOfBirth: number };

export type Dog = { breeds: string[]; yearOfBirth: number };


export const createCatName = () => "fluffy";
