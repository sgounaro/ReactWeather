// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadephia', function (err,tmp){
//   if (err) {
//     console.log("error", err);
//   } else {
//      console.log('success', tmp);
//   }
// });
// function getTempPromise (location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function() {
//       resolve(79);
//       reject('City Not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise sucess', temp);
// }, function(err){
//   'promise error', err});

function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
     if ((typeof a === 'number') && (typeof b == 'number')){
        resolve(a+b);
     }else {
       reject('These are not numbers');
     }
  });
}

var resfun = function(result){
  console.log(result);
}

addPromise("3",2).then(resfun,resfun);
