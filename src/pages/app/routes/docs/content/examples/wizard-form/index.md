# Wizard Form (Airline tickets)

Wizards are common requirement these days, but these requirements often lead to hazardous code spaghetti if not handled properly. Luckily, Bee-form's native scoping feature fits very well into these requirements and can help you create complicated wizards very easily. Here is what we need to do:

 1. Separate your form data into different groups of sub-data, for example, if you are creating an airline booking ticket wizard, you may want to have your data divided into: flight, guests, time, seat_positions, checkout
 2. Create a form object on the parent component which hold all form data, and have validation for all groups.
 3. With each step of the wizard, use `fv.scope("...")` method to create a sub-form view to look into that specific group.
 4. In each step, with the scoped-down form view, you can bind values and check validation. The validation result is also scoped down, which means it will only check for validity of values in that specific group.
 
Here is how it works:

!!demo: sample_airline.jsx

