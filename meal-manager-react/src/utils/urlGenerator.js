import queryString from 'query-string'

const getKeyByValue = (object, value) => {
  return Object.keys(object).filter(key => object[key] === value)
}

export const urlGenerator = (criteriaObject) => {
  let arrayAND = []
  let arrayNOT = []
  let arrayOR = []

  for (const foodGroup in criteriaObject) {
    arrayAND = arrayAND.concat(getKeyByValue(criteriaObject[foodGroup],'AND'))
    arrayNOT = arrayNOT.concat(getKeyByValue(criteriaObject[foodGroup],'NOT'))
    arrayOR = arrayOR.concat(getKeyByValue(criteriaObject[foodGroup],'OR'))
  } 

  const striing = queryString.stringify({
    'AND':  arrayAND,
    "NOT": arrayNOT,
    "OR": arrayOR
  }
  ,{arrayFormat: 'comma'});
  return striing
}

