var name = []

export function greet(name) {
  let result;

  switch (name()) {
    case 'Elizabeth':
      result = `Hello,${name}`;
      break;
    case name.isUpper:
      result = `Hello, ${name}`;
      break;
    case greet([a, b]):
      result = `Hello, ${a}, ${b}`;
    default:
      result = "Hello there!";
  }
}






// function greet(name){
//     const normal = (greet([name]))    
//         return `Hello,${name}`;
    
//     else if (name = null) {
//         return "Hello there!"
//     } 

//     else if (name.isUpper){
//         return `Hello, ${name}`
//     }
    
//     else if (greet([a,b])){
//         return `Hello, ${a}, ${b}`     
//     }
 
//     else if (greet([...name])){
//         return `Hello, ${[name]}`     
//     }

// };


let result = greet("Elizabeth");
console.log(result);

let result2 = greet("JOSE");
console.log(result2);

let result3 = greet(['Jose','Pep']);
console.log(result3)






