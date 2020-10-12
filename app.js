let player = {
  resourcecount: 0,
}
let items = [
  {
    cost: 50,
    numberheld: 0,
    clickmod: 1,
    itmoda: 0,
    itmodb: 0,
  },
  {
    cost: 100,
    numberheld: 0,
    clickmod: 0,
    itmoda: 1,
    itmodb: 0,
  },
  {
    cost: 250,
    numberheld: 0,
    clickmod: 0,
    itmoda: 2,
    itmodb: 0,
  },
  {
    cost: 1000,
    numberheld: 0,
    clickmod: 5,
    itmoda: 10,
    itmodb: 0,
  }
]
let stats = {
  RPS: 0,
  TRM: 1,

}

function imageclick(){
  let funkvar = stats.TRM;
  setresourcecount(funkvar)
}
function setRPS(){
  stats.RPS = 0
  for (let index = 0; index < items.length; index++) {
    stats.RPS += ((items[index].itmoda * items[index].numberheld)/2);
  }
}
function setTRM(){
  stats.TRM=1
  for (let index = 0; index < items.length; index++) {
    stats.TRM += (items[index].clickmod * items[index].numberheld);
  }
}
function setresourcecount(x){
   player.resourcecount = player.resourcecount + x;
  let resourcedisplay = document.getElementById('resorceDisplay');
  resourcedisplay.innerText = `Gold ${player.resourcecount}`;
}

function buttonclick(x){
  if(player.resourcecount >= items[x].cost){ 
    items[x].numberheld++;
    setresourcecount(-items[x].cost)
    itempriceincreaser(x);
    
    
    updateinventory();
    setTRM();
    setRPS();
    updatestats();
    updatepriceoutput();
  }
}
function itempriceincreaser(x){
  items[x].cost = items[x].cost + (10 * items[x].numberheld);
}
function updatestats(){
  let statdisplay = document.getElementById('stats');
  statdisplay.innerText = 
  `RPS (resource per second) ${stats.RPS}
  TRM (total resource Multiplyer) ${stats.TRM}`;
}
function updateinventory(){
  let inventorydisplay = document.getElementById('numofitems');
  inventorydisplay.innerText = 
  ` Extra Pockets ${items[0].numberheld}
    Party Member: Warriors ${items[1].numberheld}
    Party Member: Support ${items[2].numberheld}
    Party Member: Wizards ${items[3].numberheld}
  `;
}
function updatepriceoutput(){
  let buttonone = document.getElementById("button1");
  buttonone.innerText = `${items[0].cost}`;
  let buttontwo = document.getElementById("button2");
  buttontwo.innerText = `${items[1].cost}`;
  let buttonthree = document.getElementById("button3");
  buttonthree.innerText = `${items[2].cost}`;
  let buttonfour = document.getElementById("button4");
  buttonfour.innerText = `${items[3].cost}`;
}

function timeiterater(){
    setInterval(() => {
      let funkvar = stats.RPS * 2
     setresourcecount(funkvar)}
  , 2000);

}

function startup(){
  timeiterater();
  updateinventory();
  updatestats();
  setresourcecount(0);
}

startup()