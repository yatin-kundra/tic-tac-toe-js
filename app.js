const gamebord = document.querySelector('#game-bord')
const infoDisplay = document.querySelector('#info')




const cells = [
    " ", " ", " ", " ", " ", " ", " ", " ", " "
]

let go = "circle"

infoDisplay.textContent = "Circle goes first"


function createBord()
{
    cells.forEach((cell, index) => {

        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gamebord.append(cellElement)
    });
}

createBord()

function addGo(e)
{
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'cross'?'circle':'cross'
    infoDisplay.textContent = "Its now " + go + "'s turn"
    e.target.removeEventListener("click", addGo)
    checkScore()

}


function checkScore()
{
    // console.log('hello')
    const allSquares = document.querySelectorAll(".square")

    const possibleWinnigs  = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [2,4,6], [0,4,8]
    ]

    possibleWinnigs.forEach((Array, i) => {
        const circleWis = Array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle')
        )

        var winLine = possibleWinnigs[i]
        console.log(winLine)
        

        if(circleWis)
        {
            infoDisplay.textContent = "Circle Wins!" 
             
            Line(winLine, i)
            
            // else if(3<=i<=5)
            // {
            // verticalLine(winLine)
            // }
            //     else if (i === 6){
            //     slantLine(winLine,45)
            // }

            // else {
            //     slantLine(winLine, -45)
            // }


            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))        // no idea what is this, it is so that we can't click on any of the empty box
            return
        }

        

    })


    possibleWinnigs.forEach(Array => {
        const crossWis = Array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross')
            )

            if(crossWis)
            {
                infoDisplay.textContent = "cross Wins!"
                
                    Line(winLine)
                    
                    // else if(3<=i<=5)
                    // {
                    // verticalLine(winLine)
                    // }
                    //     else if (i === 6){
                    //     slantLine(winLine,45)
                    // }
        
                    // else {
                    //     slantLine(winLine, -45)
                    // }
                allSquares.forEach(square => square.replaceWith(square.cloneNode(True)))        // no idea what is this
                return
                
            }
    })
}





// function verticalLine(smallarr)
// {
//         smallarr.forEach((box, i) =>
//             {
//                 var cell = document.getElementById(smallarr[i]).firstChild
//                 // console.log(cell)
//                 var newcell = document.createElement('div')
//                 cell.appendChild(newcell)
//                 newcell.classList.add('vertical')
//             })
// }

function Line(smallarr, j)
{
        smallarr.forEach((box, i) =>
            {
                var cell = document.getElementById(smallarr[i]).firstChild
                console.log(j)
                var newcell = document.createElement('div')
                cell.appendChild(newcell)
                newcell.classList.add('horizontal')
                
                 if(j>=0 && j<=2){
                    newcell.style.transform = 'rotate('+0+'deg)';
                    console.log("yuiyyyyyyyyyy")}
                else if(j>=3 && j<=5){
                newcell.style.transform = 'rotate('+90+'deg)';
                console.log("helloljf");}
                
                else if(j === 7)
                newcell.style.transform = 'rotate('+45+'deg)';

                else if(j === 6)
                newcell.style.transform = 'rotate('+135+'deg)';

                else
                console.log('end')





            })
}


// function slantLine(smallarr, theta)
// {
//         smallarr.forEach((box, i) =>
//             {
//                 var cell = document.getElementById(smallarr[i])
//                 cell.classList.add('slant')
//                 // cell.style.transform = rotate(theta+"deg")
//             })
// }










// if (possibleWinnigs.length >=4 && possibleWinnigs.length <= 6)
                // {
                //     allSquares.classList.add('vertical')
                //         }