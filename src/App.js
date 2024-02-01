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
        setUsers([...users, formData ])
    console.log(users,formData,"data ff")

  };

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
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
