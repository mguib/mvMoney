import { Summary } from '../Summary';
import {Container} from './styles'
import {TransactionsTable} from '../TransactionsTable/idex';

export function Dashboard(){
  return (
    <Container>
      <Summary/>
      <TransactionsTable/>
    </Container>
  );
}