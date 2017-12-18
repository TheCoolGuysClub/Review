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
    {let dropdown = $('#myDropDown');
    let first = $('#diyige');
    let second = $('#dierge');
    let firstContent = $('#firstPage');
    let secondContent = $('#secondPage');
    dropdown.on("click",function(){
      first.toggleClass("hidden");
      second.toggleClass("hidden");
    })
    first.on("click",function(){
      firstContent.toggleClass("hidden");
    })
    second.on("click",function(){
      console.log(secondContent);
      secondContent.toggleClass("hidden");
    })

    }



//question 4
{ let firstbox = $('#firstB');
  firstbox.on("click",function(){
      firstbox.toggleClass("changeColor");
  })

  let secondbox = $('#secondB');
  secondbox.on("click",function(){
      secondbox.toggleClass("changeSize");
      console.log(secondbox);
  })
  let thirdbox = $('#thirdB');
  thirdbox.on("click",function(){
 
  })
  let fourthbox = $('#forthB');
  fourthbox.on("click",function(){
      fourthbox.toggleClass("movePo")
  })
}