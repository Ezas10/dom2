let head=document.createElement("h1")
head.textContent="Luxary Watches"
head.style.fontSize="50px"
head.style.textAlign="center"
head.style.backgroundColor="darkgray"
head.style.textShadow="2px 2px 1px white"
console.log(head)
document.body.append(head)


let card=document.createElement("div")
card.style.width="400px"
card.style.height="350px"
card.style.backgroundColor="skyblue"
card.style.border="2px solid black"
card.style.borderRadius="20px"


let watch1=document.createElement("img")
watch1.src="https://cdn2.ethoswatches.com/rolex/pub/media/newtheme/desktop/rolex-new_watches-2024-gmt-master-ii.jpg"
watch1.style.width="300px"
watch1.style.padding="30px"
watch1.style.margin="20px"

let text=document.createElement("h3")
text.textContent="Rolex Watch"
text.style.textAlign="center"



let card1=document.createElement("div")
card1.style.width="400px"
card1.style.height="350px"
card1.style.backgroundColor="#f0ffff"
card1.style.border="2px solid black"
card1.style.borderRadius="20px"

let watch2=document.createElement("img")
watch2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lGzHfqJeh89P67-FohVLixvq4AqYKDYwrw&s"
watch2.style.width="200px"
watch2.style.padding="30px"
watch2.style.margin="20px"

let text1=document.createElement("h3")
text1.textContent="Hublot Watch"
text1.style.textAlign="center"








//replace



let images=document.createElement("img")
images.setAttribute("src","https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/l/o/louis-moinet-cosmic-art-lm-45-10b-ma-p-large.jpg")
images.style.width="300px"
let images1=document.createElement("img")
images1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpe6cnjvrE17ojsFV7loxlywC0XIWeqp81Q&s")
images1.style.width="300px"

//clone

const clonedNodeElement=watch1.cloneNode(true)

//atrributes
console.log(images.getAttribute("src"))


card.append(watch1,text,)
card1.append(watch2,text1)

document.body.append(head,card,card1,images,images1,clonedNodeElement)

