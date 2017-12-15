  // question 1
  {
  let buttonone = $('#plus');
  let buttontwo = $('#minus');
  let number = $('#number');
  let index = 0;

  buttonone.on("click",function(){index ++;number.html("points:" + index);})

  buttontwo.on("click",function(){index --;number.html("points:" +index);})
}

  //question 2
  {
    let submit = $('#submit');
    submit.on("click",function(){
    let section = $("<section> </section>");
    let inputtext = $('#typedsentence').val();
    let deletetext = $("<button>X</button>");
    section.append(inputtext).append(deletetext);
    $("#add").append(section)
    deletetext.on("click",function(){
    section.html("");
    })
  })
}

  //question 3
    {let dropdown = $('myDropDown');
    dropdown.on("click"function(){
      $()
    })


    }

