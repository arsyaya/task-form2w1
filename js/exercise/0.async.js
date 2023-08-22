// synchronous
// console.log("Mulai");

// function processSynchronous() {
//   for (let i = 0; i < 5; i++) {
//     console.log("Langkah " + i);
//   }
// }

// processSynchronous();
// console.log("Selesai");

// asynchronous
console.log("Mulai");

function processAsynchronous(iterasi, callback) {
  setTimeout(function () {
    console.log("Langkah " + iterasi);
    callback();
  }, 1000);
}

function end() {
  console.log("Selesai");
}

for (let i = 0; i < 5; i++) {
  processAsynchronous(i, function () {
    if (i === 4) {
      end();
    }
  });
}
