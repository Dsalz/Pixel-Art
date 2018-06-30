// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



const Width = $("#inputWidth");    //store the input selectors for future reference
const Height = $("#inputHeight");
const Color = $("#colorPicker");

const ChangeGridColor = (color) => {    //Function for changing td color when clicked created to reduce repetitive codes and implement "DRY"
  $('td').click(() => {
    $(this).css("background-color", color);
  });
}

const clearGrid = () => {   //function for removing table(grid) from the page
  $("#pixelCanvas").remove();
}


const makeGrid = () => {    //function called to make grid
  
  let width = Width.val();   //storing the users input with the help of the variables assigned at the top of the file
  let height = Height.val();
  let color = Color.val();
  
  clearGrid();    // removing grid currently on the page
  
  $(".canvas").append("<table id='pixelCanvas'></table>");   //adding an empty table to the page
  
    for(let x =0 ; x<height ; x++){    //looping with the given values to dynamically create the rows (each with a class of the index)
$("#pixelCanvas").append("<tr class ='" + x + "'</tr>"); // nested looping to add the number of columns inputted by the user to the table row using the index class assigned to each row
        for(let y=0; y<width ; y++){
            $("."+x).append("<td></td>");
        }
    }
 ChangeGridColor(color); //enabling td background-color to change to the color inputted by the user on click
  
}


$("#colorPicker").on("change", () => {  //Dynamically updating the color of the td on click whenever the color is changed by the user
  var color = Color.val();
  ChangeGridColor(color);
});


$("#specs-submit").click( () => {   //event handler when submit button is clicked
   if(Width.val() > 100 || Height.val() > 40){                 // checking that constraints are not exceded
  alert("Maximum grid size of 40 height and 100 width"); 
 }
  else {
  makeGrid();
  $('.btn').removeClass("btn-clicked");    // removing btn-clicked class from all buttons
  $("#grid-draw").addClass('btn-clicked');    //adding btn-clicked class to draw button to tell the user that they can draw now
  }
});


$("#grid-delete").click( () => {    //event handler when clear button is clicked
  $('.btn').removeClass("btn-clicked");  // removing btn-clicked class from all buttons
  $("#grid-draw").addClass('btn-clicked'); //adding btn-clicked class to draw button to tell the user that they can draw now
  $('td').css("background-color", "transparent"); // wiping canvas clean by changing the color of all the elements to transparent
  var color = Color.val(); 
  ChangeGridColor(color); // getting color in the color picker and assigning the td to it when clicked
})


$("#grid-draw").click( () => {   //event handler when draw button is clicked
  $(this).addClass('btn-clicked'); //adding btn-clicked class to the draw button to tell the user that they can draw now
  $('#grid-erase').removeClass('btn-clicked') // removing btn-clicked class from the erase button
    var color = Color.val();
    ChangeGridColor(color); // getting color in the color picker and assigning the td to it when clicked
})

$("#grid-erase").click( () => {    //event handler when erase button is clicked
$(this).addClass('btn-clicked'); //adding btn-clicked class to the erase button to remind the user that they are currently erasing
$('#grid-draw').removeClass('btn-clicked') // removing btn-clicked class from the draw button
 ChangeGridColor("transparent");   // assigning the td background color to transparent when clicked thereby removing any color there previously
})


