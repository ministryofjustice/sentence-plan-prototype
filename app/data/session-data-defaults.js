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
      "firstname": "Sam",
      "lastname": "Curtis",
      "crn": "S000001",
      "noms": "A0000AB",
      "keyworker": "Sarah Smith",
      "summary": [
        // { title:"Main offence(s)", value: "Robbery"},
        // { title:"Sentence type", value:"Extended Determinate Sentence"},
        // { title:"Sentence length", value:"138 months"},
        // { title:"Start date", value: "27 February 2019"},
        { title:"Date ISP due", value:"13 March 2019"},
        { title:"PAROM eligibility date", value: "20 December 2023"},
        { title:"Expected HDC/release date", value:"19 June 2026"}
      ],
      "needs": [
        { type:"Accommodation", risk: true},
        { type:"ETE", risk:true},
        { type:"Finance", risk: true},
        { type:"Relationships", risk:true},
        { type:"Alcohol misuse" },
        { type:"Emotional well-being" },
        { type:"Thinking and behaviour" }
      ]
    }
  ]

}
