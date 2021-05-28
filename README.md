

/**
 * 1.
 * +++ 写一个方法, 接受一个字符串，
 * 处理该字符串，
 * 将相同的字符集合在一起，
 * 然后返回新字符，
 * 先出现的字符集合应该排在前面
 * 如下这个例子：
 * 接受到：ddaeddceddbebca
 * 返回：  ddddddaaeeeccbb
 * @param {string} text
 * @returns {string}
 */
export function assembleChars(text) {
  let arr=text&&text.split('')||[];
    let newArr=[];
    arr.forEach(item=>{
        if(!newArr.includes(item)){
            newArr.push(...arr.filter(v=>v===item))
        }
    })
    return newArr&&newArr.join('')||'';
}



/**
 * 2.
 * +++ 写一个方法，
 * 接受一个下滑线分割的字符串，
 * 将其变成驼峰方式的字符串返回。
 * 如下这个例子：
 * 接受到：to_be_or_not_to_be 
 * 返回： toBeOrNotToBe
 * @param {string} text
 * @returns {string}
 */
export function lodashJoinToCamelCase(text) {
  return text.replace(/\_[a-z]{1}/g,$2=>{
        return $2.substr(-1).toLocaleUpperCase()
    })
}




/**
 * 3.
 * +++ 写一个方法，
 * 接受一个n*n整数二维数组(正方形矩阵)
 * 
 * 算出位于其对角线上所有整数之和，
 * 返回这个和
 * 
 * 不能更改传入的数组。
 * @param {number[][]} matrix
 * @returns {number}
 */
export function getSumOfNumbersOnSquareMatrixDiagonal(matrix) {
  let len=matrix.length;
    let sumArr=matrix.reduce((sum,item,index)=>{
        sum+=(item[index]+item[len-(index+1)]);
        return sum;
    },0)
    return sumArr;
}


/**
 * @typedef {Object} ICharCountItem
 * @property {string} char 字符
 * @property {number} count 该字符出现的次数
 * @property {percent} string 该数字占的百分比，字符串形式
 */

/**
 * 4.
 * +++ 写一个方法，接受一个字符串；
 * 统计该字符串中各个字符出现的次数和概率，
 * 得到一个数组作为统计结果，返回该结果
 * 要求结果数组按字符出现次数
 * 从小到大的方式排好序
 * 数组中的每一项数据结构如下：
 * ```
 * {
 *    char: 'a',  // 是哪个字符
 *    count: 5，// 该字符出现的次数
 *    percent: '25%' 该数字占的百分比，字符串形式
 * }
 * ```
 * @param {string} text
 * @returns {ICharCountItem[]}
 */
export function countCharactors(text) {
  let arr=text&&text.split('')||[];
    let newArr=arr.reduce((arr1,item)=>{
        let findIndex=arr1.findIndex(v=>v.char===item);
        if(findIndex>-1){
            arr1[findIndex].count=arr1[findIndex].count+1;
        }else{
            arr1.push({char:item,count:1,percent:0})
        }
        return arr1;
    },[]);
    return newArr.map(item=>{
        item.percent=((item.count/arr.length)*100)+'%';
        return item;
    })
}



/**
 * 5.
 * +++ 我们知道：Excel表格的列是使用
 * A-Z的字母来表示列号的
 * 
 * 写一个方法，
 * 接受一个字符串形式的Excel列号，
 * 计算出该列号代表第几列，
 * 并将结果返回。
 * 
 * 比如A是第一列，所以方法接受A 输出1
 * B是第二列，方法接受B，输出2
 * Z是第26列，方法接受Z 输出26
 * AA是第27列，方法接受AA 输出27
 * 某某字符串是第n列，方法接受该字符串 应该输出n，这个n
 * 就是要找到一个方法传入任意一串字母，然后计算出这个n
 * @param {string} text
 * @returns {number}
 */
export function convertExcelColumnCodeToNumber(text) {
  let uid =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let arr=text&&text.split('')||[];
    let sum=0;
    arr.forEach((item,index)=>{
        if(index>0){
            sum+=(26+uid.indexOf(item))
        }else if(index===0){
            sum=uid.indexOf(item)+1;
        }
    });
    return sum;
}


/**
 * @typedef {object} ITree
 * @property {string} name
 * @property {ITree[]} children
 */

/**
 * 6.
 * +++ 有这样一个树形数据结构，
 * 根节点是一个对象，
 * 其中有一个属性name
 * 可能还有一个children属性，
 * 里面又包含同样的结构。
 * 层层递进，如果递进到某层没有
 * 这个children属性，
 * 或者children中个数为0，
 * 则说明到了叶子节点。
 * 
 * 可能根节点本身就是一个叶子
 * 
 * 写一个方法，
 * 接受一个这样的树形数据结果，
 * 收集出所有叶子节点的名字
 * 放到数组中, 返回该数组。
 * interface ITree {
 *  name: string,
 *  children: ITree[];
 * }
 * @param {ITree}
 * @returns {string[]}
 */
export function getAllLeafNames(tree) {
  let newTree=Array.isArray(tree)?tree:[tree];
    let leafNames=[];
    function getLeaf(tree){
        tree.forEach(item=>{
            if(!item.children||!item.children.length){
                leafNames.push(item.name)
            }else{
                leafNames.concat(getLeaf(item.children))
            }
        });
        return leafNames;
    }
    return getLeaf(newTree);
}


