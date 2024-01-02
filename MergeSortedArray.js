// const num1=[1,2,3,0,0,0]
// const num2=[2,5,6]

// m = 3
// n = 3

// var merge = function(num1,m,num2,n){
//    let last=(m+n)-1
// while(m>0 && n>0){
//     if(num1[m-1]>num2[n-1]){
//         num1[last] = num1[m-1]
//         m-=1
//     }
//     else{
        
//         num1[last] = num2[n-1]
//         n-=1
//     }
//     last-=1
// }
// return num1
// };

// console.log(merge(num1,m,num2,n));

const num1=[1,2,3,0,0,0]
const num2=[2,5,6]

m = 3
n = 3

var merge = function(num1,m,num2,n){
    last=(m+n)-1
while(m>0 && n>0){
    if(num1[m-1]>num2[n-1]){
        num1[last] = num1[m-1]
        m-=1
    }
    else{
        
        num1[last] = num2[n-1]
        n-=1
    }
    last-=1
}
return num1
};

console.log(merge);
