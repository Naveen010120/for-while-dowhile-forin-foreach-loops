let num=[3,6,9,12,15,18],sum=0,i=0;
do{
    if(num[i]%2==0){
        sum+=num[i];
    }
    i++;
}while(i<=num.length);
console.log("sum of even numbers in array is:",sum);