import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import '@/common/styles/frame.styl'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={globalRouters} />
  </ConfigProvider>
)
