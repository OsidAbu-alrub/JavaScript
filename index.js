const names = Array.from(document.getElementsByClassName("list-item"));
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", (event)=>{
    const searchBarValue = searchBar.value;
    if(searchBarValue){
        names.forEach(element =>{
            if(!element.textContent.toUpperCase().includes(searchBarValue.toUpperCase())){
                element.style.display = "none";
            }
            else{
                element.style.display = "block";    
            }
        });
    }
    else{
        names.forEach(element => {
            element.style.display = "block";
        });
    }
});