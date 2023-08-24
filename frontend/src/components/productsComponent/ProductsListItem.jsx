import ProductsItem from './ProductsItem';
import Grid from '../lib/Grid';
import Row from '../lib/Row';
import Col from '../lib/Col';
function ProductsListItem({ title, danhsach = []}) {
    return (
        <div>
            {
                title
                    ? <h1>{title}</h1>
                    : ""
            }
            <Grid checkWide={false}>
                <Row>
                    {
                        danhsach.map((value) => (
                            <Col key={value.id} pc={3} table={4} mobie={6}>
                                <ProductsItem to={`/product/${value.id}`} biaSach={value.biaSach} tenSach={value.tenSach} tacGia={value.tacGia}/>
                            </Col>
                        ))
                    }
                </Row>
            </Grid>
        </div>
    )
}
export default ProductsListItem;