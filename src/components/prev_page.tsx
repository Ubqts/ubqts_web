// export default function PrevPage() {
//     return (
//         <>
//             {homePage && <a className="prevPage" href="/new_product">新增產品</a>}
//             {!homePage && !isEditing && <a className="prevPage" onClick={() => setIsEditing(true)}>編輯產品</a>}
//             {!homePage && isEditing && <a className="prevPage" onClick={() => setIsEditing(false)}>取消編輯</a>}
//             {!homePage && <a className="prevPage" onClick={() => {
//                 const url = window.location.href;
//                 const id = Number(url.split('=').pop());
//                 deleteProduct(id);
//             }}>刪除產品</a>}
//             {homePage && <a className="prevPage" href="/#">回上一頁</a>}
//             {!homePage && isEditing && <a className="prevPage" onClick={() => setSaveProduct(true)}>儲存編輯</a>}
//         </>
//     )
// }