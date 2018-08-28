import { Button, Icon, message, Upload  } from 'antd';
import * as React from 'react';
import './App.less';

import logo from './logo.svg';
import { spawn } from 'child_process';
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  name: 'file',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
  }
}

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <Upload {...props}>
//           <Button>
//             <Icon type='upload' /> Click to upload
//           </Button>
//         </Upload>
//       </div>
//     );
//   }
// }
class App extends React.Component {
  render() {
    return (
      <div>
        <span>fff</span>
      </div>
    )
  }
}

export default App;


