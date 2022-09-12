

function findMeALoser(game: {pLeft:any, pRight: any}) {
    const l = game.pLeft.optionSelction
    const r = game.pRight.optionSelction
    if (l && r) {
        if (l === r) {
        return 'draw'
        }

        else if (l === 'rock' && r === 'paper') {
        return "pLeft"
        }
        else if (l === 'rock' && r === 'scissors') {
        return "pRight"
        }

        else if (l === 'paper' && r === 'rock') {
        return "pRight"
        }
        else if (l === 'paper' && r === 'scissors') {
        return "pLeft"
        }

        else if (l === 'scissors' && r === 'rock') {
        return "pLeft"
        }
        else if (l === 'scissors' && r === 'paper') {
        return "pRight"
        }
        
        else {
        console.log('something went very wrong, one or both users selected an option that is not rock paper or scissors')
        return 'something went very wrong lol'

        }
    } else {
        console.log('something went very wrong, both players dont have an option selected')
        return 'something went very wrong lol'
    }
}
function getResultObj(losingSide: string) {
          let result = {}
          switch(losingSide){
            case 'pLeft':
            case 'pRight':
              result = {
                draw: false,
                winner: losingSide == "pLeft" ? "pRight" : "pLeft",
                loser: losingSide == "pLeft" ? "pLeft" : "pRight"
              }
              break
            case 'draw':
              result = {
                draw: true,
                winner: null,
                loser: null,
              }
              break
            default:
              console.log(losingSide, "^^^Error Finding a Loser")
          }
          return result
}
function getUniqueGamePin(pool: any, pin:string): string {
    if (pool[pin]) {
        return getUniqueGamePin(pool, randomPin())
    } else {
        return pin
    }
}
function randomPin() {
    const length = 4;
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function yallBothReady(game: {pLeft: any, pRight: any}) {
    return game.pLeft.ready && game.pRight.ready ? true : false
}

export { findMeALoser, getResultObj, getUniqueGamePin, randomPin, yallBothReady }