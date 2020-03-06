(function() {
    // let statOverviewOverallPower = document.getElementById('statOverviewOverallPower');
    // let statOverviewConsumption = document.getElementById('statOverviewConsumption');

    // statOverviewOverallPower.addEventListener('DOMSubtreeModified', function (el) {
    //     console.log("change");
    // });
    // statOverviewConsumption.addEventListener('DOMSubtreeModified', function (el) {
    //     console.log("change2");
    // });
    // console.log(statOverviewOverallPower, statOverviewConsumption)

    setInterval( async () => { 
        try {
            let send = await axios.post('http://192.168.12.181:9999/current' , 
                {
                    'statOverviewOverallPower': document.getElementById('statOverviewOverallPower').innerHTML,
                    'statOverviewConsumption': document.getElementById('statOverviewConsumption').innerHTML,
                    'timestamp': (new Date()).getTime()
                }
            );
            console.log(send);
        } catch(e) {
            console.log(e);
        }

    }, 5000);

})()





// var socket = io.connect('http://192.168.15.5');
// let first = true;
// socket.emit('alive');
// socket.emit('initReady');
// socket.emit('joinroom', 'HMI');
// socket.emit('joinroom', 'remoteHMI');
    
// setInterval(function() {
//     socket.emit('hmiHeartbeat');
// }, 500);

// setInterval(function() {
//     socket.emit('alive');
// }, 5000);

// socket.on('frommedi', async function (data) {
//     // console.log(data.data.header.from);
//     if( true || data.data.header.from == 'si/currentProcessImage') {
//         // console.log(JSON.parse(data.data.body));
//         try {
//             let send = await axios.post('http://192.168.12.181:9999/current/'+encodeURIComponent(data.data.header.from) , JSON.parse(data.data.body));
//             if(first) {
//                 console.log(send);
//                 first = false;
//             }
//         } catch(e) {
//             console.log(e);
//         }
//     }
// });
// socket.on('disconnect', function (data) {
//     console.log(data);
// });