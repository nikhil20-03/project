let n=1;

let str=" ";

for(let i=5;i<=n;i++){
    for(let j=1;j<=i-n;j++){
        //if(i==1 || i==n || j==1 || j==n){
            str+="* ";
        //}
        //else{
            str+="  ";
        //}
        
    }
    str+="\n ";
}
console.log(str);