function Hello (){
  let myName = "Tanuja"
let number=456;
  let fullName = () => {
    return "Tanuja Ranjan";
  }

  return <p>Messages: {number} I am your student {fullName()}</p>
}

export default Hello;
