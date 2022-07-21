import FileSaver from "file-saver";
import { DataInterface } from '../@types';

export default function saveFile(data: DataInterface[]) {
    const blob = new Blob([JSON.stringify(data)], {
        type: "text/plain;charset=utf-8"
    });
    FileSaver.saveAs(blob, "save-data.json");
}