// 建立WebSocket连接
const ws = new WebSocket('ws://localhost:3003');

ws.onmessage = function(event) {
    if (event.data === 'reload') {
        console.log('Reloading page...');
        window.location.reload();
    }
};
