import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import UserDataService from "../services/user.services";

const AddUser = ({ id, setUserId }) => {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || email === "" || city === "" || age === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newUser = {
      age,
      city,
      email,
      name,
      gender,
    };
    console.log(newUser);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newUser);
        setUserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.addUsers(newUser);
        setMessage({ error: false, msg: "New User added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setAge("");
    setCity("");
    setEmail("");
    setName("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setAge(docSnap.data().age);
      setCity(docSnap.data().city);
      setEmail(docSnap.data().email);
      setName(docSnap.data().name);
      setGender(docSnap.data().gender);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserName">
            <InputGroup>
              <InputGroup.Text id="formUserName">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formUserAge">
            <InputGroup>
              <InputGroup.Text id="formUserAge">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formUserCity">
            <InputGroup>
              <InputGroup.Text id="formUserCity">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserEmail">
            <InputGroup>
              <InputGroup.Text id="formUserEmail">D</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setGender("Male");
                setFlag(true);
              }}
            >
              Male
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setGender("Female");
                setFlag(false);
              }}
            >
              Female
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
