const Card = require("../../Card");

module.exports = class WinAllSameRole extends Card {

	constructor(role) {
		super(role);

		this.winCheck = {
			priority: 0,
			check: function (counts, winners, aliveCount) {
				if (counts[this.name] == aliveCount)
					winners.addPlayer(this.player, this.name);
			}
		};
	}

}