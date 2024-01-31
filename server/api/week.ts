import data from '../data/week.json'
export default defineEventHandler((event) => {
    const query = getQuery(event)
  
    return { data }
  })
  