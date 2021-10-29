console.clear();
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

var vArr = [1,2,3,4,5,6,7,0,-2,-3,-8];
     var sumval =9;
     var resultVal = []
     for (var i=0;i<vArr.length;i++){
     for(var j=0;j<vArr.length;j++){
     if( vArr[i]+vArr[j]===sumval){
         resultVal.push([vArr[i],vArr[j]])
     }
     }
     }
     console.log(resultVal)

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

    var names = "hello";
    var reversedArray =[]
    var splitString = names.split("")
    for(var i = splitString.length-1  ; i >=0 ; i--){
    reversedArray.push(splitString[i])
    }
    var reverse =reversedArray.join("")
    console.log(reverse)

// Q3. Write a program to check if two strings are a rotation of each other?
 function areRotations( str1,  str2){
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    } 
        var str1 = "AACD";
        var str2 = "ACDA";
 
        if (areRotations(str1, str2))
            console.log("Strings are rotations of each other");
        else
            console.log("Strings are not rotations of each other");
areRotations(str1,str2)

// Q4. Write a program to print the first non-repeated character from a string?
  
function firstNonRepeating(str){
    var fi=new Array(256);
      fi.fill(-1);
     for(var i = 0; i<256; i++)
        fi[i] = -1;
    for(var i = 0; i<str.length; i++){
        if(fi[str.charCodeAt(i)] ==-1){
            fi[str.charCodeAt(i)] = i;           
        } else{
            fi[str.charCodeAt(i)] = -2;
        }
    } 
    var res = Infinity;
 
    for(var i = 0; i<256; i++) {
        if(fi[i] >= 0)
            res = Math.min(res, fi[i]);
    }
    if(res == Infinity) return -1;
    else return res;
}
 
var str;
    str = "geeksforgeeks";
    var firstIndex = firstNonRepeating(str);
    if (firstIndex === -1)
        console.log("Either all characters are repeating or string is empty");
    else
        console.log("First non-repeating character is "+ str.charAt(firstIndex));
     
// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod){
        if (n == 1){
 console.log("Move disk 1 from rod " + from_rod +
            " to rod " + to_rod);
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
     var n = 4; // Number of disks
    towerOfHanoi(n, 'A', 'C', 'B');

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

 function isOperator(x){
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
function postToPre(post_exp){
        let s = [];
          let length = post_exp.length;
          for (let i = 0; i < length; i++) {
              if (isOperator(post_exp[i])) {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
                  let temp = post_exp[i] + op2 + op1;
                  s.push(temp);
            }else {
                  s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "ABC/-AK/L-*";
        
    // Function call
    console.log("Prefix : " + postToPre(post_exp));

// Q7. Write a program to convert prefix expression to infix expression.
     
 function isOperator(x)
    {
        switch(x) {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
        }
        return false;
    }
     function convert(str){
        let stack = [];
         let l = str.length;
         for(let i = l - 1; i >= 0; i--){
            let c = str[i];
           if (isOperator(c)){
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
                 let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }else{
            stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    console.log("Infix : " + convert(exp));

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr){
    let stack = [];
     for(let i = 0; i < expr.length; i++){
        let x = expr[i];
 if (x == '(' || x == '[' || x == '{'){
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;            
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");

// Q9. Write a program to reverse a stack.
let st = [];

function insert_at_bottom(x){
    if(st.length==0)
        st.push(x);
    else {
            let a = st.pop();
            insert_at_bottom(x);
            st.push(a);
    }    
}

st.push('1');
st.push('2');
st.push('3');
st.push('4');
console.log("Original Stack<br>"); 
console.log(st.join(" ")+"<br>");

console.log("Reversed Stack<br> ");

console.log(st.reverse().join(" "));

// Q10. Write a program to find the smallest number using a stack.
numbers = [2, 4, 9, 2, 1, 16, 24]

var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
   if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
  console.log(smallest);
