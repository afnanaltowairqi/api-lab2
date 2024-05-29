let image =document.getElementById("image")
let image2 =document.getElementById("image2")
let btn = document.getElementById("btn")
//post
async function imageSub(){
    let res= await fetch('https://665786425c36170526451ff0.mockapi.io/Api', {
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
      let div = document.createElement("div")
      let imges = document.createElement("img")
      imges.src = data.image2
      
      div.append(imges)
      divImage.append(imges)
    }
    imageSub()

//Get
let url="https://665786425c36170526451ff0.mockapi.io/Api";
async function imageGen(){
    let res=await fetch(url)
    let data =await res.json();
    
    data.forEach(element => {
        let divImage = document.createElement("divImage")
        let imges = document.createElement("img")
        imges.src = element.image2
        // let btn = document.createElement('button')
        imges.append(divImage)
        // div.append(imges)
        // document.getElementById("div").append(divImage)
    });
}
imageGen()

//delete