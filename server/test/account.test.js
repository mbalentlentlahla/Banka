// import chai from 'chai'
// import chaiHttp from 'chai-http'
// import app from '../app'
// import request from 'supertest'

// const { expect } = chai
// chai.use(chaiHttp)

// let token
//   //now let's login the user before we run any tests
//   before("User Signup", (done) => {
//     const user = {
//         firstName : "Joseph",
//         lastName : "joe",
//         email: 'joe@gmail.com', 
//         password: '123456'
//       }
//       chai.request(app)
//       .post('/api/v1/auth/signup')
//       .set("Content-type","application/json")
//       .set("Accept","application/json")
//       .send(user)
//       .end((err, res) =>{
//           console.log(res.body)
//         token = res.body.token
//         expect(res.body.status).to.equal(201)
//         expect(res.body).to.have.property('status')
//         expect(res.body).to.have.property('message')
//         expect(res.body).to.have.property('data')
//         expect(res.body).to.be.an('object')
//         done();
//       });
//   });

// describe('Create account', () =>{
//     it('An authorized', () =>{
//         chai.request(app)
//         .post('/api/v1/accounts')
//         .send({
//             accountNumber : 123456,
//             firstName : "Joseph",
//             lastName : "Joe",
//             email : "joe@gmail.com",
//             type : "current",
//             openingBalance : 300000
//         })
//         .end((err, res) =>{
//             expect(res.body.status).to.be.equal(401)
//             expect(res.body).to.have.property('error')
//             expect(res.body).to.have.property('status')
//             expect(res.body).to.be.an('object')
//         })
//     })
// })