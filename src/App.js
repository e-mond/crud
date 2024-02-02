import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {

  // formData state, witha s stater function called SetformData
  //use state with a function to change whatever is in the form
  // This stores the data in the form
  const [formData, setFormData] = useState({name: "",age: ""});

  const [users, setUsers] = useState([])
  
  const handleChange = (e) =>{
    let { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(formData);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
        setUsers([...users, formData ]) //because the user is in an error, we call it using the []. This is the Form Operator
    console.log(users,formData,"data ff") // Console.log user state to see if it's been updated

  };


  const handleDelete = (userName)=> {
    let filteredUsers = users.filter((user)=>(user.name!==userName))
    setUsers(filteredUsers)

  }
  return (
    <Container>
      <Row>

        <Col md="12">

          <h1>SIGN UP</h1>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            <br />

            <label>Age</label>
            <br />
            <input
              type="text"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              name="age"
            />
            <br />

            <br />
            <input type="submit" /> 
            {/* The Event listerner i.e OnsUbmit helps us to submit the form */}
          </form>
        </Col>
      </Row>

      
       {/* Displaying Users */}
       {/* <Row>

        <Col md="12">
          {users.map((user)=>(<>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
          </>))}


        </Col>
      </Row> */}
        
      

       {/* Deleting */}
       <Row>

        <Col md="12">
          {users.map((user)=>(<>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
          <button onClick={()=>{handleDelete(user.name)}}>Delete</button>
          </>))}


        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
