import { Table } from "antd";
import { useEffect, useState } from "react";
import { DataInterface } from '../../hooks/@types';
import { getHumiTemp } from '../../hooks';

function VizualizeData() {

    const defaultData: DataInterface = {humidity: 0, temperature:0, createdAt: new Date("")}

    const [fetchData, setData] = useState<Array<DataInterface>>([defaultData]);

    useEffect(()=>{
        getHumiTemp().then( data =>{
            setData(data);
          });
    }, []);


    const colums = [
        {
            title: "Temperatura",
            dataIndex: "temperature",
            render: (e: any) => `${e}°C`
            
        },
        {
            title: "Umidade",
            dataIndex: "humidity",
            render: (e: any) => `${e}%`
        },
        {
            title: "Created At",
            dataIndex: "createdAt"
        }
    ]

    return(
        <>
            <Table
                columns={colums}
                dataSource={fetchData}
                size="middle"
                pagination={{pageSize: 8}}
            />
        </>
    );
}

export default VizualizeData;