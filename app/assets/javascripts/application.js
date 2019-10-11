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

$(".closed").appendTo($(".closed-goals"));
$('#js-toggle').click(
  function(){
    if ( $(this).is(':checked') )
      $('.js-hidden').show();
    else
      $('.js-hidden').hide();
  }
);




new MOJFrontend.ButtonMenu({
  container: $('.moj-button-menu'),
  mq: '(min-width: 200em)',
  buttonText: 'Options',
  menuClasses: 'moj-button-menu__wrapper--right'
});




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


if ($('#goal1-step1-intervention-type-container').length > 0) {
  element = document.querySelector('#goal1-step1-intervention-type-container')
  id = 'goal1-step1-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal1-step1-intervention-type',
    source: topics,
    showAllValues: true
  })
} else if ($('#goal1-step2-intervention-type-container').length > 0) {
  element = document.querySelector('#goal1-step2-intervention-type-container')
  id = 'goal1-step2-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal1-step2-intervention-type',
    source: topics,
    showAllValues: true
  })
}

if ($('#goal2-step1-intervention-type-container').length > 0) {
  element = document.querySelector('#goal2-step1-intervention-type-container')
  id = 'goal2-step1-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal2-step1-intervention-type',
    source: topics,
    showAllValues: true
  })
} else if ($('#goal2-step2-intervention-type-container').length > 0) {
  element = document.querySelector('#goal2-step2-intervention-type-container')
  id = 'goal2-step2-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal2-step2-intervention-type',
    source: topics,
    showAllValues: true
  })
}

if ($('#goal3-step1-intervention-type-container').length > 0) {
  element = document.querySelector('#goal3-step1-intervention-type-container')
  id = 'goal3-step1-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal3-step1-intervention-type',
    source: topics,
    showAllValues: true
  })
} else if ($('#goal3-step2-intervention-type-container').length > 0) {
  element = document.querySelector('#goal3-step2-intervention-type-container')
  id = 'goal3-step2-intervention-type' // To match it to the existing <label>.

  accessibleAutocomplete ({
    element: element,
    defaultValue: element.getAttribute('data-default-value'),
    id: id,
    name: 'goal3-step2-intervention-type',
    source: topics,
    showAllValues: true
  })
}