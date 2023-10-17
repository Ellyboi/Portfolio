// Full page navigation menu
const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('overflow-disabled');
});

const navLinks = document.getElementsByClassName('link');

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled');
  });
}
// Full page navigation menu

// Dynamic works section
// objects
const worksArray = [
  {
    portfolio_image: 'assets/calculator.png',
    portfolio_title: 'Math Magicians',
    portfolio_description:
      'Math Magicians is an engaging web application project that enables users to perform basic calculations while injecting a touch of humor into their experience. This interactive platform is constructed using the React framework, offering a seamless and user-friendly interface for mathematical operations combined with random, amusing quotes to keep users entertained and engaged.',
    tech_tag1: 'React',
    tech_tag2: 'redux',
    tech_tag3: 'JavaScript',
    tech_tag4: 'html & css',
    button_text: 'See Project',
    // modal data
    live_link: 'https://math-magicians-wpnn.onrender.com/Home',
    github_source: 'https://github.com/Ellyboi/Math-Magicians',
  },
  {
    portfolio_image: 'assets/capstone5.png',
    portfolio_title: 'Vecs-School',
    portfolio_description:
      'The online course reservation and school booking platform is a powerful system that simplifies the process of booking courses for users. It offers a user-friendly interface where individuals can specify their city of interest and preferred dates for course bookings. The platform is built on a robust backend server that communicates seamlessly with frontend applications, ensuring a smooth and efficient user experience.',
    tech_tag1: 'Ruby',
    tech_tag2: 'React',
    tech_tag3: 'PostgreSQL',
    tech_tag4: 'Bootstrap',
    button_text: 'See Project',
    // modal data
    live_link: 'https://vecs-school.onrender.com',
    github_source: 'https://github.com/Ellyboi/vecs-school-backend',
  },
  {
    portfolio_image: 'assets/reactcapstone.png',
    portfolio_title: 'Country Details App',
    portfolio_description:
      'The "Country Details App" is a web application that empowers users to filter and access comprehensive information about countries, including the count of their borders. In a nutshell, its main functionalities encompass showcasing a list of countries and presenting in-depth details about individual countries.',
    tech_tag1: 'React',
    tech_tag2: 'Redux',
    tech_tag3: 'Redux-Thunk',
    tech_tag4: 'CSS',
    button_text: 'See Project',
    // modal data
    live_link: 'https://metricwebapp-h041.onrender.com/',
    github_source: 'https://github.com/Ellyboi/react-capstone-project',
  },
  {
    portfolio_image: 'assets/bookstore.png',
    portfolio_title: 'Bookstore',
    portfolio_description:
      'This project is a feature-rich web application that provides users with the ability to seamlessly manage their book collection. Developed using the React framework and enhanced with Redux as the state management tool, it offers a comprehensive set of functionalities for adding, displaying, and removing selected books from the users collection. This ensures a smooth and efficient experience for users looking to organize and interact with their favorite books within the application.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'JavaScript',
    tech_tag4: 'Webpack',
    button_text: 'See Project',
    // modal data
    live_link: 'https://bookstore-3fl6.onrender.com/',
    github_source: 'https://github.com/Ellyboi/bookstore',
  },
  {
    portfolio_image: 'assets/leaderboard.png',
    portfolio_title: 'Leaderboard',
    portfolio_description:
      '"Leaderboard" is a dynamic project designed to facilitate user engagement by enabling them to submit their scores and view them on the games leaderboard. Crafted using a combination of essential web technologies, including HTML, CSS, JavaScript, and API integration, this project harnesses the power of Webpack for seamless bundling and deployment. Furthermore, it adheres to efficient version control practices through Gitflow, ensuring collaborative development and streamlined code management.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'JavaScript',
    tech_tag4: 'Webpack',
    button_text: 'See Project',
    // modal data
    live_link: 'https://leaderboard-wp2o.onrender.com/',
    github_source: 'https://github.com/Ellyboi/leaderboard',
  },
];

// dynamic content function
const portfolioContainer = document.getElementById('portfolio-works');
for (let i = 0; i < worksArray.length; i += 1) {
  portfolioContainer.innerHTML += ` <article class="portfolio-post work1">
 <div class="portfolio-image-container">    <img class="portfolio-work-image portfolio-img" src="${
  worksArray[i].portfolio_image
}" alt="work section project image" />
 </div>
 <div class="portfolio-description-section">
    <div class="portfolio-header">
      <h3 class="portfolio-title">${worksArray[i].portfolio_title}</h3>
   </div>
    <p class="descriptive-text">${worksArray[i].portfolio_description}</p>
    <div class="portfolio-tags">
      <ul>
       <li>
       <p class="tech-tag1">${worksArray[i].tech_tag1}</p>
        </li>
        <li>
         <p class="tech-tag2">${worksArray[i].tech_tag2}</p>
       </li>
       <li>
        <p class="tech-tag3">${worksArray[i].tech_tag3}</p>
        </li>
      <li>
        <p class="tech-tag4">${worksArray[i].tech_tag4}</p>
      </li>     </ul>
    </div>
    <button type="button" id="${[i]}"class="see-project-btn btn-1">
      ${worksArray[i].button_text}
    </button>
  </div>
</article>`;
}

// creating dynamic modal
const projectButtons = document.querySelectorAll('.see-project-btn');
projectButtons.forEach((element) => {
  element.addEventListener('click', () => {
    const dialogBox = document.createElement('dialog');
    dialogBox.classList.add('modal');
    dialogBox.innerHTML = `
   <article class="portfolio-post modal1">
     <h3 class="modal-header">
${worksArray[element.id].portfolio_title}
     </h3>
     <img src="assets/cancelicon.svg" class="modal-close">

     <img class="modal-image" src="${
  worksArray[element.id].portfolio_image
}" alt="" />

     <p class="modal-text">
     ${worksArray[element.id].portfolio_description}
     </p>
     <ul class="modal-tags">
       <li>
         <p class="modal-tech-tag-1 modal-long-desc">
         ${worksArray[element.id].tech_tag1}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-2 modal-long-desc">
         ${worksArray[element.id].tech_tag2}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-3 modal-long-desc">
         ${worksArray[element.id].tech_tag3}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-3 modal-long-desc">
         ${worksArray[element.id].tech_tag4}
         </p>
       </li>
     </ul>
     <div class="modal-button-container">
       <a href="${worksArray[element.id].live_link}" target="_blank">
         See Live
         <img src="assets/arrow-right-solid.svg" alt="" />
       </a>
       <a href="${worksArray[element.id].github_source}" target="_blank">
         See Source
         <img src="assets/github.svg" alt="" />
       </a>
       </div>
   </article>
   `;

    document.body.appendChild(dialogBox);
    dialogBox.showModal();
    // modal close with cancel icon
    const modelCloseButtons = document.querySelectorAll('.modal-close');
    modelCloseButtons.forEach((el) => {
      el.addEventListener('click', () => {
        dialogBox.close();
      });
    });
  });
});

// modal close when clicking outside of the modal
window.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIALOG') {
    e.target.close();
  }
});

// form validation
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const warningMessage = document.getElementById('warning-message');
const mailRegExp = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

form.addEventListener('submit', (event) => {
  if (!mailRegExp.test(email.value)) {
    event.preventDefault();
    warningMessage.style.visibility = 'visible';
    warningMessage.innerHTML = 'Email must include only small letter';
    warningMessage.style.color = 'tomato';
    setTimeout(() => {
      warningMessage.style.visibility = 'hidden';
    }, 5000);
  } else {
    warningMessage.style.visibility = 'hidden';
  }
});

// Local storage
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('msg');

function populateStorage() {
  // create visitor object
  const visitor = {
    userName: nameInput.value,
    userEmail: emailInput.value,
    userMessage: messageInput.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

// Trigger for populating local storage
nameInput.addEventListener('input', populateStorage);
emailInput.addEventListener('input', populateStorage);
messageInput.addEventListener('input', populateStorage);
// Parse data from local storage
const userDataObject = JSON.parse(localStorage.getItem('visitor'));

// Refilling form inputs
if (userDataObject) {
  nameInput.value = userDataObject.userName;
  emailInput.value = userDataObject.userEmail;
  messageInput.value = userDataObject.userMessage;
}
