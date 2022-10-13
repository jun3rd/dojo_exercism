// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    /**
     * fetch translation from storage -OR- API throws NotAvailable error
     * promise returns: (1) translation, (2) quality
     * step-1: I am 'fetching' from the API a translation
     * step-2: the API sends me back a promise
     * step-3: I am waiting with a 'then' method call
     * step-4: the API sends me a translation
     */

    // API response verification:
    /*
      console.log(text)
      let answer = this.api.fetch(text).then(responseFromAPI => responseFromAPI.translation)
      console.log(answer)
    */
  
    // TEST passed: it can translate a known word group
    // TEST passed: forwards NotAvailable errors, unaltered
    // TEST passed: forwards Untranslatable errors, unaltered
    // TEST PASSED: feature completed

    return this.api.fetch(text).then(responseFromAPI => responseFromAPI.translation)
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    /*
     * translate an array of texts
     */

    // API response verification
    /*
      console.log(texts)
      let promises = texts.map(text => this.free(text))
      console.log(promises)
    */

    // TEST passed: translate batch
    // TEST passed: maintain order of batch input
    // TEST passed: one item to translate
    // TEST passed: throw if 1+ translations fail

    let promises = texts.map(text => this.free(text))
    return Promise
      .all(promises)
      .then(translations => {
        if (translations.length === 0) { throw new BatchIsEmpty() }
        else if (translations.length > 0) { return translations }
        else { throw new Error('Not yet translated') }
      })

  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    /**
     * request translation be added to API storage
     * if failure encountered, automatic retry up to 3 attempts
     */

    // API response verification
    ///*
    // console.log(text)
    // console.log(this.api.request(text, answer => (answer) ? console.log(answer) : false))
    // */

    // TEST passed: request something not available, but eventually is
    // TEST Passed: rejects if not translatable
    // TEST Passed: up to 3 request attempts
    // TEST Passed: max 3 request attempts

    let requestTranslation = (translationError) => {
      return new Promise((resolve, reject) => {
        this.api.request(text, error => {
          if(error) { reject(error) }
          else { resolve() }
        })
      })
    }
    return this.api.fetch(text)
        .catch(requestTranslation)
        .catch(requestTranslation)
        .catch(requestTranslation)

  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {

    // API response verification
    /*
    console.log(`text: ${text}`)
    console.log(`minimum quality: ${minimumQuality}`)
    console.log(this.request(text))
     */

    // TEST passed: resolve translation
    // TEST passed: request and resolve unavailable translations

    return this.request(text)
      .then(() => this.api.fetch(text))
      .then(response => {
        if(response.quality < minimumQuality) {
          throw new QualityThresholdNotMet(text)
        }
        return response.translation
      })
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
