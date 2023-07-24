export const  duplicateCount=(text)=>{
    text = text.toUpperCase();
  
    let count = 0;
  
    for(let i of text){
      if(text[i] === text[++i]){
        count++
      }
    }
    return count;
  }

export const findLastOccurrenceIndex = (s, a, b) => {
    if (s.length === 0) {
        return -1;
    }
      
    const aIndex = s.lastIndexOf(a);
    const bIndex = s.lastIndexOf(b);
      
    return Math.max(aIndex, bIndex);
    }

export const drawRating = (vote) => {
    if (vote < 0 || vote > 100) {
        throw new Error('Vote should be between 0 and 100');
    }
    const filledStars = vote?Math.ceil(vote / 20):1;
    const emptyStars = 5 - filledStars;  

    return '★'.repeat(filledStars) + '☆'.repeat(emptyStars);
    }

export const parseUrl = (url)=> {
    return new URL(url);
    }