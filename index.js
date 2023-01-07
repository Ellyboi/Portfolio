const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function closeNav() {
  navMenu.classList.toggle('invisible');
  hamburger.classList.toggle('active');
}

navMenu.addEventListener('click', closeNav);



const projects = [
  {
    id: 1, 
    title: 'Profesional Art Printing Data 1',
    modalTitle: 'Keeping track of hundreds of components website 1',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },

  {
    id: 2, 
    title: 'Profesional Art Printing Data 2',
    modalTitle: 'Keeping track of hundreds of components website 2',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },

  {
    id: 3, 
    title: 'Profesional Art Printing Data 3',
    modalTitle: 'Keeping track of hundreds of components website 3',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },

  {
    id: 4, 
    title: 'Profesional Art Printing Data 4',
    modalTitle: 'Keeping track of hundreds of components website 4',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },

  {
    id: 5, 
    title: 'Profesional Art Printing Data 5',
    modalTitle: 'Keeping track of hundreds of components website 5',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },

  {
    id: 6, 
    title: 'Profesional Art Printing Data 6',
    modalTitle: 'Keeping track of hundreds of components website 6',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the in    dustrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://ellyboi.github.io',
    LinkToSource: 'https://github.com/Ellyboi',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
];

// Get the modal element
const modal = document.getElementById('myModal');

// When the user clicks on (x), close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// When the user clicks the button, open the modal
function openModal() {
  const modal = document.getElementById('myModal');
  const projectDetail = projects[projects.length - 1];
  const header = document.createTextNode('Keeping track of hundreds of components website');
  const title = modal.childNodes[3].childNodes[3].childNodes[1];
  title.removeChild(modal.childNodes[3].childNodes[3].childNodes[1].childNodes[0]);
  modal.childNodes[3].childNodes[3].childNodes[1].appendChild(header);
  document.getElementById('myModal').style.display = 'block';
}

const checkLowerCase = (str) => {
  if (str === str.toLowerCase()) {
    return true;
  }
  return false;
};

function validateForm(e) {
  e.preventDefault();
  const email = document.getElementById('form_input2').value;
  const formObj = {
    fistName: document.getElementById('form_input1').value,
    email,
    LastName: document.getElementById('form_input3').value,
    email,
    message: document.getElementById('message').value,
  };

  const islowercase = checkLowerCase(email);
  const form = document.getElementById('form');
  if (islowercase) {
    form.action = 'https://formspree.io/f/myyvrjyj';
    form.submit();
    localStorage.setItem('formObj', JSON.stringify(formObj));
  } else {
    document.getElementById('validation_error_msg').innerHTML = 'Your email address should be in lowercase';
  }
}

// Validation form
document.getElementsByClassName('form').addEventListener('submit', validateForm);


const loadProjects = () => {
  const container = document.getElementById('showcase-boxes');
  for (let i = 0; i < projects.length; i += 1) {
    // Creating the divs
    const otherWorksItemDiv = document.createElement('div');
    const hoverActionDiv = document.createElement('div');
    const rightBlockBiv = document.createElement('div');
    const heading = document.createElement('h2');
    const paragraph = document.createElement('p');
    const actionDiv = document.createElement('div');
    const button = document.createElement('button');
    const list = document.createElement('ul');
    const buttonSpan = document.createElement('span');
    const listItems = [];

    // Creating text nodes
    const h2Text = document.createTextNode(projects[i].title);
    const pText = document.createTextNode(projects[i].description);
    const html1Text = document.createTextNode(projects[i].projectSkills[0]);
    const boostrap1Text = document.createTextNode(projects[i].projectSkills[1]);
    const ruby1Text = document.createTextNode(projects[i].projectSkills[2]);
    const buttonText = document.createTextNode('See Project');

    // Adding the classes
    otherWorksItemDiv.classList.add('boxQ, other_works_item');
    hoverActionDiv.classList.add('hover_action');
    rightBlockDiv.classList.add('boxQ');
    actionDiv.classList.add('action');
    button.classList.add('see_project_action_btn');
    list.classList.add('tags1');
    buttonSpan.classList.add('btn_text');

    // Appending the n+1 child to each div
    heading.appendChild(h2Text);
    paragraph.appendChild(pText);
    // Loop through projecSkills to add text to list items
    for (let j = 0; j < projects[i].projectSkills.length; j += 1) {
      const listItem = document.createElement('li');
      listItem.classList.add('tag', 'html1');
      const span = document.createElement('span');
      const text = document.createTextNode(projects[i].projectSkills[j]);
      span.appendChild(text);
      listItem.appendChild(span);
      listItems.push(listItem);
    }
    for (let j = 0; j < listItems.length; j += 1) {
      list.appendChild(listItems[j]);
    }
    otherWorksItemDiv.appendChild(hoverActionDiv);
    otherWorksItemDiv.appendChild(actionDiv);
    button.appendChild(buttonSpan);
    actionDiv.appendChild(button);
    buttonSpan.appendChild(buttonText);
    hoverActionDiv.appendChild(rightBlockBiv);
    rightBlockDiv.appendChild(heading);
    rightBlockDiv.appendChild(paragraph);
    rightBlockDiv.appendChild(list);

    button.addEventListener('click',
      () => {
        const modal = document.getElementById('myModal');
        const header = document.createTextNode(projects[i].modalTitle);
        const title = modal.childNodes[3].childNodes[3].childNodes[1];
        title.removeChild(modal.childNodes[3].childNodes[3].childNodes[1].childNodes[0]);
        modal.childNodes[3].childNodes[3].childNodes[1].appendChild(header);
        document.getElementById('myModal').style.display = 'block';
      });

    container.appendChild(otherWorksItemDiv);
  }
};

window.onload = function () {
  // loading projects in work section
  loadProjects();
}
