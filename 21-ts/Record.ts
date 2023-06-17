/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:34:13
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:41:59
 * @FilePath: /typescript/第二天/Record.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//Record 接收两个参数,K 和 T。K 表示键的类型,T 表示值的类型
//其属性和值的类型都是预设好的
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats)

