
function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function () {
            resolve(image);
        }

        image.onerror = function () {
            let message = 'Could not load image at url ' + url;
            reject(new Error(message));
        }

        image.src = url;
    })
}

let addImage = (src) => {
    let imageElement = document.createElement('img');
    imageElement.src = src;
    document.body.appendChild(imageElement);
}

/*
function getImage(requestType, url, async){
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = ()=>{
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText
            loadImage(result);
        }
    }

    xhttp.open(requestType,url,async);

}
*/

var imageUrl = [
    'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
]

/*
loadImage(imageUrl[0]).then((img1) => {
    addImage(img1.src);
    loadImage(imageUrl[1]).then((img2) => {
        addImage(img2.src);
        loadImage(imageUrl[2]).then((img3)=>{
            addImage(img3.src);
        });
    });
});
*/

Promise.all([
    loadImage(imageUrl[0]), loadImage(imageUrl[1]), loadImage(imageUrl[2])])
    .then((images) => {
        //images.forEach((element) => addImage(element.src));
        images.forEach((element) => {
            addImage(element.src);
        });
    })



