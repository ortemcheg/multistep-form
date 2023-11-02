# Multistep form

## Abstract

Implements Multistep form according to the following specification:

### Design:

[As presented in Figma](https://www.figma.com/file/KsJexV6VyuYDTAzjcXlZ9t)

### Expected Behaviour:

> Step 1 should include the following fields:
>
> - username (string, required, 4-12 characters)
> - email (any valid email address required)
> - phone number (any valid phone number, required)
> - country (required, get the list of countries from any API you prefer)
>   Step 2 should include the following fields:
> - password (password, required, 8-16 characters)
> - repeat password (password should match the password field)
>   Step 3 should display values from the fields:
> - username
> - phone
> - country
>   Any library can be used for this task with no restrictions.

### My notes on the specification

- The spec asks for a phone field on the first step, but the design doesn't include it. I'll include the phone field.
- The spec doesn't mention what to do if the request to fetch the list of countries fails. In that case, I'll probably display a text field instead of a select input.
- The design doesn't show a hover state for the button

## Implementation

### Routing

The spec doesn't require the Steps to be bookmarkable, nor does it demand to restore the formdata should the user abandon filling the form at any step. This makes using routing libraries (such as `React Router`, `TanStack Router` etc.) an overkill. We'll rely on the conditional rendering instead.

### State management

The app's state isn't complex, and there's no need to pass any part of it down multiple levels. We'll use `useReducer` for state management and `createSlice` from `Redux Toolkit` to simplify writing the reducer and actions for `useReducer`. Additionally, using `RTK` will also signal to the reviewers that I'm familiar with `Redux` 👨🏼‍💻

### Data validation

We'll utilize `zod` to parse data from external sources, including forms and APIs. This approach provides robust protection against runtime type errors without the need for overly defensive programming. Additionally, `useForm` can integrate `zod` schemas to streamline form validation, eliminating the need to implement separate validation rules. As a bonus, this approach will also enhance the ease of working with `TypeScript`

### Styling

## TODOs

### Clean-ups

[] Add a spinner for the loading state for the Select component. (? Extract fetching countries to Select 🧐?)

[] Eradicate MUI, including it was a mistake 🤷🏼‍♂️. Use CSS Grid for the layout.

[] Use CSS custom props (variables)

[] Implement testing

[] Make changes to the project structure

[] Use `useImperativeHandle` to give `useForm` control focus on the `Select` component

### Futher optimizations

- Instead of rendering the entire form at each step, we could choose to render only the fields, leaving the button and the form element in the DOM consistently. However, this approach would significantly complicate validation when using useForm 🤔
- Since we only have 200 items on the list of countries, there is no need to implement virtualization.
