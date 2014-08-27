// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Pick Your Level",
      content: "These are the different lessons you can choose from. Every time you complete a lesson, it will turn green",
      target: "navbar_popup",
      placement: "bottom"
    },
    {
      title: "Information",
      content: "Here is information about each topic you will be learning",
      target: "instruction-template",
      placement: "bottom"
    },
    {
      title: "Task",
      content: "Complete each task specified here",
      target: "popup_task",
      placement: "bottom"
    },
    {
      title: "Terminal",
      content: "Type your responses here and press enter to move on to the next level",
      target: "terminal_popup",
      placement: "top"
    },
    {
      title: "Finder",
      content: "This is your finder that will update when you type commands in the terminal.",
      target: "popup-folder",
      placement: "bottom" //maybe change
    }
  ]
};

// Start the tour!
if (localStorage.lessons == ""){
    hopscotch.startTour(tour);
}
