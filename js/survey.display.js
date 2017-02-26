Survey.Survey.cssType = "bootstrap";
   var surveyJSON = { title: "Let us help you personalize your skin care routine",  pages: [
  {
   name: "page1",
   questions: [
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Under 20"
      },
      {
       value: "2",
       text: "20 - 30 "
      },
      {
       value: "3",
       text: "30 - 40 "
      }
     ],
     name: "age",
     title:"How old are you?"
    },
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Oily, Acne prone"
      },
      {
       value: "2",
       text: "Dry ,dehydrated"
      },
      {
       value: "5",
       text: "Wrinkles"
      },
      {
       value: "6",
       text: "NONE!"
      }
     ],
     name:"problem",
     title: "What skin problem do you have?"
    },
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "2",
       text: "No"
      }
     ],
     name:"moisturizer",
     title: "Do you have a moisturizer?"
    },
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Yes! "
      },
      {
       value: "2",
       text: "No."
      }
     ],
     name:"serum",
     title: "Do you have serum?"
    },
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Yes! Hydration Mask"
      },
      {
       value: "2",
       text: "No. But I have dry skin. "
      },
      {
       value: "3",
       text: "Yes! Purifying Mask"
      },
      {
       value: "4",
       text: "No! But I have oily skin. "
      }
     ],
     name:"mask",
     title: "Do you have a mask?"
    }
   ]
  }
 ]
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model:survey,
    onComplete:sendDataToServer
});
function sendDataToServer(survey) {
  var surveyObjects = JSON.parse(JSON.stringify(survey.data));
  // alert(JSON.stringify(survey.data)+surveyObjects.age
  // +surveyObjects.problem+surveyObjects.moisturizer
  // +surveyObjects.serum+surveyObjects.mask);
  var age = surveyObjects.age;
  var problem = surveyObjects.problem;
  var moisturizer = surveyObjects.moisturizer;
  var serum = surveyObjects.serum;
  var mask = surveyObjects.mask;
  localStorage.setItem("skin_type", JSON.stringify(problem));
}

// survey.onComplete.add(function (sender) {
//     var mySurvey = sender;
//     var surveyData = sender.data;
//     alert(surveyData);
// });