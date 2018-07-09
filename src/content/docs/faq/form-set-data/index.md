### Can I set form's data after retrieving it from server?

Yes you can, there are 2 ways to do so:

 1. Call `form.setData(newData)`
 2. Call `fv.pushValue(newData)` (with fv is root fv).
 
Either way will apply new data into eventBus's state