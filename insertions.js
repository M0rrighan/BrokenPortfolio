const projects = {
  project1: {
    title: 'Tonic',
    details: {
      client: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
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
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
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
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
  project3: {
    title: 'Project 3',
    details: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
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
  project4: {
    title: 'Project 4',
    details: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
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
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
};

const portfolio = document.getElementById('Portfolio');
let ind = 0;

function createModal(project1) {
  let htmlTxt = `<div id="all_modals">
                  <div class="modal active" id="modal${ind + 1}"}>
                   <article class="work_card bg_white">
                     <div title="project_details" class="project_details_wrapper">
                     <h3 class="project_title neutral_b">${project1.title}</h3>
                     <button type="button" data-close-modal class="close-btn btn xs-transparent_btn btn_flex_center"><i class="material-icons">close</i>
                    </button>
                    <ul class="project_details">
                    <li title="client" class="project_info_txt upper neutral_n">
                    ${project1.details.client}
                  </li>
                  <li><i class="material-icons small light_grey">circle</i></li>
                  <li title="role" class="project_info_txt dark_grey">
                  ${project1.details.role}
                  </li>
                  <li><i class="material-icons small light_grey">circle</i></li>
                  <li title="year" class="project_info_txt dark_grey">${project1.details.year}</li>
                  </ul>
                  </div> 
                  <div class="img">
                <img src="${project1.image.imageUrl}" alt="${project1.image.imageAlt}" />
              </div> 
              <div class="card_details">
              <p title="project_description" class="descriptive_txt fs_15 neutral_n">
              ${project1.description}
              </p>
              <div class="modal_tags_action">
                <ul class="tags">`
                for(let i = 0; i < project1.technologies.length; i +=1) {
                  htmlTxt += `<li class="btn tag_btn">${project1.technologies[i]}</li>`
                }
                htmlTxt += `</ul>
      
                <div class="action">
                  <a href="${project1.liveUrl}" class="btn action_btn enabled">See Live</a>
                  <a href="${project1.sourceUrl}" class="btn action_btn enabled">See Source</a>
                </div>
              </div>          
            </div>
          </article>
        </div>`;
  return htmlTxt;
}

function insertHtml() {
  portfolio.innerHTML = createModal(projects.project1);
}

portfolio.onload = insertHtml();
