import { BackendStatus } from '../components/BackendStatus';
import { PageContainer } from '../components/layout/PageContainer';

export function HomePage() {
  return (
    <PageContainer
      title="Home / Menu"
      description="Browse today's available campus meals and quick picks."
    >
      <BackendStatus />
      <p>Wireframe content slot: Featured meals & category filters.</p>
    </PageContainer>
  );
}
