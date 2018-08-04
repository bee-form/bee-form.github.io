# Why another form library

Because current libraries do not deliver what we need. Form support is a very very complicated matter, and yet, with the lack of native support for Async operations, scoping, parsing/formatting, developers are often left struggling themselves to handle those matters, and workarounds are all around.

One important part of deciding to use a library is, that library has to be able to take you all the way, or don't use it at all, because if the library doesn't support anything, it's because it's fundamentally unsuitable for that feature, and you won't be able to hack and insert that feature in.

Nowadays, it often a pain to start learning about a form library because of all the complexity it imposes to users and yet, after all the hassles and pain, users end up realising that their required feature is missing and they are totally forced to continue using the lib with their own hacks/workarounds...

Now, let's look at some of the most popular libraries we have today and what they have to offer (or lack):

## Redux form:

 - Async validation: limited support, only validate on blur (not on typing) and you will have to explicitly declare fields that need to do async check in `asyncBlurFields` form property.
 - Debounce: Not supported, you will have to manually add debounce support to input's onChange, and this, of course, does not natively work with other form mechanism. For example, what about user press tab before debouncing has finished, would Redux form's async validation ends up using old value to send and validate with server?
 - Parsing/formating: Limited support, Redux form does have the term "normalising" for this, but it does not handle parse error, that's why you won't be able to use normalising to change from string to number, or date, because as soon as you type "12.", you value will be reset to "12", and you can't finish your decimal number.
 - Scoping (subform): Limited support: When dividing a form into sub forms, you will have to change validation code, which is not designed to be modulized and the change can be very tedious and discouraging. Also, the subform (FormSection) is not awared of the error of fields inside it, so you won't be able to validate sections separately.

## Formik

 - Async validation: limited support, I think Formik support for this is even worse than Redux form. The form engine doesn't do async validation at all, but leave you with a way to change the validated status of the field (https://gist.github.com/jaredpalmer/a8faaab12bc37e6a160a3c9549664f0b), this leads to numerous problems like: if network is slow, user may click submit before server's error response arrive, coding for async validation is tedious, error-prone, and less likely to be able to reuse.
 - Debounce: Not supported, like Redux form, you will have to do it manually and out of form's support.
 - Parsing/formating: Not supported at all, you will have to do it outside of your form, probably at API level.
 - Scoping (subform): I can't find any document about this. Probably not supported.

## Formsy

 - Async validation: No support, you will have to do it manually with your form's data before submit.
 - Debounce: Not supported. Again, like above forms.
 - Parsing/formating: I can't find any document about this. Probably not supported.
 - Scoping (subform): Not supported, good luck with hacks.
 
## React final form

 - Async validation: Much better support, yet I don't think the support is well integrated into core form logic, check out (this example)[https://codesandbox.io/s/wy7z7q5zx5] (from React final form document). The first field name is required and has async validation, if you has value in name field, keep your cursor at name field, but your mouse if at the submit button, press backspace rapidly to remove all name field's value, and right when you remove them all, use your mouse/trackpad to press submit button, and you will see the empty (undefined) name pass validation and form values are submitted.
 - Debounce: Not supported.
 - Parsing/formating: Limited support, similar to Redux form.
 - Scoping (subform): I can't find any thing about this, it's weird because Redux form has some support for this and Erik should have some idea about how important this is for building complicated forms.
 
## What does Bee form have to offer?

 - All features mention above (Async validation, debounce, parse/format, scoping) together with many other features that are not mentioned (array/list data, modulized form configuration...) are natively supported by Bee form. They all fused together, work well with each other to help you successfully/gracefully deal with your complicated form requirements.
 