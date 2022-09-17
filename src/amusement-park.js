/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  console.log(visitor)
  visitor.ticketId = null
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  let status = ""
  if (!(ticketId in tickets)) {
    status = "unknown ticket id"
  } else if (ticketId in tickets) {
    if (tickets[ticketId] === null) {
      status = "not sold"
    } else {
      status = "sold to " + tickets[ticketId]
    }
  } else {
    console.log('ERROR: no options!')
  }
  return status
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (ticketId in tickets) {
    let ticketHolder = "" + tickets[ticketId]
    if( ticketHolder === "null") {
      return "invalid ticket !!!"
    } else {
      return ticketHolder
    }
  } else {
    return "invalid ticket !!!"
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if ('gtc' in visitor) {
    return visitor.gtc.version
  }
}
