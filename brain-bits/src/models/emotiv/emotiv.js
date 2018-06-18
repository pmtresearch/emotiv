import { spawn } from 'child_process';
import EventEmitter from 'events';

const emotivProcess = spawn('node', ['lib/emotiv-reader.js'], { stdio: ['ipc', 'ignore', 'ignore'] });

window.onbeforeunload = (e) => {
    emotivProcess.kill();
};

emotivProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

process.on('exit', () => {
    emotivProcess.kill();
});

export default class Emotiv extends EventEmitter {
    start() {
        if (emotivProcess.listenerCount > 0) return;

        emotivProcess.on('message', data => this.emit('data', data, Date.now()));
    }

    stop() {
        emotivProcess.removeAllListeners();
    }
}
