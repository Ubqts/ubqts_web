// export default function SidePanel() {
//     return (
//         <div className="productPanel">
//             <p onClick={() => {
//                 router.push("/product_page");
//                 setHomePage(true);
//             }}>產品介紹</p>
//             {productList.map((product) => (
//                 <p
//                     className="product"
//                     key={product.id}
//                     onClick={() => {
//                         router.push(`/product_page/id=${product.id}`);
//                         setHomePage(false);
//                     }}>
//                     {product.name}
//                 </p>
//             ))}
//         </div>
//     )
// };