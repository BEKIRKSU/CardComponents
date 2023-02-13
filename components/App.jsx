import React from "react";
import Card from "./Card";
import contacts from "../contacts";



//We can comment out all of the Cards below and we tap into
//to that contacts array. Which is imported here. And then we call
//the map function (see below).

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
// This function is going to create a new card component. So inside
//it we return a custom card component and pass it some properties.
//For example the name property. Which we know the card can handle
//and will put it in the <h2>, you can see this in he Card.jsx file.
//So if we write contact inside the function and then call a property
//such as setting the name property to contact.name. Look aboe.
//Now we pass the entire function createCard into the map function.
//Look below.
// At this point what the map function does is it loops through the
//arrays of contacts and for eery item that exists in the array it
//calls the createCard function and it passed oer each of the objects
//inside the array.
//That means the first time it loops aroun it passes the entire first
//element in as the contact and then we can get ahold of it inside our
//return statement and get ahold of the name property which gets put
//into our card component right here.
//You can also go and elaborate on that by adding the image property
//and set that equal to contact.image. Look aboe.
//As you add these they show on the right hand side.
//We can also add other properties, such as tel, and email. Look aboe.

//Now, we hae the card component which is getting all of those pieces
//of information using the properties from our contacts.js, from the
//JS objects with each of their names. And that is being sent oer as the
//props for our custom card component.

//Now the map function is a loop. It does the same thing for eery object
//inside the contacts.js array. In this case we want to efficiently render
//components for eery single component rendered using a loop such as the
//map function. We will hae to gie those components a property that has to
//be called 'key'. And this property has to be unique amongst each of these
//card components thats being created using this loop.
//As you'll see, inside our contacts.js file we hae an id property which
//is unique for each contact, and so we will use this as the key.
//Look at the Card component aboe at how we add the key property.

//The key prop has be spelt exaclty like 'key' and the \/alue
//could be a string, a number, but it must be unique across
//all of the repeated components, so in this case our cards.
//So the key prop corresponds to the id's of the Card components.

//Now this key prop might not show up in DeTools - \/ideo413 minute 8-ish.
//The reason is because he key property for each React component is a
//special property. And it's used to ensure the right order of items goes
//into the tree, it's used so that it can render each of these components
//efficiently when theyre being created from a loop, but it is not something
//that we can tap into.
//If we actually want to show that id, which comes from contacts, we hae
//to create our own custom prop. e.g. id={contact.id}. This seems
//repetitie because we already hae this prop called key that is {contact.id}
//but we hae to remember that this is not for us to use.
//So now if you go to Card.jsx and change props.key to props.id eerything
//works fine. Interesting.
//Just keep in mind that DeTools is ery useful for debugging problems like
//this.

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* This map function expects a function as an input inside the
parantheses. So we're calling a function, and then passing it 
a function. This is kind of the fundamentals of what might be 
called functional programming. Where instead of passing \/alues 
around your code, you're passing functions into functions...e\/en
into functions. You can hae many leels of functions being passed
around.
So what functionality do we want happening to each of our contacts.
So we'e made a new function out the top outside of functionApp
and we called it createCard.  */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

//JUST LOOK AT THE CODES RUNNING ON THIS PAGE, IT EXPLAINS IT ALL.
