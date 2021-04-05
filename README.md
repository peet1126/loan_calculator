# Exercise instructions :loan_calculator:

This exercise is not just a simple test to determine if you can code; we want it to be as close as possible to a task you would complete at work. The product requirements and designs we provide are of the same style that an engineer would get. We would like this exercise completed with React; however, feel free to use any [starter-kits](https://github.com/facebook/create-react-app) or libraries that you wish. If you've never used React before, we recommend [this tutorial](https://reactjs.org/tutorial/tutorial.html); it should teach you enough to be able to complete the exercise.

The code challenge will be assessed with the following considerations in mind: adherence to product and design requirements, code readability and organization, performance and bundle size, accessibility, and lack of defects.

# Product requirements

## The Problem

We want users to be able to easily evaluate loan options in real-time so that they can find a loan option that satisfies their financial requirements.

### What are our goals with this project?

- We would like the user to be able to see monthly payment, loan amount, interest rate (APR), total loan cost, interest, collateral needed in USD, and collateral needed in crypto units.
- We would like the user to be able to input loan amount, loan term, [loan-to-value](https://www.investopedia.com/terms/l/loantovalue.asp), and repayment option.
- We would like the loan calculator to be easy to use and visually appealing.

## User focused requirements

**Designs**:

- https://scene.zeplin.io/project/5d03cb2a62a0fe5d3eff8439/screen/5d03cb4e89f0bc5d92739894
- https://scene.zeplin.io/project/5d03cb2a62a0fe5d3eff8439/screen/5d03cb4e7bb35419d6e9a309

**Calculator Form**:

- [] As a user, I would like to be able to input the loan amount.
  - [] The loan amount should be formatted to currency
  - [] The loan amount should be over 5k and less than 25 million, otherwise show an error on blur
- [] As a user, I would like to be able to select the loan term by using a slider.
  - [] Default the start value to `12`
  - [] The loan term should start at `3` and end at `36`
- [] As a user, I would to to be able to select the LTV ratio by clicking radio buttons
  - [] Default the start value to `60%`
  - [] Options include `30%`, `40%`, `50%`,`60%`, and `70%`
- [] As a user, I would to to be able to select the repayment option
  - [] Default the start value to `60%`

**Calculator Details**:

- [] As a user, I should be able to see the monthly payments. Monthly payments should account for interest only loans vs. principle and interest.
- [] As a user, I should see the loan amount.
- [] As a user, I should see the interest rate. Assume a base interest rate (APR) of 10% for a 60% LTV.
  - [] Every 10% decrease in LTV results in a 1% drop in APR.
  - [] Every 10% increase results in a 1% increase in APR
- [] As a user, I should see total loan cost (loan amount + interest)
- [] As a user, I should see total interest over the course of the loan
- [] As a user, I should see the number of tokens required to satisfy the USD collateral requirements

## General

Feel free to use any public API to retrieve pricing information, or if you don't feel like searching, [this](https://min-api.cryptocompare.com/pricing) should provide the data you need. The free plan should be sufficient.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
