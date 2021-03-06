const Card = require("../../Card");

module.exports = class RevealTargetOnDeath extends Card {

	constructor(role) {
		super(role);

		this.meetings = {
			"Reveal on Death": {
				states: ["Night"],
				flags: ["voting"],
				action: {
					priority: -50,
					run: function () {
						this.actor.role.data.playerToReveal = this.target;
					}
				}
			}
		};
		this.listeners = {
			"death": function (player, killer, deathType) {
				if (player == this.player && this.data.playerToReveal)
					this.data.playerToReveal.role.revealToAll();
			}
		};
		this.stealableListeners = {
			"death": this
		};
	}

}