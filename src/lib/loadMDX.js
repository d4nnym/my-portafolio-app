import matter from 'gray-matter'

export const getMDX = (source) =>{
  const {data,content} = matter(source);
  return {...data,...content}
}