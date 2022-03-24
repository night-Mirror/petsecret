/*
 * @LastEditors: night
 * @Author: night
 */
import { useEffect, useState, } from 'react';
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import zh_CN from 'antd/lib/locale/zh_CN';
import ja_JP from 'antd/lib/locale/ja_JP';
import en_US from 'antd/lib/locale/en_US';
import { routes, } from './route';
import transformRoutes from './route/router';
function App() {
  const lang = useSelector((store: Redux.Store) => store.app.lang)
  const [locale, setLocale] = useState(zh_CN)
  const elements = useRoutes(transformRoutes(routes))
  useEffect(() => {
    switch (lang) {
      case 'cn':
        setLocale(zh_CN)
        break;
      case 'jp':
        setLocale(ja_JP)
        break;
      case 'en':
        setLocale(en_US)
        break;
      default:
        setLocale(zh_CN)
        break;
    }
  }, [lang])
  return (
    <ConfigProvider locale={locale}>
      {elements}
    </ConfigProvider>
  );
}
export default App;
