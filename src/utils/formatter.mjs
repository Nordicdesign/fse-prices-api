import csv from 'csvtojson'
import 'fs'

export const csvToJSON = (file) => {
  csv().fromFile(file).then((jsonObj) => {
    console.log(jsonObj);
    jsonObj.map(plane => {

    })
  })
}