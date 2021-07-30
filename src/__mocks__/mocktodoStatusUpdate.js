/**
 * @format
 * @jest-environment jsdom
 */
function todoStatusUpdate(tasks, index) {
    
      if(tasks[index].completed === true){
        tasks[index].completed = false;
      }else{
        tasks[index].completed = true;
      }
      
      tasks[index].completed = true;        
      return tasks;
}

export default todoStatusUpdate;