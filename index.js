/* eslint-disable no-unused-vars */
const toggleMenu = () => {
  const menu = document.getElementById('menuIcon');
  const header = document.getElementById('nav_');
  const closeButton = document.getElementById('close_btn');
  const toggleBars = document.getElementById('menu_hamburger');

  if (!(menu.classList.contains('mobile_menu'))) {
    closeButton.classList.add('show');
    toggleBars.classList.add('hide');
    menu.classList.add('mobile_menu');
    header.classList.add('mobile_header');
    menu.classList.remove('menu');
  } else {
    closeButton.classList.remove('show');
    toggleBars.classList.remove('hide');
    menu.classList.remove('mobile_menu');
    header.classList.remove('mobile_header');
    menu.classList.add('menu');
  }
};

const hideMenu = () => {
  document.getElementById('close_btn').classList.remove('show');
  document.getElementById('menu_hamburger').classList.remove('hide');
  document.getElementById('menuIcon').classList.remove('mobile_menu');
  document.getElementById('nav_').classList.remove('mobile_header');
  document.getElementById('menuIcon').classList.add('menu');
};

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
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standards',
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
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
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
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
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
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
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
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data 6',
    modalTitle: 'Keeping track of hundreds of components website 7',
    modalImage: 'img/snapshoot_Portfolio.png',
    modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
];

// Get the modal
const modal = document.getElementById('myModal');

// When the user clicks on (x), close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// When the user clicks the button, open the modal
function openModal() {
  const modal = document.getElementById('myModal');
  const projectDetail = projects[projects.length - 1];
  const header = document.createTextNode('Multi-Post Stories');
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
    name: document.getElementById('form_input1').value,
    email,
    message: document.getElementById('form_input3').value,
  };
  const islowercase = checkLowerCase(email);
  const form = document.getElementById('contact_form');
  if (islowercase) {
    form.action = 'https://formspree.io/f/myyvrjpe';
    form.submit();
    localStorage.setItem('formObj', JSON.stringify(formObj));
  } else {
    document.getElementById('validation_error_msg').innerHTML = 'Your email address should be in lowercase';
  }
}

const loadProjects = () => {
  const container = document.getElementById('other_works');
  for (let i = 0; i < projects.length; i += 1) {
    // Creating the divs
    const otherWorksItemDiv = document.createElement('div');
    const hoverActionDiv = document.createElement('div');
    const rightBlockBiv = document.createElement('div');
    const heading = document.createElement('h3');
    const paragraph = document.createElement('p');
    const actionDiv = document.createElement('div');
    const button = document.createElement('button');
    const list = document.createElement('ul');
    const buttonSpan = document.createElement('span');
    const listItems = [];

    // Creating text nodes
    const h3Text = document.createTextNode(projects[i].title);
    const pText = document.createTextNode(projects[i].description);
    const htmlText = document.createTextNode(projects[i].projectSkills[0]);
    const boostrapText = document.createTextNode(projects[i].projectSkills[1]);
    const rubyText = document.createTextNode(projects[i].projectSkills[2]);
    const buttonText = document.createTextNode('See Project');

    // Adding the classes
    otherWorksItemDiv.classList.add('other_works_item1', 'other_works_item');
    hoverActionDiv.classList.add('hover_action');
    rightBlockBiv.classList.add('right_block');
    actionDiv.classList.add('action');
    button.classList.add('see_project_action_btn');
    list.classList.add('projects_stack');
    buttonSpan.classList.add('btn_text');

    // Appending the n+1 child to each div
    heading.appendChild(h3Text);
    paragraph.appendChild(pText);
    // Loop through projecSkills to add text to list items
    for (let j = 0; j < projects[i].projectSkills.length; j += 1) {
      const listItem = document.createElement('li');
      listItem.classList.add('projects_stack_item', 'projects_stack_item1');
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
    rightBlockBiv.appendChild(heading);
    rightBlockBiv.appendChild(paragraph);
    rightBlockBiv.appendChild(list);

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

  // Validation form
  document.getElementById('contact_form').addEventListener('submit', validateForm);

  // Save data when typed
  const formObj = JSON.parse(localStorage.getItem('formObj'));
  const formDataToStore = {
    name: '',
    email: '',
    message: '',
  };
  const name = document.getElementById('form_input1');
  const email = document.getElementById('form_input2');
  const message = document.getElementById('form_input3');

  name.addEventListener('input', () => {
    if (formObj) {
      formObj.name = name.value;
      localStorage.setItem('formObj', JSON.stringify(formObj));
    } else {
      console.log("does not exist")
      formDataToStore.name = name.value;
      localStorage.setItem('formObj', JSON.stringify(formDataToStore));
    }
  });
  email.addEventListener('input', () => {
    const islowercase = checkLowerCase(email.value);
    if (islowercase) {
      if (formObj) {
        formObj.email = email.value;
        localStorage.setItem('formObj', JSON.stringify(formObj));
      } else {
        formDataToStore.email = email.value;
        localStorage.setItem('formObj', JSON.stringify(formDataToStore));
      }
    }
  });
  message.addEventListener('input', () => {
    if (formObj) {
      formObj.message = message.value;
      localStorage.setItem('formObj', JSON.stringify(formObj));
    } else {
      formDataToStore.message = message.value;
      localStorage.setItem('formObj', JSON.stringify(formDataToStore));
    }
  });

  // Get form data in local storag if it exist
  if (formObj) {
    document.getElementById('form_input1').value = formObj.name;
    document.getElementById('form_input2').value = formObj.email;
    document.getElementById('form_input3').value = formObj.message;
  }
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
