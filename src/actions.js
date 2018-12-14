/*
 * action types
 */

export const ADD_NOTE='ADD_NOTE';
/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function addNote(text) {
  return { type: ADD_NOTE, text }
}
