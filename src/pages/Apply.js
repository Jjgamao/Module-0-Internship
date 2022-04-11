// import React, {useRef} from 'react';
// import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap';

// import '../assets/styles/apply.css';
// import Footer from '../Component/Footer';
// import arrowRight from '../assets/arrow-right-circle.png';
// import emailjs from 'emailjs-com';

// const Apply = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     console.log(e);
//     e.preventDefault();

//     emailjs.sendForm('', '', form.current, '')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <div>
//         <div className="apply-container">
//           <a href="/">
//             <Image src={arrowRight} className="back-btn fluid" style={{ position: 'absolute', top: '10px', left: '10px'}}/>
//           </a>
//           <h2 className="intro">MODULE 0 INTERNSHIP APPLICATION</h2>
//           <Container className="form-container">
//             <Form ref={form} onSubmit={sendEmail} method="post">
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
//                     <Form.Label>NAME</Form.Label>
//                     <Form.Control type="text" name="name" />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
//                     <Form.Label>CONTACT NUMBER</Form.Label>
//                     <Form.Control type="number" name="contact_number" />
//                   </Form.Group>
//                 </Col>
//               </Row>         
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
//                     <Form.Label>EMAIL</Form.Label>
//                     <Form.Control type="email" name="email" />
//                   </Form.Group>
//                 </Col>
//               </Row>  
//               <div>
//                 <label className="upload-label" htmlFor="upload-resume">
//                   Upload resume
//                 </label>
//                 <input id="upload-resume" style={{visibility:"hidden"}} type={"file"} />
//               </div>
//               <Button type="submit" className="apply-now-btn">
//                 APPLY NOW
//               </Button>
//             </Form>
//           </Container>
//         </div>
//         <div className="footer-container">
//           <Footer />
//         </div>
//     </div>
//   );
// }

// export default Apply;