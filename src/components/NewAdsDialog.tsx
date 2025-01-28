"use client";
import "./NewAdsDialog.css";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input } from '@mui/material';

import useAds from "@/src/hooks/useAds";
import Loading from "@/src/components/loading";

type NewAdsDialogProps = {
    open: boolean;
    onClose: () => void;
};

export default function NewAdsDialog({ open, onClose }: NewAdsDialogProps) {
    const [image, setImage] = useState<File | null>(null);
    const [imgLng, setImgLng] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { postAds } = useAds();
    const router = useRouter();

    const handleAddAds = async () => {
        if (image === null) {
            alert("請輸入圖片");
            return;
        } else if (imgLng === "") {
            alert("請輸入語言");
            return;
        } else {
            // console.log("image: ", image);
            // console.log("imgLng: ", imgLng);
            try {
                setLoading(true);
                await postAds({ picture: image, language: imgLng });
                setLoading(false);
                alert("新增廣告成功！");
                router.refresh();
                onClose();
            } catch (error) {
                alert("新增廣告失敗！");
                setLoading(false);
                console.log("error: ", error);
            }
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <div>
                <DialogTitle>新增廣告</DialogTitle>
                <div className="fileContainer">
                    <input type="file" accept=".jpg, .jpeg, .png"
                        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
                </div>
                <div className="langContainer">
                    <div className="choice">
                        <input type="checkbox" value="en" id="enAd" checked={imgLng === "en"} onChange={(e) => setImgLng(e.target.value)} />
                        <label htmlFor="enAd">英文</label>
                    </div>
                    <div className="choice">
                        <input type="checkbox" value="zh-tw" id="twAd" checked={imgLng === "zh-tw"} onChange={(e) => setImgLng(e.target.value)} />
                        <label htmlFor="twAd">繁體中文</label>
                    </div>
                    <div className="choice">
                        <input type="checkbox" value="zh-cn" id="cnAd" checked={imgLng === "zh-cn"} onChange={(e) => setImgLng(e.target.value)} />
                        <label htmlFor="cnAd">簡體中文</label>
                    </div>
                </div>
                <DialogActions>
                    <Button onClick={onClose}>取消</Button>
                    <Button onClick={() => handleAddAds()}>新增廣告</Button>
                </DialogActions>
            </div>
            <Loading open={loading}/>
        </Dialog>
    );
}