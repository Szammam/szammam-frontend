import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';

export function NotFoundPage() {
  return (
    <PageContainer
      title="404 — Page Not Found"
      description="The page you requested does not exist."
    >
      <p>
        Return to{' '}
        <Link to="/" className="text-link">
          Home
        </Link>
        .
      </p>
    </PageContainer>
  );
}
