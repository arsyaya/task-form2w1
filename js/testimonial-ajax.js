const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://www.npoint.io/docs/0c8c88d5267dcfc69113", true);

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
