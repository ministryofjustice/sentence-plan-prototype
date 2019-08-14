/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "offenders": [
    {
      "id": "1",
      "name": "Gary Hart",
      "crn": "X087946",
      "noms": "AE1234BD",
      "keyworker": "Sarah Smith",
      "summary": [
        { title:"Main offence(s)", value: "Death by dangerous driving"},
        { title:"Sentence length", value:"Life imprisonment, 25 years"},
        { title:"Start date", value: "18 April 2019"},
        { title:"Date ISP due", value:"20 July 2019"},
        { title:"PAROM eligibility date", value: "9 October 2019"},
        { title:"Expected HDC/release date", value:"28 November 2028"}
      ]
    }
  ]

}
