export default function (strA, strB) {
    let i = strA.length - 1;
    let j = strB.length - 1;
    let carry = 0; // 表示进位
    let ret = '';
    while(i>=0 || j>=0) {
        let x = 0, // 表示A[i]和B[i]表示的数值大小
            y = 0;
        let sum;
        if (i>=0) {
            x = strA[i] - '0'; //转换成数字
            i--;
        }
        if (j>=0) {
            y = strB[j] - '0';
            j--;
        }
        sum = x + y + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        ret = ret + sum;
    }
    if (carry > 0) {
        ret = carry + ret;
    }
    return ret;
}
