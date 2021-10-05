import { PageContainer } from '@components/containers';
import { StandingsTable } from '@components/StandingsTable';
import { Header } from '@lib/Header';
import { ReactElement } from 'react';

export const StandingsPage = (): ReactElement => (
  <PageContainer>
    <Header>Standings</Header>
    <StandingsTable />
  </PageContainer>
);
