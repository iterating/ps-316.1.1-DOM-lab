// part 1
// Menu data structure
export var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

export function DOMdolla(menuLinks){
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
// Hint: Use the Element.classList API.

console.groupEnd();
console.group("pt 2");

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
  // Set the new element's content to the value of the text property of the "link" object.
  newLink.innerHTML = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newLink);
});
}

DOMdolla(menuLinks);