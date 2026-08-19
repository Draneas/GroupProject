function newElement() 
{
  const inputValue = document.getElementById("myInput").value;
  if (inputValue === '') return;

  const task = document.createElement("li");
  document.getElementById("myUL").appendChild(task);
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