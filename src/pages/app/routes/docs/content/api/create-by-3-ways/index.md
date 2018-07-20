# 3 ways to create form

There are 3 ways to create a Bee Form: using createForm() method, using connectForm() method (HoC), and using <Form/> component. Each with its own pros and cons, so you may choose the best that suit your needs.

## 1. The createForm() method

The `createForm()` method is the most verbose way among the 3, and it uses `forceUpdate()` which some of you may not like, however, it provides full control over the created form, and also demonstrate the "light-weight" nature of the core form engine.

!!demo: sample_createForm.jsx

## 2. The connectForm() method

The `connectForm()` method is more succinct, and it resembles the HoC way that many people are familiar with, so you would probably like to use it the most 

!!demo: sample_connectForm.jsx

## 3. The <Form/> component method

The <Form/> component method is the shortest way of 3, and it 

!!demo: sample_Form_component.jsx

