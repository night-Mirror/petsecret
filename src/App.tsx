/*
 * @LastEditors: night
 * @Author: night
 */
import React, { useEffect, useState } from 'react';
import Layout from './layout/layout';
import ImgCard from './components/imgCard/imgCard';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import ja_JP from 'antd/lib/locale/ja_JP';
import en_US from 'antd/lib/locale/en_US';
function App() {
  const lang = useSelector((store: Store) => store.app.lang)
  const [locale, setLocale] = useState(zh_CN)
  useEffect(() => {
    switch (lang) {
      case 'zh_CN':
        setLocale(zh_CN)
        break;
      case 'ja_JP':
        setLocale(ja_JP)
        break;
      case 'en_US':
        setLocale(en_US)
        break;
      default:
        setLocale(zh_CN)
        break;
    }
  }, [lang])
  function onChange<T, U>(date: T, dateString: U) {
    console.log(date, dateString);
  }
  return (
    <ConfigProvider locale={locale}>
      <div className="App">
        <Layout></Layout>
        <ImgCard />
        <header className="App-header">

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <DatePicker onChange={onChange} />
      </div>
    </ConfigProvider>
  );
}

export default App;
