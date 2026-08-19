

//  !! Koden baseras på denna HTML !!
//  <input type="text" id="myInput" placeholder="Lägg till ToDo">
//  <span onclick="newElement()" class="addBtn">Lägg till</span>
//  <ul id="myUL"></ul>

// Skapar en ny post i listan när man klickar på "Lägg till"-knappen
function newElement() {
    //Skapa listelement
    var li = document.createElement("li");
    
    //Hämtar texten
    var inputValue = document.getElementById("myInput").value;
    
    //Gör den inmatade texten till text
    var t = document.createTextNode(inputValue);
    
    //Lägg till texten i listelementet
    li.appendChild(t);
    
    //Kollar så att något är skrivet i fältet
    if (inputValue === '') {
        alert("Du måste ju skriva något!");
    } else {
        //Lägg till elementet i listan
        document.getElementById("myUL").appendChild(li);
    }

    //Tömmer input
    document.getElementById("myInput").value = "";
}
const list = document.getElementById('myUL');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    if (event.target.style.textDecoration === 'line-through') 
    {
      event.target.style.textDecoration = 'none';
    } 
    else
    {
      event.target.style.textDecoration = 'line-through';
    }
  }
});

list.addEventListener('dblclick', function(event) 
{
  if (event.target.tagName === 'LI'){event.target.remove();}
});
