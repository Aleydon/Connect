import { render } from '@testing-library/react';
import { Copy } from 'lucide-react';

import { IconButton } from '@/components/IconButton';

describe('Icon Component', () => {
  it('should render with icon', () => {
    const icon = render(
      <IconButton>
        <Copy />
      </IconButton>
    );
    expect(icon.container.querySelector('svg')).toBeInTheDocument();
    expect(icon.container.querySelector('svg')).toHaveClass(
      'lucide lucide-copy'
    );
  });
});
