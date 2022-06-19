//question 1
var arr = [[1,2,3],[4,5,6],7,8,9,[[10,11,12,[13,4,112]],136,14],];
console.log(arr[5][0][0],arr[3],arr[5][0][3][0],arr[5][1],arr[1][0]);
//question 2
//question 3
var chargen = 'generalization';
var myData = chargen.slice(3);
console.log(myData);
//question 4
 var fruits = ['orange','apple','guava','lemon'];
 fruits = fruits.concat(['pea','banana']);
 console.log(fruits);
 fruits = fruits.concat(['avocado', 'mango']);
 console.log(fruits);
//question 5
    var arr = [];
    var count;
    function writeNum(){
        for(count = 1; count < 101; count++){
            if(count % 3 === 0){
                arr.push('fizz');
            }
                if(count % 5 === 0){
                    arr.push('buzz');
                    
                }
                if(count % 3 === 0 && count % 5 === 0){
                    arr.push('fizzbuzz');
                    
                }
            arr.push(count);
            console.log(arr);
            }
            
    }
    writeNum();
    
   

    