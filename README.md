When two or more components need access to the same state, we move the state into their common parent. This is called "lifting state up".

In time, we'll need to access **score** to determine the highest score and total score count that we will be displayed in the header.

Steps:
1. Move the **score** state into their common parent **App** component.
2. Convert **Counter** class component into functional component.