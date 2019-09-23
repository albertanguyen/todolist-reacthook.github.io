# JayBeta - Todo List React Hook
Created with :blue_heart: by <a href="https://www.linkedin.com/in/anh-nguyen2/">Anh</a>  

## 📘 Lessons Learned
* Takehome message: 
<ol>
<li>eventHandlers take care of initiating the function via user interaction, there is no need to use useEffect method</li>
<li>We usually return the new array/object with updated state of items instead of returing one single item in the array/object</li>
<ol>

## 🤐 Describe any challenges encountered while building the app.
* Styling does not work after we check the todo checkbox because <code>props.item.completed</code> is updated by <code>handleChange()</code> method within the scope of <code>addtodo</code> child component only. The updated state by <code>handleChange()</code> method is not passed down to grandchild compopent <code>todoitem</code>.

<img src="https://github.com/albertanguyen/todolist-reacthook.github.io/blob/master/public/parentState.png" width="500" />

The item object has 3 keys: id, text, completed. Completed key is set false by default which is its initital state within <code>addtodo</code> child component.

<img src="https://github.com/albertanguyen/todolist-reacthook.github.io/blob/master/public/childState.png" width="500" />

After clicking on the checkbox of the first item idexed 0 (see the image), its key <code>completed</code> turned <code>true</code> in the new array returned by <code>handleChange()</code> method within <code>addtodo</code>. This new state is not passed down to <code>&lt;TodoItem /&gt;</code> in other words, <code>todoList</code> array is not mapped updated properties down to props BECAUSE <code>todoList</code> state is not updated by <code>setTodoList</code>. WHY?