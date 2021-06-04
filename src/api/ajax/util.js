const serialize=params=>{
    const result=[];
    for(const [key,value] of Object.entries(params)){        
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
    return result.join('&')
};

const serializeJSON=(params)=>{
    return JSON.stringify(params); 
}

const addUrlData=(url,data)=>{
    if(!data) return     
      const mark=url.includes('?')?'&':'?'
      return `${mark}${data}`
}

export { serialize, serializeJSON,addUrlData };