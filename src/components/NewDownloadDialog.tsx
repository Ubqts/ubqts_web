"use client";
import "./NewDownloadDialog.css";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input } from '@mui/material';

import useDownloads from "../hooks/useDownloads";
import Loading from "./loading";

type NewDownloadProps = {
    open: boolean;
    onClose: () => void;
};

export default function NewDownloadDialog({ open, onClose }: NewDownloadProps) {
    // const [ file, setFile ] = useState<File | null>(null);
    const [ fileUrl, setFileUrl ] = useState<string>("");
    const [ fileType, setFileType ] = useState<string>("");
    const [ fileSize, setFileSize ] = useState<string>("");
    const [ name, setName ] = useState<string>("");
    const [ loading, setLoading ] = useState(false);
    const { postDownloads } = useDownloads();
    const router = useRouter();

    const handleAddDownloads = async () => {
        if (fileUrl === "") {
            alert("未輸入檔案連結");
            return;
        } else if (fileType === "") {
            alert("未輸入檔案類型");
            return;
        } else if (fileSize === "") {
            alert("未輸入檔案大小");
            return;
        } else {
            try {
                setLoading(true);
                // if (name === "") {
                //     alert("未輸入檔名，將以原始檔案名稱作為檔名");
                //     await postDownloads({ name: file.name.substring(0, file.name.lastIndexOf(".")), file: file });
                // } else {
                //     await postDownloads({ name: name, file: file });
                // }
                await postDownloads({ name: name, file_url: fileUrl, file_type: fileType, file_size: fileSize });
                setLoading(false);
                alert("新增檔案成功！");
                onClose();
                router.refresh();
            } catch (error) {
                setLoading(false);
                alert("發生錯誤！");
                console.error("error: ", error);
            }
        }
    }

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setFile(e.target.files[0]);
    //     }
    // }

    return (
        <Dialog open={open} onClose={onClose}>
            <div>
                <DialogTitle>新增檔案</DialogTitle>
                <div className="fileContainer">
                    {/* <input type="file" onChange={handleFileChange} /> */}
                    <Input placeholder="檔案連結" onChange={(e) => setFileUrl(e.target.value)}/>
                    <Input placeholder="檔案類型" onChange={(e) => setFileType(e.target.value)}/>
                    <Input placeholder="檔案大小" onChange={(e) => setFileSize(e.target.value)}/>
                    <Input placeholder="檔案名稱" onChange={(e) => setName(e.target.value)}/>
                </div>
                <DialogActions>
                    <Button onClick={onClose}>取消</Button>
                    <Button onClick={() => handleAddDownloads()}>新增檔案</Button>
                </DialogActions>
            </div>

            <Loading open={loading} />
        </Dialog>
    );
}