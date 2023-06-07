const projects = [
    {
      title: "GoBackz",
      description: "GoBackz UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>Node.js, MongoDB, Mongoose, Express, Axios.</strong>",
      link: "/work/GoBackz",
      backgroundImage: "./images/working.png"
    },
    {
      title: "Focus Tracks",
      description: "",
      link: "/work/FocusTracks",
      backgroundImage: "./images/focustracks.png"
    },
    {
      title: "Golf-Sidekick",
      description: "",
      link: "/work/Golf-Sidekick",
      backgroundImage: "./images/golfsidekick.png"
    },
    {
      title: "Next Level Bets",
      description: "",
      link: "a github link",
      backgroundImage: "./images/nflgithub.png"
    },
    {
      title: "NASA API",
      description: "",
      link: "/work/NASAapi",
      backgroundImage: "./images/working.png"
    },
  ];

const dynamicContent = projects.map(project => `
        <div class="_w-title">
            <div class="_w-h1">
                <h1 class="main-h1">${project.title}</h1>
                <p class="paragraph-2">${project.description}</p>
            </div>
        </div>
    <div class="proj_body-wrap">
    <div data-w-id="5eccdb1f-552b-aa14-ce29-6a212628c872" data-wf-id="[&quot;5eccdb1f-552b-aa14-ce29-6a212628c872&quot;]" class="proj_body w-richtext">
    <figure data-rt-type="image" data-rt-align="center" class="w-richtext-align-center" style="max-width: 60%;">
    <div>
    <img src="https://uploads-ssl.webflow.com/647a02af11be73b35fccad00/647a02af11be73b35fccad0d_Sinder.jpg">
    </div>
    </figure>
    <p>Sinder is a dating app for single socks. The design concept stems from the mission of the company: to help single socks meet their match. Simple, elegant, and cheerful tones convey the optimism of this company's mission.</p>
    <figure class="w-richtext-align-center" style="max-width: 60%;" data-rt-type="image" data-rt-align="center" data-rt-max-width="">
    <div>
    <img src="https://uploads-ssl.webflow.com/647a02af11be73b35fccad00/647a02af11be73b35fccad10_Sinder2.png">
    </div>
    </figure>
    </div>
    </div>
`).join('');

window.addEventListener('DOMContentLoaded', () => {
  const dynamicContentPlaceholder = document.getElementById('dynamicWork');
  console.log(dynamicContent);
  dynamicContentPlaceholder.innerHTML = dynamicContent;
});