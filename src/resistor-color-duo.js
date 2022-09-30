//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color_array) => {
  return Number("" + COLORS.indexOf(color_array[0]) + "" + COLORS.indexOf(color_array[1]))
};

// export const colorCode = (color) => {
//   return COLORS.indexOf(color)
// };

// export const COLORS = undefined;
export const COLORS = [
 "black",
 "brown",
 "red",
 "orange",
 "yellow",
 "green",
 "blue",
 "violet",
 "grey",
 "white"
];


