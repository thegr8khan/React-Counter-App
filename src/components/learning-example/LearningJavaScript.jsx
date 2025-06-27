const person = {
  name: 'Mohammad',
  age: 30,
  email: 'moh.nkhan@outlook.com',
  profiles: ['Twitter', 'Facebook', 'Instagram'],
  printProfile:() => {
    person.profiles.map(
        profile => console.log(profile)    
    )
    console.log(person.profiles[0]);
  }
}


export default function LearningJavaScript() {
  return (
    <>
        <div>
            {person.name} is {person.age} years old and can be contacted at {person.email}.
        </div>
        <div>{person.profiles[0]}</div> 
        <div>{person.printProfile()}</div>
    </>
  );
}