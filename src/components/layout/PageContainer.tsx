import type { ReactNode } from 'react';
import './layout.css';

interface PageContainerProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function PageContainer({ title, description, actions, children }: PageContainerProps) {
  return (
    <section className="page-container">
      <div className="page-container__header">
        <div>
          <h1 className="page-container__title">{title}</h1>
          {description && <p className="page-container__description">{description}</p>}
        </div>
        {actions && <div className="page-container__actions">{actions}</div>}
      </div>

      <div className="page-container__body">{children}</div>
    </section>
  );
}
