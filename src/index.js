import {name, club} from "./002-destructuring-objects.js";
import { ingredientsNeeded } from "./003-includes.js";
import { Animal, Player, TennisPlayer } from "./004-classes.js";
import { buyFlightTicket, displayResult, displayUserDataResuts } from "./005-promises.js";
import { fetchData, getFirstComment, postComment } from "./006-fetch.js";


let cat = new Animal('cat', 4)



let player = new Player('Edson', "USA")

player.introduce()


const tennisPlayer = new TennisPlayer("Joe", "Colombia", "35")
tennisPlayer.playTennis()
tennisPlayer.introduce()
console.log(Animal.return10())
console.log(cat.metaData)

displayResult()

displayUserDataResuts()

fetchData()

getFirstComment()

postComment()




