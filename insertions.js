const projects = {
  project1: {
    title: 'Tonic',
    details: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    shortDescription: `A daily selection of privately personalized reads; no accounts or 
    sign-ups required.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot1.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  project2: {
    title: 'Multi-Post Stories',
    details: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: '2015',
    },
    shortDescription: `Experimental content creation feature that allows users to add to an 
    existing story over the course of a day without spamming their friends.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot2.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
  project3: {
    title: 'Facebook 360',
    details: {
      client: 'Facebook',
      role: 'Full Stack Developer',
      year: '2015',
    },
    shortDescription: `Exploring the future of media in Facebook's first Virtual Reality app; 
    a place to discover and enjoy 360 photos and videos on Gear VR.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot3.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  project4: {
    title: 'Uber Navigation',
    details: {
      client: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    shortDescription: `A smart assistant to make driving more safe, efficient, 
    and fun by unlocking your most expensive computer: your car.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot4.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
};

const portfolio = document.getElementById('Portfolio');

function createCard(project, ind) {
  let htmlTxt = `<article class="work_card bg_white">
                  <div class="img">
                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}" />
                  </div>
                  <div class="card_details">
                    <div title="project_details" class="project_details_wrapper">
                      <h3 class="project_title neutral_b">${project.title}</h3>
                      <ul class="project_details">
                        <li title="client" class="project_info_txt upper neutral_n">${project.details.client}</li>
                        <li><i class="material-icons small light_grey">circle</i></li>
                        <li title="role" class="project_info_txt dark_grey">${project.details.role}</li>
                        <li><i class="material-icons small light_grey">circle</i></li>
                        <li title="year" class="project_info_txt dark_grey">${project.details.year}</li>
                      </ul>
                    </div>
                    <p title="project_description" class="descriptive_txt fs_15 neutral_n">
                      ${project.shortDescription}
                    </p>
                    <ul class="tags">`
                      for (let i = 0; i < project.technologies.length; i += 1) {
                        htmlTxt += `<li class="btn tag_btn">${project.technologies[i]}</li>`
                      }
        htmlTxt += `</ul>      
                    <div class="action">
                      <a data-modal-target = "#modal${ind + 1}" href="#modal${ind + 1}" class="btn action_btn enabled"
                      >See Project</a>                    
                    </div>
                  </div>
                </article>`;

  return htmlTxt;
}

function createModal(project, ind) {
  let htmlTxt = `<div class="modal" id="modal${ind + 1}"}>
                   <article class="work_card bg_white">
                     <div title="project_details" class="project_details_wrapper">
                     <h3 class="project_title neutral_b">${project.title}</h3>
                     <button type="button" data-close-modal class="close-btn btn xs-transparent_btn btn_flex_center"><i class="material-icons">close</i>
                    </button>
                    <ul class="project_details">
                    <li title="client" class="project_info_txt upper neutral_n">
                    ${project.details.client}
                  </li>
                  <li><i class="material-icons small light_grey">circle</i></li>
                  <li title="role" class="project_info_txt dark_grey">
                  ${project.details.role}
                  </li>
                  <li><i class="material-icons small light_grey">circle</i></li>
                  <li title="year" class="project_info_txt dark_grey">${project.details.year}</li>
                  </ul>
                  </div> 
                  <div class="img">
                <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}" />
              </div> 
              <div class="card_details">
              <p title="project_description" class="descriptive_txt fs_15 neutral_n">
              ${project.description}
              </p>
              <div class="modal_tags_action">
                <ul class="tags">`;
  for (let i = 0; i < project.technologies.length; i += 1) {
    htmlTxt += `<li class="btn tag_btn">${project.technologies[i]}</li>`;
  }
  htmlTxt += `</ul>      
                <div class="action">
                  <a href="${project.liveUrl}" class="btn action_btn enabled">See Live</a>
                  <a href="${project.sourceUrl}" class="btn action_btn enabled">See Source</a>
                </div>
              </div>          
            </div>
          </article>
        </div>`;
  return htmlTxt;
}

function insertHtml() {
  const projectNames = Object.keys(projects);
  const projectsLength = Object.keys(projects).length;

  for (let i = 0; i < projectsLength; i += 1) {
    portfolio.innerHTML += createCard(projects[projectNames[i]], i);
  }

  for (let j = 0; j < projectsLength; j += 1) {
    portfolio.innerHTML += createModal(projects[projectNames[j]], j);
  }
}

portfolio.onload = insertHtml();
