# React tutorials

## Effects

useEffect() hook. You can to speficy a function that execute when one or more user speficed dependacies changed. In other words the function that live inside the useEffect hook does not re-run everytime the component re-render, it only executes when one of the dependacies changed.\
eg: App component (App.js)

useEffect() hooks could also use, when you have a common code block that needs rerunning everytime some spefic condition met or changed. eg: state change.\
eg: Login component (Login.js)

## Reducers

useReducer() is an alternative to useState() but it's more powerful state management than the useState() hook. For an example if you update a state which depends on another state, you should use reducuer instead of useState as useState may not have a latest up to date state of the dependant state.\
eg: Login component (Login.js) uses email reducer and password reducer.

## Context
React context manage the state behind the scene where we can directly change the state from any component in the app and pass the state directly to any component in the app without going throgh the component tree/ prop chain. 