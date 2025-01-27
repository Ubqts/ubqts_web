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
    const [ file, setFile ] = useState<File | null>(null);
    const [ name, setName ] = useState<string>("");
    const [ loading, setLoading ] = useState(false);
    const { postDownloads } = useDownloads();
    const router = useRouter();

    const handleAddDownloads = async () => {
        if (file === null) {
            alert("請選擇檔案");
            return;
        } else {
            if (name === "") {
                alert("未輸入檔名，將以原始檔案名稱作為檔名");
                setName(file.name);
            }
            try {
                setLoading(true);
                await postDownloads({ name: name, file: file });
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

    return (
        <Dialog open={open} onClose={onClose}>
            <div>
                <DialogTitle>新增檔案</DialogTitle>
                <div className="fileContainer">
                    <input type="file"
                        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
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