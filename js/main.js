const users = document.getElementById('users')
const routines = document.getElementById('routines')



users.addEventListener('click',()=>{
  const listColabs = document.getElementById("listUsers");
  if (listColabs.style.display == 'block') {
    listColabs.style.display = 'none'
    return;
  };
  listColabs.style.display = 'block';
});

routines.addEventListener('click',()=>{
  const listColabs = document.getElementById("listRoutines");
  if (listColabs.style.display == 'block') {
    listColabs.style.display = 'none'
    return;
  };
  listColabs.style.display = 'block';
});