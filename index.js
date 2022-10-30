// function filter_list(l) {
//     let numbersOnly = []
//    for (let i = 0; i < l.length; i++){
//      if (Number.isInteger(l[i]) == true){
//        numbersOnly.push(l[i])
//       }
//      }
//    return numbersOnly
// }

function filter_list(l) {
    return l.filter(Number.isInteger);
}