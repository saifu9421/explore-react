export default function Friend ({friend}){
    console.log(friend);
        const {name, email} = friend;
       return(
        <div className="box">
              <h4>name: {name}</h4>
              <p>Email: {email}</p>
        </div>
       )
}