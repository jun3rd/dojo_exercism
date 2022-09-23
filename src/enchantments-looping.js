// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
	let card_to_find = card
	console.log(card)
	let card_count = 0;
	stack.forEach(card => {
		if (card === card_to_find) {
			card_count++
		}
	})
	return card_count
}


/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
	let evens = 0
	let odds = 0
	for( let card of stack ) {
		if (card%2 === 0) { evens++ }
		else { odds ++ }
	}
	return (type ? evens : odds)
}
