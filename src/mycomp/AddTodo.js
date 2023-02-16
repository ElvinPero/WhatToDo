import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or description cant be blank');
        }
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className='container my-3' >
            <Form onSubmit={submit}>
                <h3>Add Todo</h3>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title here" />
                    <Form.Text className="text-muted">
                        We'll never share your details with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Type description " />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddTodo;