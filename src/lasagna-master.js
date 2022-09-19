/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * 
 * @param {number|null|undefined} remaining_minutes 
 * @returns {string} error message
 */
export function cookingStatus(remaining_minutes) {
    if (
        (remaining_minutes === null)
        || (remaining_minutes === undefined)
    ) {
        return 'You forgot to set the timer.'
    } else if (
        (typeof remaining_minutes === 'number')
        && (Number(remaining_minutes) === 0)
    ) {
        return 'Lasagna is done.'
    } else {
        return 'Not done, please wait.'
    }
    
}

/**
 * 
 * @param {array} layers 
 * @param {number} layerPrepTime 
 * @returns {number}
 */
export function preparationTime(layers, layerPrepTime = 2) {
    if (layers.length === 0) {
        return 0
    } else {
        let totalPrepTime = layers.length * layerPrepTime
        return totalPrepTime
    }
}

/**
 * 
 * @param {array} layers 
 * @returns {Object}
 */
export function quantities (layers) {
    console.log(layers)
    let ingredients = {
        noodles: 0,
        sauce: 0
    }

    layers.forEach(layer => {
        console.log(layer)
        if (layer === 'noodles') {ingredients[`${layer}`] += 50}
        if (layer === 'sauce') {ingredients[`${layer}`] += 0.2}
    })
    console.log('noodles', ingredients.noodles)
    console.log('sauce', ingredients.sauce)

    console.log(ingredients)
    return ingredients
}

/**
 * 
 * @param {array} friend_ingredients 
 * @param {array} own_ingredients 
 */
export function addSecretIngredient (friend_ingredients, own_ingredients) {
    own_ingredients.push(friend_ingredients[friend_ingredients.length-1])
}

/**
 * 
 * @param {Object} recipe 
 * @param {number} portions 
 * @returns {Object}
 */
export function scaleRecipe (recipe, portions) {
    let recipe_copy = {...recipe}
    let multiplier = portions / 2
    for( let ingredient_portion in recipe_copy ) {
        recipe_copy[ingredient_portion] *= multiplier
    }
    console.log(recipe_copy)
    return recipe_copy
}