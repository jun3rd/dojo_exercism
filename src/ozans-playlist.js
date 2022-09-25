// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return [...new Set(Object.values(playlist))]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return ( new Set(Object.values(playlist)) ).has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let newSet = new Set(Object.values(playlist)) 
  if (newSet.has(track)) {
    return [...newSet]
  } else {
    return [...(newSet.add(track))]
  }
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let newSet = new Set(Object.values(playlist))
  if (newSet.has(track)) {
    newSet.delete(track)
    return [...newSet]
  } else {
    return [...newSet]
  }
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let newSet = new Set(Object.values(playlist))
  if(newSet.length === 0) {
    return []
  } else {
    let newList = [...newSet]
    let artists = []
    newList.map(song => {
      let temp = []
      temp = song.split(' - ')
      if (!artists.includes(temp[1])) {
        artists.push(temp[1])
      }
    })
    return artists 
  }
}
