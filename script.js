import data from './data.json' assert { type: 'JSON' };
console.log(data);


function writer() {
  const obj = JSON.parse(data);
  document.getElementById("para").innerHTML = obj.result;
}