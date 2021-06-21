import { describe } from "jest-circus";
import { createOnepost, getPostbyId, updatePostbyId, deletePostbyId, getAlll } from "@app/services/post";
import { createPost, getPost, updatePost, deletePost, getPosts } from "../post";

jest.mock('@app/services/post');

describe("create post",()=>{
    test('createpost', (done) => {

        createOnepost.mockImplementation(() => 'valid');
    
        const req = {
          body: {
            title: 'wings',
            content: 'the wings of fire'
          }
        };
    
        const res = {
          status: function () {
    
            return this;
          },
          json: (input = {}) => {
            if (input.message === 'Post created successfully!') {
              done();
            }
            else {
              done(new Error('Was expecting different input'));
            }
          },
          header: () => { },
        };
        createPost(req, res);
})

//getpostbyid

test('getpostbyid', (done) => {

    getPostbyId.mockImplementation(() => 'valid');

    const req = {
      params: {
        id: '60cc602422d319003c83dcab'
      }
    };

    const res = {
      status: function () {

        return this;
      },
      json: (input = {}) => {
        if (input.message ==='Post fetched.') {
          done();
        }
        else {
          done(new Error('Was expecting different input'));
        }
      },
      header: () => {
    },
    };
    getPost(req, res);
})

//updateposbyid
test('updatepostbyid', (done) => {

    updatePostbyId.mockImplementation(() => 'valid');

    const req = {
      params: {
        postId: '60cc602422d319003c83dcab'
      },
      body:{
        title:"hello",
        content:"world"
      }
    };

    const res = {
      status: function () {

        return this;
      },
      json: (input = {}) => {
        if (input.message ==='Post updated!') {
          done();
        }
        else {
          done(new Error('Was expecting different input'));
        }
      },
      header: () => {
    },
    };
    updatePost(req, res);
})

//deletepostbyid
test('deletepostbyid', (done) => {

    deletePostbyId.mockImplementation(() => 'valid');

    const req = {
      params: {
        postId: '60cc602422d319003c83dcab'
      },
      userId:'60cc4d83ce4ea5003cede136'
    };

    const res = {
      status: function () {
        return this;
      },
      json: (input = {}) => {
        if (input.message ==='Deleted post.') {
          done();
        }
        else {
          done(new Error('Was expecting different input'));
        }
      },
      header: () => {
        // myHeaders.append("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2M0ZDgzY2U0ZWE1MDAzY2VkZTEzNiIsImlhdCI6MTYyNDA3NDkyMSwiZXhwIjoxNjI0MDgyMTIxfQ.P26Y18L2FY25oeOYFFLuxEmKB7Cl1q-WuVac1bxoAFY");

    },
    };
    deletePost(req, res);
});

//getallpost

// test('getposts',(done)=>{
//     getAlll.mockImplementation(()=> 'valid');
//     const req = {
//         query:{
//             page:1
//         }
//     };
//     console.log("get")
//     const res = {
//       status: function () {
//         return this;
//       },
//       json: (input = {}) => {
//         if (input.message === 'posts fetched') {
//           done();
//         }
//         else {
//           done(new Error('Was expecting different input'));
//         }
//       },
//       header: function () {
//         return this;
//       },
//     };
//     getPosts(req, res);
//   });




})