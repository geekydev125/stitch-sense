function getImageUrl(imageFolder:string, imageName: string) {
  return new URL(`../assets/img/${imageFolder}/${imageName}`, import.meta.url).href;
}

export default getImageUrl;