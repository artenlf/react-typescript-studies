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
