import data from '../data/month.json'
export default defineEventHandler((event) => {
    const query = getQuery(event)
  
    return { data }
  })
  