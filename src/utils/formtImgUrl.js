export default function formatImgUrl(url) {
  const cutIndex = url.lastIndexOf("/") + 1;
  return `./src/assets/images/${url.slice(cutIndex)}`;
}
