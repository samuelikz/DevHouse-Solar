import { Cards, Grafico } from "../../components";
import Container from "../../components/template/Container/Container";

export default function Dashboard(){
    return (
        <Container title="Dashboard">
            <Cards/>
            <Grafico/>
        </Container>
    )
}