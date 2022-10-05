class PartyPlanner{
	constructor(guestList = []){
		this.guestList = guestList;
	}

	addToGuestList(name){
		this.guestList.push(name)
	}// ` - add the `name` to the `guestList`






	throwParty(){



		if(this.guestList.length === 0){
			return "Gotta add people to the guest list";
		}

		if(this.guestList.length > 0){
			let message = "Welcome to the party ";
      return message + this.guestList.join(" and ");
			// return "Welcome to the party " + names.join(" and ")
		}
	


		// ` - return a different string depending on the length of the
		//  `guestList`:
		//  * If there are no guests, return "Gotta add people to the guest list"
		//  * If there are guests in the `guestList`, return the guests' names. For
		// 	 example, if there are two guests, return "Welcome to the party
		// 	 ${name1} and ${name2}".
	}



}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}