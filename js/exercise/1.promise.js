//promises
// const isVip = true;

// const checkingVip = new Promise((resolve, reject) => {
//   if (isVip) {
//     resolve("Member is vip");
//   } else {
//     reject("Sorry, member is not vip");
//   }
// });

// checkingVip
//   .then((response) => console.log("Yes, " + response))
//   .catch((response) => console.log("N0, " + response));

//implementasi jika menangkap dan memproses resolve & reject
// const isVip = true;

// const checkingVip = new Promise((resolve, reject) => {
//   if (isVip) {
//     setTimeout(() => {
//       resolve("Member is vip");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Sorry, member is not vip");
//     }, 2000);
//   }
// });

// console.log("Start");

// // check proses async
// console.log(checkingVip.then((response) => console.log(response)));

// // check proses async
// checkingVip
//   .then((response) => console.log("Yes, " + response))
//   .catch((response) => console.log("N0, " + response));

// console.log("End");

// menerapkan konsep finally
// const isVip = true;

// const checkingVip = new Promise((resolve, reject) => {
//   if (isVip) {
//     setTimeout(() => {
//       resolve("Member is vip");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Sorry, member is not vip");
//     }, 2000);
//   }
// });

// console.log("start");

// // check proses async
// console.log(checkingVip.then((response) => console.log(response)));

// // check proses async
// checkingVip
//   .finally(() => console.log("Finished"))
//   .then((response) => console.log("Yes, " + response))
//   .catch((response) => console.log("N0, " + response));

// console.log("End");

// jika ingin menggunakan banyakpromise
// menggunakan Promise.all()
// const member = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 1,
//         name: "Arsya",
//         isMember: true,
//       },
//     ]);
//   }, 2000);
// });

// const product = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 1,
//         name: "Gayo Beans",
//         price: 1000,
//       },
//     ]);
//   }, 1000);
// });

// Promise.all([member, product]).then((response) => console.log(response));

// implementasi Async await
// function member() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Finished");
//     }, 2000);
//   });
// }

// async function testingAsync() {
//   const runPromise = await member();
//   console.log(runPromise);
// }

// testingAsync();

// implementasi dari Async await dengan try catch
function member() {
  return new Promise((resolve, reject) => {
    const time = 1000;
    if (time < 5000) {
      setTimeout(() => {
        resolve("Finished");
      }, time);
    } else {
      reject("Time's up");
    }
  });
}

async function testingAsync() {
  try {
    const runPromise = await member();
    console.log(runPromise);
  } catch (err) {
    console.log(err);
  }
}

testingAsync();
