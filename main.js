const articles = [
  // News
  {
    id: 1,
    image:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/08/gettyimages-2165010509.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
    title: "Global Markets React to Unexpected Economic Shifts",
    description:
      "An analysis of how global markets are adjusting to recent economic changes.",
    date: "2024-10-10T08:30:00Z",
    category: "News",
  },
  {
    id: 2,
    image:
      "https://media.gettyimages.com/id/1345724459/es/foto/half-dome.jpg?s=612x612&w=gi&k=20&c=Zpw84P2aWhF_AHBmO8mQFDP270R0whKHXGalD9cEojA=",
    title: "Historic Summit Aims to Address Climate Crisis",
    description:
      "World leaders gather to discuss urgent actions against climate change.",
    date: "2024-10-08T14:00:00Z",
    category: "News",
  },
  {
    id: 3,
    image:
      "https://media.licdn.com/dms/image/D5612AQFr22oanrpOdQ/article-cover_image-shrink_600_2000/0/1710344112152?e=2147483647&v=beta&t=MmB_iooLxFNzWg4y2rpiYPtvDnb50EJOL-FBVMXsGKE",
    title: "Breakthrough in Renewable Energy Technology",
    description:
      "Scientists announce a significant advancement in renewable energy sources.",
    date: "2024-10-05T12:00:00Z",
    category: "News",
  },

  // US Election
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMENJOPFKQRs486nWe3p76DzbCxyEa9ICUAg&s",
    title: "Candidates Debate Key Issues Ahead of Election",
    description:
      "With the election approaching, candidates focus on key voter concerns.",
    date: "2024-10-12T09:30:00Z",
    category: "US Election",
  },
  {
    id: 5,
    image:
      "https://static01.nyt.com/images/2024/08/13/multimedia/2024-08-08-dem-registration-index/2024-08-08-dem-registration-index-videoSixteenByNineJumbo1600-v6.png",
    title: "Voter Registration Hits Record Numbers",
    description:
      "Voter turnout is expected to be high as registration numbers surge.",
    date: "2024-10-10T10:15:00Z",
    category: "US Election",
  },
  {
    id: 6,
    image:
      "https://images.axios.com/Jk_FjvzxbZIkzobzPVAAkmA5JXI=/0x0:1920x1080/1920x1080/2024/02/16/1708104768290.jpg",
    title: "Third-Party Candidates Make Their Mark in Debates",
    description:
      "New voices emerge in the race, offering alternative platforms.",
    date: "2024-10-05T11:00:00Z",
    category: "US Election",
  },

  // Sport
  {
    id: 7,
    image:
      "https://media.gettyimages.com/id/1439320381/es/foto/los-angeles-ca-carlos-vela-of-lafc-lifts-the-trophy-to-celebrate-with-his-teammates-after.jpg?s=612x612&w=gi&k=20&c=5AcNyKKEyzYLJbg4DkGRBTadIfvVcpd3OJMwO_hNxvQ=",
    title: "Major League Finals Set to Kick Off",
    description:
      "Fans prepare for an exciting series in this year’s major league finals.",
    date: "2024-10-15T18:00:00Z",
    category: "Sport",
  },
  {
    id: 8,
    image:
      "https://statsbomb.com/wp-content/uploads/2022/02/PA-42371753-scaled.jpg",
    title: "Underdog Team Shocks in Championship Victory",
    description:
      "An unexpected victory in the national championship surprises fans.",
    date: "2024-10-10T14:30:00Z",
    category: "Sport",
  },
  {
    id: 9,
    image:
      "https://media.newyorker.com/photos/61380ee55ea384ed026bbd0e/master/pass/Sweet-EliteRunners-1b.jpg",
    title: "World Records Broken in Track and Field",
    description: "New records set in the annual track and field event.",
    date: "2024-10-08T17:00:00Z",
    category: "Sport",
  },

  // Business
  {
    id: 10,
    image:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff74783ea-1197-4e05-b4ce-2b90c0264ff0_631x404.png",
    title: "Tech Giants Report Earnings for Third Quarter",
    description:
      "A look at the latest earnings reports from major tech companies.",
    date: "2024-10-18T08:00:00Z",
    category: "Business",
  },
  {
    id: 11,
    image:
      "https://media.istockphoto.com/id/1321662715/photo/global-business-network-concept-sustainable-development-goals-sdgs.jpg?s=612x612&w=0&k=20&c=94nphEqQVYY1_btd30ivdG6Xzc69G_FZ_QgWn5vGus4=",
    title: "New Trade Agreements Reshape International Markets",
    description:
      "Countries negotiate new trade deals, impacting global markets.",
    date: "2024-10-15T09:30:00Z",
    category: "Business",
  },
  {
    id: 12,
    image:
      "https://about.fb.com/wp-content/uploads/2022/10/Global-State-of-Small-Business_-Recovery-Slowing-But-Economic-Optimism-Remains_Header.jpg",
    title: "Small Businesses Thrive Amid Economic Challenges",
    description:
      "A spotlight on small businesses finding success in uncertain times.",
    date: "2024-10-10T11:00:00Z",
    category: "Business",
  },

  // Innovation
  {
    id: 13,
    image:
      "https://img.freepik.com/premium-photo/healthcare-technology-medical-revolution-advance-technology-medical-research-ai-intelligencetransformation-innovation-technology-future-health_1028938-132100.jpg",
    title: "AI Advances Set to Revolutionize Healthcare",
    description:
      "New AI technologies promise to transform healthcare delivery.",
    date: "2024-10-12T14:00:00Z",
    category: "Innovation",
  },
  {
    id: 14,
    image:
      "https://media.istockphoto.com/id/1348631007/photo/ev-charging-station-for-electric-car-in-concept-of-green-energy-and-eco-power.jpg?s=612x612&w=0&k=20&c=yTL95mCTPWTNqEO4NqiWWSeC_JMINNUJeChE9a6YKVc=",
    title: "Electric Vehicle Technology Reaches New Heights",
    description: "EV advancements bring improved range and charging speeds.",
    date: "2024-10-07T08:30:00Z",
    category: "Innovation",
  },
  {
    id: 15,
    image: "https://images.mktw.net/im-33499477?width=1260&height=673",
    title: "Space Exploration Gains Momentum",
    description:
      "Private companies drive progress in space exploration technology.",
    date: "2024-10-06T12:45:00Z",
    category: "Innovation",
  },

  // Culture
  {
    id: 16,
    image:
      "https://www.hereandnow365.co.uk/wp-content/uploads/2020/08/diversity_0-1.jpg",
    title: "Celebrating Diversity Through Cultural Festivals",
    description:
      "Festivals highlight the richness of diverse cultures around the world.",
    date: "2024-10-05T16:00:00Z",
    category: "Culture",
  },
  {
    id: 17,
    image:
      "https://media.istockphoto.com/id/1170383960/photo/still-life-with-fruits.jpg?s=612x612&w=0&k=20&c=zJS6ZmErV7SniKm63uChmOUcfUE7IKlHRqQdqiVbbe8=",
    title: "The Renaissance of Traditional Crafts",
    description:
      "Traditional crafts are experiencing a revival in the modern era.",
    date: "2024-10-09T09:15:00Z",
    category: "Culture",
  },
  {
    id: 18,
    image:
      "https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.jpg?s=612x612&w=0&k=20&c=ManrdILSin-JyEZqtdREJqnYUTIJaEQg9FrEh2V8OHA=",
    title: "Influence of Pop Culture on Youth Identity",
    description:
      "Exploring how pop culture shapes the identity of today’s youth.",
    date: "2024-10-03T14:30:00Z",
    category: "Culture",
  },

  // Arts
  {
    id: 19,
    image:
      "https://c8.alamy.com/comp/PPTG0W/saatchi-gallery-london-uk-27-september-2018-black-mirror-explores-arts-role-in-social-satire-and-how-political-uncertainty-has-influenced-art-of-recent-years-at-a-time-of-collective-unease-black-mirror-emphasises-the-importance-of-art-and-satire-in-dissecting-power-structures-questioning-societal-norms-and-visualising-political-unrest-providing-light-relief-to-lifes-uncertainties-image-works-by-douglas-kolk-credit-malcolm-parkalamy-live-news-PPTG0W.jpg",
    title: "Art Exhibitions Challenge Social Norms",
    description:
      "Artists are using their work to question societal expectations.",
    date: "2024-10-08T10:00:00Z",
    category: "Arts",
  },
  {
    id: 20,
    image:
      "https://decsofdesign.wordpress.com/wp-content/uploads/2012/11/pic.jpg",
    title: "The Evolution of Digital Art in the 21st Century",
    description: "Digital art has become a dominant force in the art world.",
    date: "2024-10-04T13:45:00Z",
    category: "Arts",
  },
  {
    id: 21,
    image:
      "https://images.adsttc.com/media/images/6315/9693/f55c/665b/c481/9899/newsletter/how-public-art-shapes-cities_1.jpg?1662359194",
    title: "Public Art Projects Transform Urban Spaces",
    description:
      "Public art installations are changing the face of cities worldwide.",
    date: "2024-10-02T15:30:00Z",
    category: "Arts",
  },

  // Travel
  {
    id: 22,
    image:
      "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=",
    title: "Top Destinations for Adventure Travelers",
    description:
      "Explore destinations perfect for thrill-seekers and adventurers.",
    date: "2024-10-01T10:00:00Z",
    category: "Travel",
  },
  {
    id: 23,
    image:
      "https://media.istockphoto.com/id/1372488167/photo/a-lake-in-the-shape-of-an-airplane-in-the-middle-of-untouched-nature-a-concept-illustrating.jpg?s=612x612&w=0&k=20&c=d-2X_9pmP_RRfvNfTsptxluq5mCcF_ahUZhMi6ESlow=",
    title: "Sustainable Tourism: Traveling Responsibly",
    description: "Tips for making eco-friendly choices while traveling.",
    date: "2024-10-10T16:45:00Z",
    category: "Travel",
  },
  {
    id: 24,
    image:
      "https://worldwildschooling.com/wp-content/uploads/2024/03/Hidden-Gems-Across-the-Globe_Lofoten-Islands-Norway_Stefano-Zaccaria_Adobe-Stock-Photo_564968224.jpg",
    title: "Hidden Gems: Unexplored Destinations",
    description: "Discover lesser-known places that offer unique experiences.",
    date: "2024-10-12T12:15:00Z",
    category: "Travel",
  },

  // Earth
  {
    id: 25,
    image:
      "https://www.shutterstock.com/shutterstock/photos/1269582256/display_1500/stock-photo--climate-change-withered-earth-1269582256.jpg",
    title: "Global Efforts to Combat Climate Change",
    description:
      "How nations are joining forces to address the climate crisis.",
    date: "2024-10-09T09:30:00Z",
    category: "Earth",
  },
  {
    id: 26,
    image:
      "https://www.green.earth/hs-fs/hubfs/Why%20should%20endangered%20species%20be%20protected%20_visual%201.png?width=1200&height=800&name=Why%20should%20endangered%20species%20be%20protected%20_visual%201.png",
    title: "Preserving Endangered Species",
    description:
      "A look into initiatives protecting wildlife around the world.",
    date: "2024-10-03T10:30:00Z",
    category: "Earth",
  },
  {
    id: 27,
    image:
      "https://thumbs.dreamstime.com/b/reforestation-project-desert-landscape-goal-restoring-ecosystem-balance-created-generative-ai-280901970.jpg",
    title: "Reforestation Projects Aim to Restore Ecosystems",
    description: "Efforts to restore forests are gaining momentum globally.",
    date: "2024-10-04T12:30:00Z",
    category: "Earth",
  },

  // Video
  {
    id: 28,
    image:
      "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-926b6263-aae1-45e9-9d84-0d34c4168128--Rwanda10_1200x.jpeg?v=1559919439",
    title: "Top Viral Videos of the Year",
    description: "A roundup of the most popular viral videos of 2024.",
    date: "2024-10-15T18:45:00Z",
    category: "Video",
  },
  {
    id: 29,
    image:
      "https://bloximages.chicago2.vip.townnews.com/bozemandailychronicle.com/content/tncms/assets/v3/editorial/4/91/491681a4-52ca-5856-a362-db6e6b4fc9c2/671a86d6a348e.image.jpg?resize=750%2C500",
    title: "Documentary Series Shines Light on Social Issues",
    description:
      "A powerful documentary series explores pressing social topics.",
    date: "2024-10-08T14:15:00Z",
    category: "Video",
  },
  {
    id: 30,
    image:
      "https://static.demilked.com/wp-content/uploads/2019/07/5d2327d242f24-behind-the-scenes-of-hollywood-movies-45-5d1ca67714fda__700.jpg",
    title: "Behind the Scenes of the Year's Biggest Film",
    description: "An exclusive look at the making of a blockbuster film.",
    date: "2024-10-05T11:45:00Z",
    category: "Video",
  },

  // Live
  {
    id: 31,
    image:
      "https://static01.nyt.com/images/2023/03/20/climate/20cli-ipcc/20cli-ipcc-mediumSquareAt3X-v2.jpg",
    title: "Live Coverage of Global Climate Summit",
    description: "Follow live updates from the global climate summit.",
    date: "2024-10-10T12:00:00Z",
    category: "Live",
  },
  {
    id: 32,
    image:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/E4E7/production/_104399585_house_district_winshare-nc.png.webp",
    title: "Real-Time Election Results for Midterms",
    description: "Get real-time results from the U.S. midterm elections.",
    date: "2024-10-15T20:00:00Z",
    category: "Live",
  },
  {
    id: 33,
    image:
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2019/05/zwHurricaneMichaelSaunday35-e1606773869524.jpg?fit=1200%2C675&ssl=1",
    title: "Breaking News: Emergency Response to Natural Disaster",
    description:
      "Live updates on emergency response efforts after a natural disaster.",
    date: "2024-10-14T14:00:00Z",
    category: "Live",
  },
];

const gridItems = document.querySelectorAll(".grid-item");

// Obtener el nombre del archivo HTML actual (sin la ruta completa)
const pageName = window.location.pathname.split("/").pop().split(".")[0];

// Filtrar los artículos según el nombre de la página
let filteredArticles;
switch (pageName) {
  case "index":
    filteredArticles = articles; // Mostrar todos los artículos en la página principal
    break;
  case "news":
    filteredArticles = articles.filter(
      (article) => article.category === "News"
    );
    break;
  case "uselection":
    filteredArticles = articles.filter(
      (article) => article.category === "US Election"
    );
    break;
  case "sports":
    filteredArticles = articles.filter(
      (article) => article.category === "Sport"
    );
    break;
  case "business":
    filteredArticles = articles.filter(
      (article) => article.category === "Business"
    );
    break;
  case "innovation":
    filteredArticles = articles.filter(
      (article) => article.category === "Innovation"
    );
    break;
  case "culture":
    filteredArticles = articles.filter(
      (article) => article.category === "Culture"
    );
    break;
  case "arts":
    filteredArticles = articles.filter(
      (article) => article.category === "Arts"
    );
    break;
  case "travel":
    filteredArticles = articles.filter(
      (article) => article.category === "Travel"
    );
    break;
  case "earth":
    filteredArticles = articles.filter(
      (article) => article.category === "Earth"
    );
    break;
  case "video":
    filteredArticles = articles.filter(
      (article) => article.category === "Video"
    );
    break;
  case "live":
    filteredArticles = articles.filter(
      (article) => article.category === "Live"
    );
    break;
  default:
    filteredArticles = articles; // Si no se encuentra la página, mostrar todos los artículos
    break;
}

// Recorrer cada elemento del grid y asignar los datos del array de artículos filtrados
filteredArticles.forEach((article, index) => {
  if (gridItems[index]) {
    // Asigna la URL de la imagen al elemento img y añade el evento de clic
    const imgElement = gridItems[index].querySelector(".article-image");
    imgElement.src = article.image;
    imgElement.alt = article.title;

    // Añade el evento de clic para redirigir al enlace de la noticia
    imgElement.addEventListener("click", () => {
      window.location.href = `article.html?id=${article.id}`;
    });

    // Asigna el título y el enlace del artículo
    const titleElement = gridItems[index].querySelector(".title a");
    titleElement.textContent = article.title;
    titleElement.href = `article.html?id=${article.id}`;

    // Asigna la descripción del artículo
    const descriptionElement = gridItems[index].querySelector(".description");
    descriptionElement.textContent = article.description;

    // Asigna la fecha al componente de tiempo relativo
    const relativeTimeElement = gridItems[index].querySelector("relative-time");
    // relativeTimeElement.setAttribute("time", new Date(article.date).getTime());
    relativeTimeElement.outerHTML = `<relative-time time="${article.date}"/>`;
  }
});
console.log(filteredArticles);

const getId = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return Number(searchParams.get("id"));
};

class RelativeTime extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
  render() {
    const timeValue = this.getAttribute("time");
    const time = timeValue ? new Date(timeValue).getTime() : Date.now();
    const now = Date.now();
    const diff = now - time;

    const seconds = Math.floor(diff / 1000) || 1;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let aux = "...";
    if (months >= 12) {
      aux = `Hace ${years} año${years > 1 ? "s" : ""}`;
    } else if (days > 30 && months >= 1) {
      aux = `Hace ${months} mes${months > 1 ? "es" : ""}`;
    } else if (days >= 1) {
      aux = `Hace ${days} día${days > 1 ? "s" : ""}`;
    } else if (hours >= 1) {
      aux = `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (minutes >= 1) {
      aux = `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else if (seconds >= 1) {
      aux = `Hace ${seconds} segundo${seconds > 1 ? "s" : ""}`;
    }

    this.textContent = aux;
  }
}
customElements.define("relative-time", RelativeTime);

class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.articles = articles; // Lista de artículos importada

    // Guardar una referencia de la función `handleClickOutside` para añadir y remover correctamente el evento
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  connectedCallback() {
    // Elementos y eventos de apertura y cierre del diálogo de búsqueda
    const dialogBtn = this.querySelector(".dialog-search");
    const closeBtn = this.querySelector(".close-btnn");
    const dialog = this.querySelector("dialog");

    // Abrir el diálogo y agregar el evento `mousedown` en el documento para detectar clic fuera
    dialogBtn.addEventListener("click", () => {
      dialog.showModal(); // Muestra el diálogo de búsqueda
      setTimeout(() => {
        document.addEventListener("mousedown", this.handleClickOutside); // Agrega el evento después de un breve retraso
      }, 0);
    });

    // Cerrar el diálogo y remover el evento de `mousedown` en el documento
    closeBtn.addEventListener("click", () => {
      dialog.close(); // Cierra el diálogo de búsqueda
      document.removeEventListener("mousedown", this.handleClickOutside); // Remueve el evento de clic
    });

    // Evento de búsqueda
    const siteSearch = this.querySelector("#site-search");
    siteSearch.addEventListener("input", (event) => this.search(event));

    // Inicializa la búsqueda con un término vacío
    this.renderResults("");
  }

  // Método de búsqueda que filtra los artículos según el término ingresado
  search(event) {
    event.preventDefault();
    const siteSearch = this.querySelector("#site-search");
    const term = siteSearch.value; // Término ingresado por el usuario
    this.renderResults(term); // Llama a renderResults con el término ingresado
  }

  // Renderiza los resultados de búsqueda en el diálogo
  renderResults(term = "") {
    const searchResults = this.querySelector("#search-results");
    searchResults.innerHTML = ""; // Limpia los resultados previos

    // Filtra los artículos según el término ingresado
    const _articles = this.articles.filter((article) =>
      article.title.toLowerCase().includes(term.toLowerCase())
    );

    const template = this.querySelector("template").content; // Usa el template definido en el HTML

    // Itera sobre cada artículo filtrado y lo agrega a los resultados
    _articles.forEach((article) => {
      const li = template.querySelector("li").cloneNode(true); // Clona el elemento de lista de resultados

      // Asigna la imagen del artículo al item-image
      li.querySelector(".card .item-image").src = article.image;

      // Asigna la descripción del artículo
      li.querySelector(".card .item-description").textContent =
        article.description;

      // Asigna la fecha en formato timestamp al elemento relative-time
      li.querySelector("relative-time").setAttribute("time", article.date);

      // Configura el enlace y el texto del título del artículo
      const enlace = li.querySelector(".card .item-title a");
      enlace.textContent = article.title;
      enlace.href = `article.html?id=${article.id}`; // Actualiza el enlace con el ID del artículo

      // Añade el elemento a la lista de resultados de búsqueda
      searchResults.appendChild(li);
    });
  }

  // Maneja el cierre del diálogo si se hace clic fuera de él
  handleClickOutside(event) {
    const dialog = this.querySelector("dialog");
    if (!dialog.contains(event.target)) {
      // Verifica si el clic ocurrió fuera del diálogo
      dialog.close(); // Cierra el diálogo
      document.removeEventListener("mousedown", this.handleClickOutside); // Remueve el evento después de cerrar
    }
  }
}

// Define el elemento personalizado para la búsqueda
customElements.define("custom-search", CustomSearch);

class CustomArticle extends HTMLElement {
  constructor() {
    super();
    this.articleId = getId(); // Obtiene el id del artículo desde la URL
  }

  connectedCallback() {
    this.render(); // Renderiza el artículo cuando el componente está conectado
  }

  render() {
    // Busca el artículo en el array de artículos usando el id
    const article = articles.find((article) => article.id === this.articleId);

    if (article) {
      // Asigna el título del artículo
      const h1 = this.querySelector("h1");
      h1.textContent = article.title;

      // Asigna la imagen del artículo
      const img = this.querySelector("img");
      img.src = article.image;
      img.alt = article.title;

      // Asigna la descripción del artículo
      const description = this.querySelector("p");
      description.textContent = article.description;

      // Asigna la fecha de publicación en un elemento <relative-time>
      const relativeTimeElement = this.querySelector("relative-time");
      // relativeTimeElement.setAttribute("time", new Date(article.date).getTime());
      relativeTimeElement.outerHTML = `<relative-time time="${article.date}"/>`;
    }
  }
}
customElements.define("custom-article", CustomArticle);

// Seleccionamos todos los enlaces dentro del menú
const menuLinks = document.querySelectorAll(".main-menu ul li a");

// Añadimos un evento de clic a cada enlace
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Quitamos la clase 'active' de todos los enlaces
    menuLinks.forEach((item) => item.classList.remove("active"));
    // Añadimos la clase 'active' al enlace que fue clicado
    this.classList.add("active");
  });
});

// Seleccionamos todos los enlaces dentro del menú lateral
const menuLinks2 = document.querySelectorAll(".side-menu ul li a");

// Añadimos un evento de clic a cada enlace
menuLinks2.forEach((link) => {
  link.addEventListener("click", function () {
    // Quitamos la clase 'active' de todos los enlaces
    menuLinks.forEach((item) => item.classList.remove("active"));
    // Añadimos la clase 'active' al enlace que fue clicado
    this.classList.add("active");
  });
});

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "./index.html";
});

class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos para el menú lateral en modo claro */
        .side-menu {
          height: 100%;
          width: 200px;
          position: fixed;
          top: 0;
          left: -250px;
          background-color: #FFFFFF;
          color: black;
          overflow-x: hidden;
          transition: left 0.3s ease, background-color 0.3s ease, color 0.3s ease;
          z-index: 2000;
          padding-top: 60px;
        }

        .side-menu.open {
          left: 0;
        }

        .menu-toggle {
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          background: transparent;
          border: none;
          color: black;
          position: fixed;
          top: 5px;
          left: 10px;
          z-index: 1100;
          transition: top 0.3s ease, color 0.3s ease;
        }

        /* Clase para ocultar el botón de las tres rayas cuando el menú está abierto */
        .menu-toggle.hidden {
          display: none;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 30px;
          background: none;
          border: none;
          color: black;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .theme-toggle {
          position: absolute;
          top: 10px;
          left: 15px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 12px;
          background-color: #f1f1f1;
          color: black;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .theme-toggle:hover {
          background-color: #e0e0e0;
        }

        .side-menu ul {
          list-style-type: none;
          padding: 0;
        }

        .side-menu ul li {
          padding: 10px 20px;
        }

        .side-menu ul li a {
          text-decoration: none;
          color: black;
          display: block;
          transition: border-left 0.3s ease, padding-left 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }

        /* Estilo para el enlace en hover */
        .side-menu ul li a:hover {
          border-left: 4px solid #000000;
          padding-left: 16px;
        }

        /* Modo oscuro */
        body.dark-theme .side-menu {
          background-color: #111;
          color: white;
        }

        body.dark-theme .menu-toggle {
          color: white;
        }

        body.dark-theme .close-btn {
          color: white;
        }

        body.dark-theme .theme-toggle {
          background-color: #333;
          color: white;
        }

        body.dark-theme .side-menu ul li a {
          color: white;
        }

        body.dark-theme .side-menu ul li a:hover {
          background-color: #333;
          color: white;
          border-left: 4px solid #ffffff;
        }
      </style>

      <!-- Botón de apertura y contenedor del menú lateral -->
      <button class="menu-toggle">≡</button>
      <div class="side-menu">
        <button class="theme-toggle">🌙 Dark Mode</button> <!-- Botón para alternar tema -->
        <button class="close-btn">&times;</button>
        <ul>
          <li><a href="index.html" class="home-link">Home</a></li>
          <li><a href="news.html" data-category="News">News</a></li>
          <li><a href="uselection.html" data-category="US Election">US Election</a></li>
          <li><a href="sports.html" data-category="Sport">Sport</a></li>
          <li><a href="business.html" data-category="Business">Business</a></li>
          <li><a href="innovation.html" data-category="Innovation">Innovation</a></li>
          <li><a href="culture.html" data-category="Culture">Culture</a></li>
          <li><a href="arts.html" data-category="Arts">Arts</a></li>
          <li><a href="travel.html" data-category="Travel">Travel</a></li>
          <li><a href="earth.html" data-category="Earth">Earth</a></li>
          <li><a href="video.html" data-category="Video">Video</a></li>
          <li><a href="live.html" data-category="Live">Live</a></li>
        </ul>
      </div>
    `;
  }

  connectedCallback() {
    this.menuToggle = this.shadowRoot.querySelector(".menu-toggle");
    this.sideMenu = this.shadowRoot.querySelector(".side-menu");
    this.closeBtn = this.shadowRoot.querySelector(".close-btn");
    this.themeToggleBtn = this.shadowRoot.querySelector(".theme-toggle");

    // Abrir el menú cuando se hace clic en el botón de menú
    this.menuToggle.addEventListener("click", this.openMenu.bind(this));

    // Cerrar el menú cuando se hace clic en el botón de cerrar
    this.closeBtn.addEventListener("click", this.closeMenu.bind(this));

    // Alternar el tema oscuro/claro
    this.themeToggleBtn.addEventListener("click", this.toggleTheme.bind(this));

    // Escuchar clics dentro del shadowRoot y propagar al documento
    this.shadowRoot.addEventListener("click", (event) => {
      event.stopPropagation(); // Detener la propagación interna
    });

    // Evento para cerrar el menú si se hace clic fuera
    document.addEventListener("click", this.handleClickOutside.bind(this));
  }

  openMenu() {
    this.sideMenu.classList.add("open");
    this.menuToggle.classList.add("hidden"); // Oculta el botón de las tres rayas
  }

  closeMenu() {
    this.sideMenu.classList.remove("open");
    this.menuToggle.classList.remove("hidden"); // Muestra el botón de las tres rayas
  }

  handleClickOutside(event) {
    // Comprueba si el menú está abierto y si el clic ocurrió fuera del menú
    if (
      this.sideMenu.classList.contains("open") && // El menú está abierto
      !this.sideMenu.contains(event.target) && // El clic no fue en el menú
      !this.menuToggle.contains(event.target) // El clic no fue en el botón de apertura
    ) {
      this.closeMenu(); // Cierra el menú
    }
  }

  toggleTheme() {
    // Alternar el estado del modo oscuro
    this.isDarkMode = !this.isDarkMode;

    // Forzar el renderizado (reflow) antes de aplicar el tema
    void this.sideMenu.offsetWidth; // Forzar un reflow para sincronización

    // Actualizar los estilos del `side-menu` y sus elementos según el tema actual
    if (this.isDarkMode) {
      this.sideMenu.style.backgroundColor = "#111";
      this.sideMenu.style.color = "white";
      this.themeToggleBtn.style.backgroundColor = "#333";
      this.themeToggleBtn.style.color = "white";
      this.closeBtn.style.color = "white";
      this.menuToggle.style.color = "white";
      this.themeToggleBtn.textContent = "☀️ Light Mode";

      // Cambiar el color de los enlaces y sus estados de hover
      this.shadowRoot.querySelectorAll(".side-menu ul li a").forEach((link) => {
        link.style.color = "white";
        link.onmouseover = () => {
          link.style.borderLeft = "4px solid #ffffff";
        };
        link.onmouseout = () => {
          link.style.backgroundColor = "transparent";
          link.style.borderLeft = "none";
        };
      });
    } else {
      this.sideMenu.style.backgroundColor = "#FFFFFF";
      this.sideMenu.style.color = "black";
      this.themeToggleBtn.style.backgroundColor = "#f1f1f1";
      this.themeToggleBtn.style.color = "black";
      this.closeBtn.style.color = "black";
      this.menuToggle.style.color = "black";
      this.themeToggleBtn.textContent = "🌙 Dark Mode";

      // Restaurar el color de los enlaces y sus estados de hover
      this.shadowRoot.querySelectorAll(".side-menu ul li a").forEach((link) => {
        link.style.color = "black";
        link.onmouseover = () => {
          link.style.backgroundColor = "#e0e0e0";
          link.style.borderLeft = "4px solid #000000";
        };
        link.onmouseout = () => {
          link.style.backgroundColor = "transparent";
          link.style.borderLeft = "none";
        };
      });
    }
    // Sincronizar el cambio de tema en el body
    document.body.classList.toggle("dark-theme");
  }
}

// Definir el nuevo elemento personalizado
customElements.define("side-menu", SideMenu);

// Obtener la URL actual y el nombre del archivo
const currentPath = window.location.pathname.split("/").pop();

// Seleccionar todos los enlaces en el menú
const menuLinks3 = document.querySelectorAll(".main-menu ul li a");

// Agregar la clase 'active' al enlace que coincide con el archivo actual
menuLinks3.forEach((link) => {
  // Comparar el archivo del enlace con el archivo actual
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
