import { render } from '@testing-library/react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/Button';

describe('Button Component', () => {
  it('should render', () => {
    const { getByText } = render(<Button>Button Component</Button>);
    expect(getByText('Button Component')).toBeInTheDocument();
  });

  it('should render with icon', () => {
    const { getByText } = render(
      <Button>
        Button Component
        <ArrowRight />
      </Button>
    );
    expect(getByText('Button Component')).toBeInTheDocument();
    expect(
      getByText('Button Component').querySelector('svg')
    ).toBeInTheDocument();
  });

  it('should render with the right arrow icon', () => {
    const icon = render(
      <Button>
        <ArrowRight />
      </Button>
    );
    expect(icon.container.querySelector('svg')).toBeInTheDocument();
    expect(icon.container.querySelector('svg')).toHaveClass(
      'lucide lucide-arrow-right'
    );
  });
});
