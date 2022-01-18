var dolist = [];
var userInput;

$(".addNew").click(function() {
 userInput=$(".newToDo").val();
   dolist.push(".newToDo");
  $(".ToDoList").append("<li>"+userInput+"</li>"); 
       $(".numtasks").text(dolist.length);
});