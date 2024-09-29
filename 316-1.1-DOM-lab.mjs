// part 1
// Menu data structure
export var menuLinks = [
  {text: "about", href: "/about"},
  {text: "catalog", href: "#", subLinks: [
    {text: "all", href: "/catalog/all"},
    {text: "top selling", href: "/catalog/top"},
    {text: "search", href: "/catalog/search"},
  ]},
  {text: "orders", href: "#" , subLinks: [
    {text: "new", href: "/orders/new"},
    {text: "pending", href: "/orders/pending"},
    {text: "history", href: "/orders/history"},
  ]},
  {text: "account", href: "#", subLinks: [
    {text: "profile", href: "/account/profile"},
    {text: "sign out", href: "/account/signout"},
  ]},
];

export function DOMdolla(menuLinks){
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Hint: Assign a string that uses the CSS var() function like this: "var(--main-bg)".
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
// Hint: Use the Element.classList API.
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
menuLinks.forEach((link) => {
  let newLink = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute("href", link.href);
  // Set the new element"s content to the value of the text property of the "link" object.
  newLink.innerHTML = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newLink);
});
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu")
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%"
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Throughout this process, note that you are also becoming accustomed to another important skill: working with another developer"s code. Many of these variables, elements, CSS classes, and other features have already been developed, and you are simply working with them for your own purposes.
// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

//Pt4
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Attach a delegated "click" event listener to topMenuEl.
// The first line of code of the event listener function should call the event object"s preventDefault() method.

topMenuEl.addEventListener("click", ( event ) => {
  event.preventDefault()

  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches("a")) {
    return
  }
    // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent); 
  // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  topMenuLinks.forEach(link => {
    link.classList.remove("active");
  });
  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  event.target.classList.add("active");

  // Hint: Removing a non-existent class from an element does not cause an error!
  // Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. Here is what it should look like so far, with "CATALOG" active:

  // Part 5: Adding Submenu Interaction
  // Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
  // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  // If the clicked <a> element"s "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  let clickedLinks = menuLinks.filter(links=> links.text === event.target.textContent)

  console.log(clickedLinks)
  clickedLinks.forEach(clickedlink => {
    if (clickedlink.subLinks){
      subMenuEl.style.top = "100%"
      buildSubmenu(clickedlink.subLinks);
      // Otherwise, set the CSS top property of subMenuEl to 0.
    } else {
      subMenuEl.style.top = "0%"; 
      subMenuEl.innerHTML = "";
    }
});
});

// Hint: Caching the "link" object will come in handy for passing its subLinks array later.
// Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.
// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
// Clear the current contents of subMenuEl.
const buildSubmenu = (subLinks) => {
  subMenuEl.innerHTML = "";
  // Iterate over the subLinks array, passed as an argument, and for each "link" object:
  // Create an <a> element.
  // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
  // Set the element"s content to the value of the text property of the "link" object.
  // Append the new element to the subMenuEl.
  subLinks.forEach(sublink => {
    const newSubLink = document.createElement("a");
    newSubLink.setAttribute("href", sublink.href);
    newSubLink.innerHTML = sublink.text;
    subMenuEl.appendChild(newSubLink);
  });
}
// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.
//Attach a delegated "click" event listener to subMenuEl.
subMenuEl.addEventListener("click", ( event ) => {
  event.preventDefault()
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches("a")) {
    return; 
  }
  // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent); 
  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = "0%";
  // Remove the active class from each <a> element in topMenuLinks.
  topMenuLinks.forEach(link => {
    link.classList.remove("active");
  });
  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  if (event.target.textContent === "about") {
    mainEl.innerHTML = "<h1>About</h1>";
  }
});
}

// Part 6: Completion and Code Review
// Test your menu! If it works in a way that makes sense, you have likely been successful. Your instructor has been provided with a completed version of this assignment, and time permitting, will do a brief code review so that you can make comparisons with your own approaches.
// Remember, functionality is key! There are many ways to arrive at the same solution in development, and often the difference in syntax between two solutions is inconsequential. If it works, good job!
// Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.