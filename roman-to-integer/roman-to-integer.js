function romanToInt(s: string): number {
    const dataSet = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (dataSet[s[i]] < dataSet[s[i + 1]]) {
            res -= dataSet[s[i]]
        }
        else{
            res += dataSet[s[i]]
        }
    }
    res += dataSet[s[s.length - 1]]
    return res
};