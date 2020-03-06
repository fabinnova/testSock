const axios = require('axios').default;
const FormData = require('form-data');
const io = require('socket.io-client');
const Cookies = require('js-cookie');

Cookies.set('connect.sid', 's%3AhDY4TzWYrEzYAiw9s_JxPc3OCKbAD02R.Ap1b4NCXk6SJHS9z0o5GJ2zSQs9jgct8rKvp8oprzHg');
Cookies.set('io', 'S8a_kXHHoXPLIjZ3AADT');

var socket = io('http://192.168.15.5');

socket.on('connect', function(){
    
  socket.emit('alive');
  socket.emit('initReady');
  socket.emit('joinroom', 'HMI');
  socket.emit('joinroom', 'remoteHMI');
  setInterval(function() {
      console.log("hmiHeartBeat");
      socket.emit('hmiHeartbeat');
  }, 500);
  
  setInterval(function() {
        console.log("alive");
        socket.emit('alive');
  }, 5000);

});
socket.on('disconnect', function(){
    console.log("disconnect");
});
socket.on('frommedi', function (data) {
  console.log(data);
});



// async function main() {


//     var socket = io('http://192.168.15.5');
//     socket.on('connect', function(){
//       socket.emit('alive');
//       socket.emit('initReady');
//       socket.emit('joinroom', 'HMI');
//       socket.emit('joinroom', 'remoteHMI');
//       setInterval(function() {
//           socket.emit('hmiHeartbeat');
//       }, 500);
      
//       setInterval(function() {
//           socket.emit('alive');
//       }, 5000);

//     });
//     socket.on('disconnect', function(){
//         console.log("disconnect");
//     });
//     socket.on('frommedi', function (data) {
//       console.log(data);
//     });




    // let bodyFormData = new FormData();
    // bodyFormData.append('inputUser', 'innovagroup');
    // bodyFormData.append('inputPass', '6969');
    // bodyFormData.append('inputPassHash', '6161b2838ffa6ce17b84db3b45b4f8437855ecf43e75de2d1ad0008eaae91aa0');

    // let response = await axios.post('http://192.168.15.5/HMI/login.html', bodyFormData);

    // console.log(response);

    // let cookie = response.headers['set-cookie'][0].split(';')[0];
    // console.log(cookie);
    // const options = {
    //     reconnection: true,
    //     reconnectionDelay: 1000,
    //     reconnectionDelayMax : 5000,
    //     reconnectionAttempts: 99999,
    //     secure: true,
    //     transportOptions: {
    //         polling: {
    //             extraHeaders: {
    //                 'Cookie': cookie + ";io=xtODoKije8Af6UOAAAB-;",
    //                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36'
    //             }
    //         }
    //     }
    // }
    
    // var io = require('socket.io-client');
    // var socket = io('http://192.168.15.5');
    
    // socket.on('connectionToSlow', function (data) {
    //         console.log(data);
    // });
    // socket.on('disconnect', function(e) {
    //     console.log(e);
    //     console.log(socket);
    //     console.log('Client disconnected.');
    // });
    // socket.on('connect', function(){
    //     console.log("connect");
       
    //     // socket.emit('alive');
    //     // socket.emit('syslog', {
    //     //     level: "debug",
    //     //     message: "Socket.IO upgrade to transport websocket",
    //     //     timestamp: 1583306739935
    //     // });
    //     // socket.emit('initReady');
    //     // socket.emit('joinroom', 'HMI');
    //     // socket.emit('joinroom', 'remoteHMI');
    //     // socket.on('frommedi', function (data) {
    //     //     console.log(data);
    //     // });
    // });
    // // socket.emit('alive');
    // //     socket.emit('syslog', {
    // //         level: "debug",
    // //         message: "Socket.IO upgrade to transport websocket",
    // //         timestamp: 1583306739935
    // //     });
    // //     socket.emit('initReady');
    // //     socket.emit('joinroom', 'HMI');
    // //     socket.emit('joinroom', 'remoteHMI');
    // //     socket.on('frommedi', function (data) {
    // //         console.log(data);
    // //     });
    // // console.log(socket);
  
    // // socket.emit('alive');
    // // socket.emit('syslog', {
    // //     level: "debug",
    // //     message: "Socket.IO upgrade to transport websocket",
    // //     timestamp: 1583306739935
    // // });
    // // socket.emit('initReady');

    // // socket.emit('joinroom', 'HMI');
    // // socket.emit('joinroom', 'remoteHMI');

    // // socket.on('frommedi', function (data) {
    // //     console.log(data);
    // // });

    // while(true) {
    //     await timeout(1000);
    // }

    
// }

// main();
// console.log("end");