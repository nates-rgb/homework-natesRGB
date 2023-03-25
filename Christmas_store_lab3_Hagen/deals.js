class Grid{
    constructor(numCols, numRows,  gridStyle, cards=[] ) {
        this.numCols = numCols;
        this.numRows = numRows;
        this.cards = cards;
        this.gridStyle = gridStyle;

    }

   

    gridItems() {
        var temp =``;
        for ( let i=0; i<this.numCols; i++) {
            
        temp += `<div class= "${this.gridStyle}"> <img src= ${this.cards[i].imgSource} alt=${this.cards[i].imgTitle} class="${this.cards[i].className}"> <h3><b>${this.cards[i].cardTitle}</b></h3><p>${this.cards[i].cardDescription}</p><p><span class="round1">${this.cards[i].cardDiscounted}%</span></p></div>      ` ;
    }
    return temp;
    }
}

class Card {

    constructor(imgsrc, cardTitle, cardDes, cardOg, cardDis, cardClassName){
        
        this.imgSource = imgsrc;
        this.cardTitle = cardTitle;
        this.cardDescription = cardDes;
        this.cardOrginal = cardOg;
        this.cardDiscount = cardDis;
        this.cardDiscounted = Math.round((this.cardOrginal - this.cardDiscount)/this.cardOrginal * 100);
        this.className = cardClassName;
        console.log(this.className)
    }

    


}



let train = new Card("train.jpeg", "Trains", "this is a train", 205, 150, "sideimage");
let stockings = new Card("stockings.jpeg", "Stockings", "These are large socks", 25, 5, "cenimage");
let candyCanes = new Card("candyCanes.jpeg", "Candy Canes", "Candy Canes are tasty", 5, 3, "sideimage");
let snowGlobe = new Card("snowglobe.jpeg", "Snow Globes", "Pretty", 40, 15, "sideimage");
let inventory = [train,stockings,candyCanes,snowGlobe];
let grid = new Grid(4,1, "grid-item2", inventory);

function showInv(inv=[]){
   
    var flag=1;
    var content = `<tr>
    <th colspan="3" class="head">Table of Sales</th>
    <th rowspan="6" class="head"><canvas id="myCanvas" width="300" height="100"
            style="border:1px solid black;">
            .</canvas></th>
    </tr>
    <tr class="alt1">
    <th class="head"><b>Items</b></th>
    <th class="head"><b>Orginal Price</b></th>
    <th class="head"><b>Todays Deal</b></th>
    
    </tr>`;

        for(let i =0; i<inv.length; i++)
        {
        
            if(flag){
                
                content += `<tr class="alt2"><td> ${inv[i].cardTitle} </td><td>${inv[i].cardOrginal} </td> <td>${inv[i].cardDiscount}</td></tr>`;
            }
            else{
                
                content += `<tr class="alt1"><td> ${inv[i].cardTitle} </td><td>${inv[i].cardOrginal} </td> <td>${inv[i].cardDiscount}</td></tr>`;
            }
            flag = !flag;
        }
    return content;
}



var content = showInv(inventory);

var content2 = grid.gridItems();


function enlarge(element){
    
    this.style = " transform: scale(1.25);"
}

function delarge(element){
   
    this.style = " transform: scale(1);"
}



var tableStuff = document.getElementById("myTable");
tableStuff.innerHTML = content;
var model = document.getElementById("griddy");
model.innerHTML = content2;

document.querySelectorAll(".grid-item2").forEach(item => item.addEventListener("mouseover", enlarge));
document.querySelectorAll(".grid-item2").forEach(item => item.addEventListener("mouseout", delarge));






var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


        ctx.fi
        ctx.font = "30px Arial";
        ctx.fillText("Legendary Deals", 10, 50);
