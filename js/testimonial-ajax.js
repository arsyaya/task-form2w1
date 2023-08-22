const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/0c8c88d5267dcfc69113", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data");
    }
  };

  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});

async function showTestimonial() {
  try {
    const response = await testimonial;
    console.log(response);

    let testimonialForHTML = "";

    response.forEach((item) => {
      testimonialForHTML += `<div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialForHTML;
  } catch (err) {
    console.log(err);
  }
}
showTestimonial();

async function filterTestimonials(rating) {
  try {
    const response = await testimonial;
    let testimonialForHTML = "";

    const dataFiltered = response.filter(function (data) {
      return data.rating === rating;
    });

    if (dataFiltered.length === 0) {
      testimonialForHTML = `<h3>Data not found!</h3>`;
    } else {
      dataFiltered.forEach((data) => {
        testimonialForHTML += `<div class="testimonial">
                <img src="${data.image}" class="profile-testimonial" />
                <p class="quote">${data.quote}</p>
                <p class="author">- ${data.author}</p>
                <p class="author">${data.rating}<i class="fa-solid fa-star"></i></p>
            </div>`;
      });
    }

    document.getElementById("testimonials").innerHTML = testimonialForHTML;
  } catch (err) {
    console.log(err);
  }
}
