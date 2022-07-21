import { Line, LineConfig } from '@ant-design/plots';
import { Col, Row, Statistic } from 'antd';
import { BsExclamationCircle, BsFillCalculatorFill, BsThermometerSnow, BsThermometerSun, BsWater } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { DataInterface } from '../../hooks/@types';
import { getHumiTemp } from '../../hooks';
import { ContainerHeader } from './style';

function ControllPanel() {
  
    const defaultData = {humidity: 0, temperature:0, createdAt: new Date("")}

    const [fetchData, setData] = useState<Array<DataInterface>>([defaultData]);


    useEffect(()=>{
        getHumiTemp().then( data =>{
          setData(data);
        });
    },[]);

      const config: LineConfig = {
        data: fetchData,
        xField: 'createdAt',
        yField: 'temperature',
        padding: 'auto',
        xAxis: {
          tickCount: 5
        },
      };
      
      const lastesData = {
        humidity: fetchData[fetchData.length-1].humidity,
        temp: fetchData[fetchData.length-1].temperature
      }
    return(
    <>
    <Row justify='center'>
      <Col span={8}>
        <ContainerHeader>
          <Statistic
            title="Ultima temperatura"
            value={lastesData.temp}
            prefix={(lastesData.temp) <= 20 ?
            <BsThermometerSnow /> : <BsThermometerSun />}
            suffix="°C"
          />
        </ContainerHeader>
      </Col>
      <Col span={8}>
        <ContainerHeader>
          <Statistic
            title="Ultima Umidade"
            value={lastesData.humidity}
            prefix={(lastesData.humidity) <= 50 ?
            <BsExclamationCircle /> : <BsWater />}
            suffix="%"
          />
        </ContainerHeader>
      </Col>
      <Col>
        <ContainerHeader>
          <Statistic
            title="Amplitude Termica"
            value={Math.trunc((lastesData.temp/lastesData.humidity)*100)}
            prefix={<BsFillCalculatorFill />}
            suffix="%"
          />
        </ContainerHeader>
      </Col>
    </Row>
      <Line {...config} style={{height: "80%", width: "100%"}}/>
    </>
    );    
}

export default ControllPanel;