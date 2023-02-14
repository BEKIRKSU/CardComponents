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

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* This map function expects a function as an input inside the
parantheses. So we're calling a function, and then passing it 
a function. This is kind of the fundamentals of what might be 
called functional programming. Where instead of passing values 
around your code, you're passing functions into functions...even
into functions. You can hav many levels of functions being passed
around.
So what functionality do we want happening to each of our contacts.
So we'e made a new function at the top outside of functionApp
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