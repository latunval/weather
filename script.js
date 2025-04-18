

function Show() {
    document.getElementById('page').innerHTML = "Button clicked!" ;
    document.querySelector('p').style.color = "blue";
    document.querySelector('body').classList.add ("bod");
    // return show()
}

// let setup = document.getElementById('load');
// let punchline = document.getElementById('text');

// async function joke() {
//     try {
//         const request = await fetch('https://official-joke-api.appspot.com/random_joke');
//     const deliver = await request.json();
//      setup.textContent = deliver.setup;
//      punchline.textContent = deliver.punchline;
//     // console.log("Lists of joke are :", deliver);
//     return deliver;
//     } catch (error) {
//         document.getElementById('error').innerText = 'error fetching jokes:'
//     document.querySelectorAll('p').style.color = "red";

//         // console.error('error fetching jokes:', error);
// };
// };
// // joke()
// setInterval(joke, 6000);

let userName = document.getElementById('fname');

const saving = [];
function Save() {
  // alert('helllo')
  const inputs = userName.value;
  // const inputt =inputs.join()
  saving.push(inputs)
    function userData(user) {
        localStorage.setItem("fullName", user);
        console.log("Name saved:", user);
      }
      
      // Load saved theme
      function loadSaved() {
        const savedName = localStorage.getItem("fullName");
        if (savedName) {
          console.log("Loaded Name:", savedName);
        } else {
          console.log("No saved Name found");
        }
    }
  
userData(saving);
loadSaved()
}

let work = document.getElementById('work') ;
let lname = document.getElementById('lname') ;
let user = document.getElementById('user') ;

//  let all = {works,lnames,userN}
  const saves = [];
  function add() {
    const works =work.value;
 const lnames = lname.value 
 const userN = user.value
    saves.push(lnames,userN,works);

    function use(allName) {
      localStorage.setItem("allNames", allName);
      console.log("All Name Saves", allName);
    }

    function loadAll() {
      const nameSaved = localStorage.getItem("allNames");
      if (nameSaved) {
        console.log("All Saved", nameSaved)
      }else {
        console.log("NO name Found");
            }
    }
    use(saves);
    loadAll()
  }

let setup = document.getElementById('load');
let punchline = document.getElementById('text');

async function joke() {
    try {
        const request = await fetch(data.json)
    const deliver = await request.json();
     setup.textContent = deliver.setup;
     punchline.textContent = deliver.punchline;
     document.getElementById('text').style.color = "green"
    // console.log("Lists of joke are :", deliver);
    return deliver;
    } catch (error) {
        document.getElementById('error').innerText = 'error fetching jokes:'
    document.getElementById('error').style.color = "red";

        // console.error('error fetching jokes:', error);
};
};
// joke()
setInterval(joke, 6000);