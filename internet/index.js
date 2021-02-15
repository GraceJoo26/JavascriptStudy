/* function print() {
let list = document.querySelectorAll("li");
let listArray = Array.from(list);
let resultArray = listArray.filter(function(v){
    return v.innerText.includes('e');
});
console.log(resultArray.length);
}
print(); */

function print() {
 
    let list = document.querySelectorAll("li")
    let listArray = Array.from(list)
    //let result = listArray.filter(fruit => fruit.includes('e'))
    let resultArray = listArray.filter(function(v) {
      return v.innerText.includes("e") //도메인에서 뽑아내는 innerText
    });
    console.log(resultArray);
    
  }
  print();