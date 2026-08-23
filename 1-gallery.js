import"./assets/styles-z2C12DjY.js";import{S as i}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/ranch-4202828__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/ranch-4202828_1280.jpg",description:"Hokkaido Flower Fields"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/14/25/camel-4202429__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/14/25/camel-4202429_1280.jpg",description:"Packaging Size"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Station"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__480.jpg",original:"https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Landscape"}],e=document.querySelector(".gallery"),n=t.map(({preview:p,original:a,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img 
          class="gallery-image" 
          src="${p}" 
          alt="${o}" 
        />
      </a>
    </li>
  `).join("");e.innerHTML=n;new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
