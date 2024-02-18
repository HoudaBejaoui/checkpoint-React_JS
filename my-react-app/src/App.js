import React from 'react';  
import { Container, Navbar, Nav, Card, Form, Button, Row, Col } from 'react-bootstrap';

{/*useState*/}
{/* const [email,setEmail]=useState("") console.log(email) */}
const App = () => {
  return (
    <>
      <div className="App">
        {/* Navbar Section */}
        <Navbar style={{ backgroundColor: '#F2D2BD' }}  >
          <Container>        
            <Navbar.Collapse className="justify-content-end">
              <Nav >
                <Nav.Link href="#home" style={{ fontWeight: 'bold', color:'#582900' }}>Home</Nav.Link>
                <Nav.Link href="#features" style={{ fontWeight: 'bold', color:'#582900' }}>Features</Nav.Link>
                <Nav.Link href="#contact" style={{ fontWeight: 'bold', color:'#582900' }}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content Section */}
        <Container className="mt-3">
          {/* Heading */}
          <h1 className="text-center mb-4">Delicious Cupcakes Collection</h1>

          {/* Form Section */}
          <Form className="mb-3">
            {/* Email Input  onChange={(e)=>{setEmail(e.target.value)}}*/}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* Submit Button onDoubleClick={()=>{console.log("click")}}*/}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* Cards Section */}
          <Row className="justify-content-center">
            <Col sm={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://stylesweet.com/wp-content/uploads/2023/06/OrangeCreamsicleCupcakes_featured.jpg" style={{ height: '280px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Card.Title>Vanilla Cupcakes</Card.Title>
                  <Card.Text className="text-center">
                    Filled with vanilla whipped cream, covered with vanilla buttercream frosting.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://itsybitsykitchen.com/wp-content/uploads/2019/09/cherry-cupcakes.jpg" style={{ height: '280px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Card.Title>Cherry Cupcakes</Card.Title>
                  <Card.Text className="text-center">
                    Filled with maraschino cherries, covered with creamy maraschino cherry buttercream.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://bakeitwithlove.com/wp-content/uploads/2021/08/Chocolate-Cupcakes-Mary-Berry-sq.jpg" style={{ height: '280px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Card.Title>Chocolate Cupcakes</Card.Title>
                  <Card.Text className="text-center">
                    Filled with natural cocoa powder, covered with chocolate buttercream.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
