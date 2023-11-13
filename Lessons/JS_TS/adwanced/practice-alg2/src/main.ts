import "./style.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const PHOTO_URL = "photos";
const POST_URL = "posts";

let imageIndex = 0;
let postIndex = 0;

let image: HTMLImageElement | null = null;
let post: HTMLElement | null = null;

const getData = async (BASE_URL: string, PART_URL: string, index: number) => {
  const data = await fetch(`${BASE_URL}${PART_URL}`);

  const parsedData = await data.json();

  return parsedData[index];
};

const render = () => {
  const app = document.getElementById("app");

  while (app?.children.length > 1) {
    app?.removeChild(app?.lastChild);
  }

  if (image != null) {
    app?.append(image);
  }

  if (post != null) {
    app?.append(post);
  }
};

const getImageComponent = (imageSrc: string) => {
  const component = document.createElement("img");
  component.className = "image";
  component.src = imageSrc;
  return component;
};

const getPostComponent = (title: string, body: string) => {
  const titleComponent = document.createElement("h3");
  titleComponent.textContent = title;

  const bodyComponent = document.createElement("p");
  bodyComponent.textContent = body;

  const postComponent = document.createElement("div");
  postComponent.className = "post";

  postComponent.append(titleComponent);
  postComponent.append(bodyComponent);

  return postComponent;
};

const addNewImageButton = document.getElementById("getNewImg");

addNewImageButton?.addEventListener("click", async () => {
  const imageRes = await getData(BASE_URL, PHOTO_URL, imageIndex);
  image = getImageComponent(imageRes.url);
  imageIndex++;
  render();
});

const addNewPostButton = document.getElementById("getNewPost");

addNewPostButton?.addEventListener("click", async () => {
  const postRes = await getData(BASE_URL, POST_URL, postIndex);
  post = getPostComponent(postRes.title, postRes.body);
  postIndex++;
  render();
});

const showImageButton = document.getElementById("showImg");

showImageButton?.addEventListener("click", () => {
  if (image === null) {
    return;
  }

  image.className = "image show";
});

const hideImageButton = document.getElementById("hideImg");

hideImageButton?.addEventListener("click", () => {
  if (image === null) {
    return;
  }

  image.className = "image hide";
});

const showPostButton = document.getElementById("showPost");

showPostButton?.addEventListener("click", () => {
  if (post === null) {
    return;
  }

  post.className = "post show";
});

const hidePostButton = document.getElementById("hidePost");

hidePostButton?.addEventListener("click", () => {
  if (post === null) {
    return;
  }

  post.className = "post hide";
});
