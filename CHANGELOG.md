# myuw-notifications versions

## 1.4.0 - not yet released

+ Reflect priority status on notifications shown in the modal
+ Updated dependencies via `npm update`

## 1.3.4 - 2020-09-08

+ On mobile views, redirect to See-all page, if the link was provided, rather than display the modal.
+ Update modal styles on mobile views, if displayed

## 1.3.3 - 2020-08-17

+ Display count of notifications in bell
+ Hide empty buttons in a notification

## 1.3.2 - 2020-08-11

+ Automatically close the notifications menu when tabbed outside of it
+ Access elements within notifications using screen reader

## 1.3.1 - 2020-07-29

+ Remove notification from DOM when dismissed from outside of the component

## 1.3.0 - 2020-07-27

+ Handle keyboard events, allow focusing on the next or previous element
+ Ran `npm audit fix`, fixing some vulnerabilities in node modules

## 1.2.1

+ Demo page buttons (get and add notifications) now work properly
+ Improved accessibility
  + fixed low contrast when "All caught up"
  + added outline/darker background for buttons when in focus state

## 1.2.0 - 2019-03-13

+ Optional attribute to set a limit on the number of notifications displayed in the list
+ Enable scrolling if many notifications
+ Delivery pipeline
+ Contributing guidelines

## 1.1.0 - 2019-01-17

+ Demo page now includes adding new notifications via a form
+ Individual notifications are now handled by a child component
  to more clearly separate functionality and markup/styles,
  and to simplify DOM manipulation
+ Documented hooking into notification dismissal event
+ Broader support for existing MyUW notification data model (moreInfoButton, confirmButton)
+ Parent component (myuw-notifications) keeps track of unique notification IDs
+ No duplicate notifications
+ Stop observing attributes that can't or won't ever change
+ Changed IDs for demo notifications to strings to reflect the expectations of the data model

## 1.0.0

Initial release
