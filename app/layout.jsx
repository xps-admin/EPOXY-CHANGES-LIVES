import './globals.css';
import { Shell } from '../components/ecl-ui';

export const metadata = {
  title: 'Epoxy Changes Lives Automation System',
  description: 'Workflow-first automation and control layer for Epoxy Changes Lives.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
