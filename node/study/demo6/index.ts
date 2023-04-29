import { IncomingHttpHeaders, request } from "http";
import { RequestOptions } from "https";

// const req = request(
//   {
//     host: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//     method: "GET",
//   },
//   (response) => {
//     console.log(response.statusCode);
//   }
// );

// req.end();

// import { createWriteStream } from "fs";
// const fileStream = createWriteStream("./file.txt");

// const req = request(
//   {
//     host: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//     method: "GET",
//   },
//   (response) => {
//     response.pipe(fileStream);
//   }
// );
// req.end();

// import { request } from "http";

// const req = request(
//   {
//     host: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//     method: "GET",
//   },
//   (response) => {
//     const chunks: Uint8Array[] = [];
//     response.on("data", (chunk) => {
//       chunks.push(chunk);
//     });
//     response.on("end", () => {
//       const result = Buffer.concat(chunks).toString();
//       console.log(result);
//     });
//   }
// );

// req.end();

// interface Response {
//   data: object;
//   headers: IncomingHttpHeaders;
// }

// function performRequest(options: RequestOptions) {
//   return new Promise((resolve, reject) => {
//     request(options, function (response) {
//       const { statusCode, headers } = response;
//       if (statusCode >= 300) {
//         reject(new Error(response.statusMessage));
//       }
//       const chunks: Uint8Array[] = [];
//       response.on("data", (chunk) => {
//         chunks.push(chunk);
//       });
//       response.on("end", () => {
//         const data = Buffer.concat(chunks).toString();
//         const result: Response = {
//           data: JSON.parse(data),
//           headers,
//         };
//         resolve(result);
//       });
//     }).end();
//   });
// }

// performRequest({
//   host: "jsonplaceholder.typicode.com",
//   path: "/todos/1",
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const req = request(
//   {
//     host: "localhost",
//     port: "5001",
//     path: "/",
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   },
//   (response) => {
//     console.log(response.statusCode); // 200
//   }
// );

// req.write(
//   JSON.stringify({
//     author: "Marcin",
//     title: "Lorem ipsum",
//     content: "Dolor sit amet",
//   })
// );

// req.end();

import * as FormData from "form-data";
import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./photo.jpeg");
const writeStream = createWriteStream("./file.txt");

const form = new FormData();
form.append("photo", readStream);
form.append("firstName", "Marcin");
form.append("lastName", "Wanago");

console.log(form.getHeaders());

form.pipe(writeStream);
