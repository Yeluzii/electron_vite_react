import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { goto } from '@/api'
import './home.styl'

const { ipcRenderer } = window.electron

const Home = () => {
  const navigate = useNavigate()

  const [modal, contextHolder] = Modal.useModal()

  const readDir = () => {
    ipcRenderer.send('readDir', { msg: 'test' })
    window.api.readDirReply((event, result) => {
      if (!result.canceled) {
        console.log(result)
      } else {
        console.log('取消选择操作')
      }
    })
  }

  const getElectronVersion = () => {
    ipcRenderer.invoke('getElectronVersion').then((result) => {
      modal.info({
        title: 'Electron版本号',
        content: result
      })
    })
  }

  return (
    <div className="P-home">
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button type="primary" onClick={readDir}>
          读取目录列表
        </Button>
      </div>
      <div className="ipt-con">
        <Button type="primary" onClick={getElectronVersion}>
          查看Electron版本
        </Button>
      </div>
      {contextHolder}
      <div className="ipt-con">
        <Button
          onClick={() => {
            goto('/login')
          }}
        >
          组件外跳转
        </Button>
      </div>
      <div className="ipt-con">
        <Button
          onClick={() => {
            navigate('/login')
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  )
}

export default Home
