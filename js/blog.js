// Array
// tabungan value kalian, dimana kalian bisa memiliki lebih dari satu value dalam satu variabel
// let namaSiswa = ["Bagus", "Guswandi", "Arsya"];
// console.log(namaSiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[1]);
// console.log(namaSiswa[2]);

// let nama = "Bagus";
// let alamat = "Tangerang";
// let umur = 24;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// object
// tabungan variabel kalian, dimana kalian bisa memiliki lebh dari satu key value dalam satu variabel
// contoh = nama: "Bagus", alamat: "Tangerang"
// dimana nama sebagai key dan "Bagus" sebagai value
// let dataPersonal1 = {
//   nama: "Bagus",
//   alamat: "Tangerang",
//   umur: 24,
// };

// let dataPersonal2 = {
//   nama: "Guswandi",
//   alamat: "Padang",
//   umur: 20,
// };

// let dataPersonal3 = {
//   nama: "Arsya",
//   alamat: "Karawang",
//   umur: 17,
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2.nama);
// console.log(dataPersonal3.umur);

// Array of object
// memperbolehkan kita menyimpan lebih dari satu object dalam satu variabel
// let dataPersonal = [
//   {
//     nama: "Bagus",
//     alamat: "Tangerang",
//     umur: 24,
//   },
//   {
//     nama: "Guswandi",
//     alamat: "Padang",
//     umur: 20,
//   },
//   {
//     nama: "Arsya",
//     alamat: "Karawang",
//     umur: 17,
//   },
// ];

// console.log(dataPersonal);
// console.log(dataPersonal[1]);
// console.log(dataPersonal[2].nama);

// let data = [];

// console.log(data);

// let orang = [];

// console.log(orang);

// function addData() {
//   let person = {
//     nama: "Maulana",
//     alamat: "Bandung",
//     umur: 24,
//   };

//   // fungsi push adalah memasukkan data baru di dalam sebuah array
//   // sebagai contoh,
//   data.push(person);

//   console.log(data);
// }
// addData();

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("project-name").value;
  let content = document.getElementById("desc").value;
  let image = document.getElementById("input-blog-image").files;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

  const node = '<i class="fa-brands fa-node-js fa-2x"></i>';
  const vue = '<a href="#"><i class="fa-brands fa-vuejs fa-2x"></i></a>';
  const react = '<a href="#"><i class="fa-brands fa-react fa-2x"></i></a>';
  const laravel = '<a href="#"><i class="fa-brands fa-laravel fa-2x"></i></a>';

  let nodeChecked = document.getElementById("tech1").checked ? node : "";
  let vueChecked = document.getElementById("tech2").checked ? vue : "";
  let reactChecked = document.getElementById("tech3").checked ? react : "";
  let laravelChecked = document.getElementById("tech4").checked ? laravel : "";

  image = URL.createObjectURL(image[0]);
  // startDate = new Date(startDate);
  // endDate = new Date(endDate);
  // console.log(image);

  let blog = {
    title,
    content,
    image,
    startDate,
    endDate,
    postAt: new Date(),
    author: "Arsya Rizvadwinafisa",
    nodeChecked,
    vueChecked,
    reactChecked,
    laravelChecked,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${dataBlog[index].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${dataBlog[index].title}</a
              >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author} 
            <span>Duration: ${dataBlog[index].getDistanceDate} </span>
            </div>
            <p>
            ${dataBlog[index].content}
            </p>

            <div class="blog-detail-icon">
              ${dataBlog[index].nodeChecked} 
              ${dataBlog[index].vueChecked}
              ${dataBlog[index].reactChecked}
              ${dataBlog[index].laravelChecked}

            <div style="float: right; margin: 10px;">
            <p style="font-size: 15px; color: grey;">${getDistanceTime(
              dataBlog[index].postAt
            )}</p>
          </div>
          
          </div>
        </div>
      </div>
    </div>
        `;
  }
}

function getFullTime(time) {
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = time.getDate();

  let monthIndex = time.getMonth();
  // console.log(monthIndex);
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    // 09
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceDate() {
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);
  let distance = new Date(endDate) - new Date(startDate);
  let days = Math.floor(distance / (1000 * 3600 * 24));
  let weeks = Math.floor(distance / (1000 * 3600 * 24 * 7));
  let months = Math.floor(distance / (1000 * 3600 * 24 * 30));
  let years = Math.floor(distance / (1000 * 3600 * 24 * 30 * 12));

  if (years == 1) {
    return `${years} year`;
  } else if (years > 0) {
    return `${years} years`;
  } else if (months == 1) {
    return `${months} month`;
  } else if (months > 0) {
    return `${months} months`;
  } else if (weeks == 1) {
    return `${weeks} week`;
  } else if (weeks > 0) {
    return `${weeks} weeks`;
  } else if (days == 1) {
    return `${days} day`;
  } else if (days > 0) {
    return `${days} days`;
  }
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 Detik
  let hoursInDays = 24; // 1 Hari 24 Jam

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} days ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSecond} seconds ago`;
  }
}

// setInterval(function () {
//   renderBlog();
// }, 300);
