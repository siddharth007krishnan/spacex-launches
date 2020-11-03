export default function queryParamUtils(filters, append = false) {
  const qs = Object.keys(filters).filter(key => filters[key] !== '').reduce((acc, cur) => {
    if (cur === 'year') {
      return acc += 'year=' + filters[cur] + '&'
    }
    if (cur === 'launched') {
      return acc += 'launch_success=' + filters[cur] + '&'
    }
    if (cur === 'landed') {
      return acc += 'land_success=' + filters[cur] + '&'
    }
  }, '')
  if (qs) {
    if (append) {
      return ('?' + qs.slice(0, -1))
    }
    return qs.slice(0, -1)
  }
  return qs
}