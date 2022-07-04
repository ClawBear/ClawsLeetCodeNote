/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    let n = stations.length;
    let dp = new Array(n + 1).fill(0)
    dp[0] = startFuel;
    for(let i = 0; i < n; i ++){
        for(let j = i; j >= 0; j--){
            if(dp[j] >= stations[i][0]){
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1])
            }
        }
    }
    for(let k = 0; k <= n; k++){
        if(dp[k] >= target){
            return k
        }
    }
    return -1
};