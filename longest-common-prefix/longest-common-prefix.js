function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ""
    let res = strs[0]
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            // console.log('strs[j][i]', strs[j][i], '----strs[i][J]', strs[i][j] , i , j)
            if (strs[j][i] !== res[i]) {
                return res.slice(0, i)
            }
        }
    }
    return res
};