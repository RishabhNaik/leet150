
var maxProfit = function(prices) {
    let l=0,r=1;
    let maxP=0;
    while(r<prices.length ){
        if(prices[l]<prices[r]){
            profit= prices[r]-prices[l];
            maxP=Math.max(maxP,profit);
        }
        else{
            l=r;
        }
        r+=1;
    }
    return maxP;
};

console.log(maxProfit([7,1,5,3,6,4]))