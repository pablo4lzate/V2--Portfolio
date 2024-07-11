const nameTitle = document.getElementById("title");
const lastNameTile = document.getElementById("apellido");

const titleNameText = "Pablo";
const lastname = "Alzate";
const titleAnimation = ()=>{
    nameTitle.innerHTML = `Pablo <span id="apellido">Alzate</span>` 
}

titleAnimation();