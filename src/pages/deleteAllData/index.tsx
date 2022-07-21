import { useEffect, useState } from "react";
import { Button, Modal, Typography } from "antd";
import { SaveOutlined, DeleteFilled } from '@ant-design/icons';
import { InsideLayout } from "./styles";
import { DataInterface } from '../../hooks/@types'
import { cleamAPI, saveFile, getHumiTemp } from '../../hooks'

const { confirm } = Modal;
const { Title, Paragraph } = Typography;

const deleteDialogModal = () => {
    confirm({
      title: 'Você tem certeza que quer deletar todos os dados?',
      icon: <SaveOutlined />,
      content: 'Essa ação não poderá ser revertida',
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk() {
        return new Promise((res, rej) => {
            cleamAPI().then(res).catch(rej)
        });
    },
      onCancel() {},
    });
  };

export default function DeleteAllData(){

    const defaultData = {humidity: 0, temperature:0, createdAt: new Date()}

    const [fetchData, setData] = useState<Array<DataInterface>>([defaultData]);


    useEffect(()=>{
        getHumiTemp().then((data) =>{
          setData(data);
        });
    },[]);

    return(
        <>
        <InsideLayout>
            <Title>Você tem {fetchData.length} Dados</Title>
            <Paragraph>
                De: {fetchData[0].createdAt.toString()} até:  {fetchData[fetchData.length-1].createdAt.toString()}
            </Paragraph>
            <Button
                icon={<DeleteFilled />}
                type="primary"
                danger
                onClick={deleteDialogModal}
            >
                Limpar
            </Button>
        </InsideLayout>
        <InsideLayout>
            <Title level={3}>Por que dessa funcionalidade?</Title>
            <Paragraph>
                O projeto original usa um banco de dados para Hobbies, com capacidade limitada, sendo assim,
                foi necessário colocar uma funcionalidade para limpar os dados. Entretanto você pode salvar esses dados num arquivo .json
                caso queira utiliza-lo.
            </Paragraph>
            <Button
                icon={<SaveOutlined />}
                style={{ background: "yellow", borderColor: "yellow", color: "black" }}
                onClick={()=>{
                    saveFile(fetchData)
                }}
            >
                Save as JSON
            </Button>
        </InsideLayout>
        </>
    );
}