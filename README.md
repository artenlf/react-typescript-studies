# react-typescript-studies

Lesson 1: we've created our first component using an older method called Class components.

My opinion: Overall, it's easier to work with Function Components. Also, there's less verbose and it's easier to read and understand.

Research about the topic: as function components became more and more popular, React team shifted updates to improve its features, allowing stateful components to be declared as function components. On earlier stages, React didn't support stateful function components, meaning its usage of it was limited to stateless components. Developers used Class components when their projects required some state change. That changed dramatically and moving forward React developers tends to use fewer to no Class Components.

Lesson 2: we've created our Form component using input for text and time and imported and placed our Button component inside its rendering tree.

Lesson 3: we've created a List components to show a topic of study and its timer. The next step is to dinamically show our list items.

Lesson 4: our lists are now showing dinamically, using a map method to call objects inside our tasks array. The function then receives 2 parameters one for the object properties and a key that we will not be using at the time, but will be very useful when we start working with unique ids on our project.

Lessons 5, 6: we've created and implemented styles using SASS. We also installed and configured CSS Module to avoid class conflicts on our project.

Lesson 7: finished CSS modules implementation.

Lesson 8: we worked with props, using button text both as a conventional prop and as a children, inside the tag.

Hint: I've had troubles trying to call the props.children property. The fix was declaring the Type "<{ children?: React.ReactNode }>", after class component declaration.

Lesson 9: on our List component we needed to implement Single Responsability Principle (SRP), which wasn't the case so far. To do this, we've created Item components to be responsible for our li tag, as we also worked with props in different ways, calling it directly on function parameters. We also used destructuring on our List return tree, by spreading it's props --> {...someParameter}.

Hint about spreading operators: Depending on scope this is not recommended, given some unexpected behaviors while using it on props-bloated components or third-party API's. On our case it was a way to reduce verbose and it's a fine.

Lesson 10: we've added our Stopwatch and Clock components to complete the static part of our project. Next step we'll be working with States to make our project a dynamic app.

Lesson 11: we've created our first useState function and learned about its syntax, using an Array composed by first an index as an State and then a function as a setState.

Lesson 12: we've created our first useState in Class component and learned about syntax e scope issues using Class components. Whenever we are triggering some event using Classes, we have to hard bind the this value to a function using bind(this) method. It's an old issue with JavaScript and the main reason why the community shifted to Function components.

Lesson 13: We learned how TypeScript can be useful. We've created an interface to describe complex types and we've used props with state to handle state changes on multiple components.

Lesson 14: We imported uuid package to work with unique hash ids on our tasks. We implemented properties on our type object.

Lesson 15: we've created a function to select a task and show it on the clock. To do that we had to use our App.tsx so it could handle the states properly, since 2 unrelated components cannot communicate each other about state events by default (see hint).

Lesson 16: To make it work properly we created interfaces both on List and Item (this, using inheritance types (through "extends") from our type object) and passed as parameters of our function properties on component return.

Hint: By default means that we have to use global state management. There's multiple ways to it. One way is a React Hook called "useContext". more about it here: https://dev.to/ms_yogii/usecontext-for-better-state-management-51hi

Lesson 17: using a ternary opperator we've granted function to select a single Task. We also added visual feedback using a class declaration that also uses a ternary opperator to check when to be applied.

Lesson 18: we've created a time converter function in our common project folder, which will be used on our stopwatch convertions.

Hint: As the name might suggest, common project folder usually nest common functions used in multiple parts of the project.

Lessons 19 and 20: to make our stopwatch see state changes on our tasks time we had to apply a Hook called useEffect, otherwise the its component would be rendered once stay the same. In case we applied other solutions like an if statement, it would render indefinitely (infinite loop), making our app crash. Thus, we've put selected variable inside the useEffect dependency array (which is its second parameter) and by doing this we enabled useEffect to be "Observable" changes on the State every time they happen.

Hint: to read more about useEffect Hooks: https://www.w3schools.com/react/react_useeffect.asp

Lesson 21: we've created an interface for the clock to display time of a task in our stopwatch. Using "downlevelIteration" on our tsconfig.json we were able to iterate our string array containing decimals and units for minutes and seconds, thus allowing us to return it on our render tree.

Lesson 22: we've created a function onClick in our custom Button, defining a type and also calling this function inside default onClick function in default button tag. We also implemented a countdown function using recursion technique to decrease time until it hits zero.

Hint: whenever we have a custom element, we also lose all default behaviors and functions, thus forcing us to create and declare (bind) functions to default ones, like: onClick={onClick}.

Lesson 23: we've created an endTask function to handle changes whenever a task is completed. We also added visual feedback on our application by using a ternary to apply a class on completed tasks. Finally, whenever a task is completed, user can't select it anymore.

Lesson 24: we refactored all our Class components to function components.

Note: we've mixed function expressions between traditional and arrow function expressions for study porpuses.
