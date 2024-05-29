let image =document.getElementById("image")
let image2 =document.getElementById("image2")
let btn = document.getElementById("btn")
//post
async function imageSub(){
    let res= await fetch('https://665737169f970b3b36c868dd.mockapi.io/js-Api', {
        method: 'POST',
        body: JSON.stringify({
            image: image.value,
            image2: image2.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      let data = await res.json();
      console.log(data);

      let divImage = document.getElementById("divImage")
    //   let div = document.createElement("div")
      let imges = document.createElement("img")
      imges.src = data.image2
      
    //   div.append(imges)
      divImage.append(imges)
    }
    imageSub()

//Get
let url="https://665737169f970b3b36c868dd.mockapi.io/js-Api";
function imageGen(){
    let res= fetch(url)
    let data = res.json();

    let divImage = document.getElementById("divImage")
    let div = document.createElement("div")
    let imges = document.createElement("img")
    imges.src = data.image2

    div.append(imges)
    divImage.append(div)
}
imageGen()