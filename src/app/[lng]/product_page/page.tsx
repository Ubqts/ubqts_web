import './page.css';

export default function ProductPage() {
    const test_string = "<p>oijcdoijcso</p> \
                        <table style=\"border-collapse: collapse; width: 100%;\" border=\"1 solid black\"><colgroup><col style=\"width: 49.9121%;\"><col style=\"width: 49.9121%;\"></colgroup> \
                        <tbody> \
                        <tr> \
                        <td>oicjds</td> \
                        <td>jp3r31928</td> \
                        </tr> \
                        <tr> \
                        <td>9813ey78v8</td> \
                        <td>uhusiuhi</td> \
                        </tr> \
                        </tbody> \
                        </table> \
                        <p>&nbsp;</p>";

    return (
        <>
            {/* 感覺可以放個所有產品的概述之類的 */}
            <div className="content">
                <h1 className="title">lorem ipsum dolor sit</h1>
                <img src="https://picsum.photos/400/200?random=1" alt="productImg" />
                <div dangerouslySetInnerHTML={{ __html: test_string }} />
            </div>
            <div><a className="prevPage" href="/new_product">新增產品</a></div>
        </>
    );
}