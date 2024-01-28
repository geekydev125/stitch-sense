function getImageUrl(imageFolder:string | null | undefined, imageName: string) {
  if(!imageFolder){
    return new URL(`../assets/img/${imageName}`, import.meta.url).href;
  }
  return new URL(`../assets/img/${imageFolder}/${imageName}`, import.meta.url).href;
  
}

export default getImageUrl;