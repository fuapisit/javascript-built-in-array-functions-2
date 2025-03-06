const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  let carposition;
return carCollection.includes(carBrand) 
  ? (carposition = carCollection.indexOf(carBrand),
  `${carBrand} has already existed in the ${carposition+1} position of car collection.`)
  : (carCollection.splice(carCollection.length, 0, carBrand),
  `new car collection is : ${carCollection}`)
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.