// Step :
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implement encapsulation, use getter and settet(the key point is : encapsulation make app more secure by implementing restriction)
// - refactor the code so it implement polymorphism by making class CompanyTestimonial and override get author(the key point is : polymorphism implement and overriding)
// - refactor the code so it implement abstraction by making get testimonialHTML and get author throw error when children didn't use it

class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  // This is an abstract method that subclasses will implement
  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }

  // This is a polymorphic method than can take any subclass of Testimonial
  get testimonialHTML() {
    return `
          <div class="testimonial">
              <img src="${this.image}" class="profile-testimonial" />
              <p class="quote">
                  ${this.quote}
              </p>
              <p class="author">- ${this.author}</p>
          </div>
      `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Erick Thohir",
  "Keren anak muda yang kreatif dan berbakat",
  "asset/bumn.jpg"
);

const testimonial2 = new AuthorTestimonial(
  "Hwang Yeji",
  "나는 그의 노고에 매우 만족한다",
  "asset/yeji.jpeg"
);

const testimonial3 = new AuthorTestimonial(
  "Maul",
  "Wuhu keren cuy!",
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

const testimonial4 = new AuthorTestimonial(
  "Tom Cruise",
  "His dedicated and responsif so well everything awesome!",
  "asset/tom.jpg"
);

let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
