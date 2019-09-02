/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Turn off autocomplete on all forms and inputs
$(".form").attr("autocomplete", "off");
$(".govuk-input").attr("autocomplete", "off");


$(".js-hidden").hide();
$('#js-toggle').click(
  function(){
    if ( $(this).is(':checked') )
      $('.js-hidden').show();
    else
      $('.js-hidden').hide();
  }
);




const topics = [
  'A – Z',
  'Motivation & Engagement (M&E) Standalone',
  'Thinking Skills Programme (TSP)',
  'Kaizen',
  'Becoming New Me Plus (BNM+)',
  'New Me Strengths (NMS)',
  'Alcohol Related Violence (ARV)',
  'Building Skills for Recovery (BSR)',
  'Drink Impaired Drivers Programme (DIDP)',
  'Building Better Relationships (BBR)',
  'Resolve',
  'Choices, Actions, Relationships, Emotions (CARE)',
  'Horizon',
  'iHorizon',
  'Healthy Sex Programme (HSP)',
  'Healthy Identity Intervention (HII)',
  'Developing Dialogues (DD)',
  'Identity Matters (IM)',
  'New Me MOT',
  'Living as New Me (LNM)'
]

accessibleAutocomplete({
  element: document.querySelector('#intervention-type-container'),
  id: 'intervention-type', // To match it to the existing <label>.
  source: topics,
  showAllValues: true
})